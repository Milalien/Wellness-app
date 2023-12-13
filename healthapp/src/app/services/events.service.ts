import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: CalendarEvent[] = [];

  constructor() {

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
