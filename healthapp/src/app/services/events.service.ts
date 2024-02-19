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
  eventUrl: string = "xx";
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

  getEvents2() {
    return this.Http.get<CalendarEvent>(this.eventUrl);
  }

  postEvent(): Observable<CalendarEvent> {
    return this.Http.post<CalendarEvent>(this.eventUrl, this.events).pipe();
  }
}
