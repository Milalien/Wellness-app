import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { User } from '../Models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: CalendarEvent[] = [];
  user = this.userService.exampleUser;
  constructor(public userService: UserService) {

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
}
