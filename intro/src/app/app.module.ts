import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { ViewRequirementComponent } from './view-requirement/view-requirement.component';
import { ViewSchedulesComponent } from './view-schedules/view-schedules.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleInterviewComponent,
    NavbarComponent,
    AddRequirementComponent,
    ViewRequirementComponent,
    ViewSchedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
