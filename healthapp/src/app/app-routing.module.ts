import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FooddiaryComponent } from './fooddiary/fooddiary.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProfileComponent } from './profile/profile.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'fooddiary', component: FooddiaryComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
