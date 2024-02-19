import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { User } from '../Models/user';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: CalendarEvent[] = [];
  user = this.userService.exampleUser;

  private eventUrl = 'api/Events';

  constructor(private Http: HttpClient, public userService: UserService) {

  }

  getEvents(): CalendarEvent[] {
    return this.events;
  }
  addEvent(newEvent: CalendarEvent) {
    this.events = [...this.events, newEvent];
  }
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  // HTTP methods (don't work yet) :

  getEvents2(): Observable<CalendarEvent[]> {
    return this.Http.get<CalendarEvent[]>(this.eventUrl);
  }

  postEvent(event: CalendarEvent): Observable<CalendarEvent> {
    return this.Http.post<CalendarEvent>(this.eventUrl, event);
  }
}
