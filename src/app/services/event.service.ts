import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Event,
  CreateEventRequest,
  CreateEventResponse,
  UpdateEventRequest,
  GetEventResponse,
  GetEventsResponse
} from '../../contract';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService
  ) {}

  async enrollToEvent(eventId: number): Promise<boolean> {
    const result: HttpResponse<void> = await this.http
      .post<void>(`${environment.apiUrl}event/${eventId}/enroll`, null, {
        observe: 'response',
        headers: await this.setHeaders()
      })
      .toPromise();

    if (result instanceof HttpErrorResponse) {
      if (result.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', result.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${result.status}, ` +
            `body was: ${result.error}`
        );
      }
      return false;
    } else {
      return result.status === 200;
    }
  }

  async createEvent(createRequest: CreateEventRequest): Promise<Event> {
    return await this.http
      .post<CreateEventResponse>(`${environment.apiUrl}event`, createRequest, {
        headers: await this.setHeaders()
      })
      .pipe(
        map((response: CreateEventResponse) => response.event),
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

  async approveEventParticipation(
    eventId: number,
    userId: number
  ): Promise<boolean> {
    return await this.http
      .post<void>(
        `${environment.apiUrl}event7${eventId}/approve/${userId}`,
        null,
        {
          observe: 'response',
          headers: await this.setHeaders()
        }
      )
      .pipe(
        map((response: HttpResponse<void>) => response.status === 200),
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
            return of(false);
          } else {
            throw error;
          }
        })
      )
      .toPromise();
  }

  async updateEvent(updateRequest: UpdateEventRequest): Promise<boolean> {
    return await this.http
      .put<void>(
        `${environment.apiUrl}event/${updateRequest.event.id}`,
        updateRequest,
        {
          headers: await this.setHeaders(),
          observe: 'response'
        }
      )
      .pipe(
        map((response: HttpResponse<void>) => response.status === 200),
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
            return of(false);
          } else {
            throw error;
          }
        })
      )
      .toPromise();
  }

  async cancelEvent(eventId: number): Promise<boolean> {
    return await this.http
      .delete<void>(`${environment.apiUrl}event/${eventId}`, {
        headers: await this.setHeaders(),
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponse<void>) => response.status === 200),
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
            return of(false);
          } else {
            throw error;
          }
        })
      )
      .toPromise();
  }

  async getEventWithParticipants(eventId: number): Promise<GetEventResponse> {
    return await this.http
      .get<GetEventResponse>(`${environment.apiUrl}event/${eventId}`, {
        headers: await this.setHeaders(),
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponse<GetEventResponse>) => response.body),
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

  async getEventsWithPagination(
    currentPage: number,
    pageSize: number
  ): Promise<GetEventsResponse> {
    const params = new HttpParams()
      .append('limit', `${pageSize}`)
      .append('page', `${currentPage}`);
    return this.http
      .get<GetEventsResponse>(`${environment.apiUrl}event`, {
        observe: 'response',
        headers: await this.setHeaders(),
        params
      })
      .pipe(
        map((response: HttpResponse<GetEventsResponse>) => response.body),
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
