import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { JwtService } from './jwt.service';
import { GetLeaderboardResponse } from 'src/contract';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService
  ) {}

  async getGlobalLeaderboard(): Promise<GetLeaderboardResponse> {
    return this.http
      .get<GetLeaderboardResponse>(`${environment.apiUrl}user/leaderboard`, {
        observe: 'response',
        headers: await this.setHeaders()
      })
      .pipe(
        map((response: HttpResponse<GetLeaderboardResponse>) => response.body),
        catchError(error => {
          if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error(
                `Backend returned code ${error.status}, ` +
                  `body was: ${JSON.stringify(error.error)}`
              );
            }
            return of(null);
          } else {
            throw error;
          }
        })
      )
      .toPromise();
  }

  private async setHeaders(): Promise<HttpHeaders> {
    const jwtToken = await this.jwtService.getToken();
    if (jwtToken) {
      return new HttpHeaders({
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      });
    }
  }
}
