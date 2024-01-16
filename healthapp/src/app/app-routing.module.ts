import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FooddiaryComponent } from './fooddiary/fooddiary.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProfileComponent } from './profile/profile.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent, canActivate: [authGuard] },
  { path: 'frontpage', component: FrontpageComponent, canActivate: [authGuard] },
  { path: 'fooddiary', component: FooddiaryComponent, canActivate: [authGuard] },
  { path: 'programs', component: ProgramsComponent, canActivate: [authGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
