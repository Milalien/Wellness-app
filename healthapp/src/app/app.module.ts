import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooddiaryComponent } from './fooddiary/fooddiary.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ProgramsComponent,
    ProfileComponent,
    CalendarComponent,
    FooddiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
