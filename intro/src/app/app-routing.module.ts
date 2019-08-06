import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { ViewRequirementComponent } from './view-requirement/view-requirement.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { ViewSchedulesComponent } from './view-schedules/view-schedules.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path : 'login', component : LoginComponent },
  { path : 'register-user', component : RegisterUserComponent },
  { path : 'forgot-password', component : ForgotPasswordComponent },
  { path : 'dashboard', component :  DashboardComponent, canActivate: [AuthGuardGuard] },
  { path : 'statistics', component : StatisticsComponent, canActivate: [AuthGuardGuard] },
  { path : 'add-requirement', component : AddRequirementComponent, canActivate: [AuthGuardGuard] },
  { path : 'schedule-interview', component : ScheduleInterviewComponent, canActivate: [AuthGuardGuard] },
  { path : 'view-requirement', component : ViewRequirementComponent, canActivate: [AuthGuardGuard] },
  { path : 'view-schedules', component : ViewSchedulesComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
