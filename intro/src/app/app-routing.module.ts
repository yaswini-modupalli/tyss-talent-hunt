import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { ViewRequirementComponent } from './view-requirement/view-requirement.component';
import { ViewSchedulesComponent } from './view-schedules/view-schedules.component';

const routes: Routes = [
  { path : 'add-requirement', component : AddRequirementComponent },
  { path : 'schedule-interview', component : ScheduleInterviewComponent },
  { path : 'view-requirement', component : ViewRequirementComponent },
  { path : 'view-schedules', component : ViewSchedulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
