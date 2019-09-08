import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { User, Event } from '../../contract';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;

  private userCreatedEventsSubject: BehaviorSubject<Event[]>;
  public userCreatedEvents$: Observable<Event[]>;

  private userRegisteredEventsSubject: BehaviorSubject<Event[]>;
  public userRegisteredvents$: Observable<Event[]>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser$ = this.currentUserSubject
      .asObservable()
      .pipe(distinctUntilChanged());
    this.userCreatedEventsSubject = new BehaviorSubject<Event[]>([]);
    this.userCreatedEvents$ = this.userCreatedEventsSubject
      .asObservable()
      .pipe(distinctUntilChanged());
    this.userRegisteredEventsSubject = new BehaviorSubject<Event[]>([]);
    this.userRegisteredvents$ = this.userRegisteredEventsSubject
      .asObservable()
      .pipe(distinctUntilChanged());
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  setUserCreatedEvents(events: Event[]): void {
    this.userCreatedEventsSubject.next(events);
  }

  addCreatedEvent(event: Event): void {
    this.userCreatedEventsSubject.next([
      ...this.userCreatedEventsSubject.getValue(),
      event
    ]);
  }

  setUserRegisteredEvents(events: Event[]): void {
    this.userRegisteredEventsSubject.next(events);
  }

  addRegisteredEvent(event: Event): void {
    this.userRegisteredEventsSubject.next([
      ...this.userRegisteredEventsSubject.getValue(),
      event
    ]);
  }
}
