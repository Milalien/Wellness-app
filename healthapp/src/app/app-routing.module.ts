import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FooddiaryComponent } from './fooddiary/fooddiary.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProfileComponent } from './account/profile/profile.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { authGuard } from './auth.guard';
import { FooddiarypageComponent } from './fooddiarypage/fooddiarypage.component';
import { UpdateinfoComponent } from './account/updateinfo/updateinfo.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent, canActivate: [authGuard] },
  { path: 'frontpage', component: FrontpageComponent, canActivate: [authGuard] },
  { path: 'fooddiary', component: FooddiarypageComponent, canActivate: [authGuard] },
  { path: 'programs', component: ProgramsComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'updateinfo', component: UpdateinfoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
