import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthGuardGuard } from './auth-guard.guard';

import { HighchartsChartComponent } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './Services/auth/auth.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { ViewRequirementComponent } from './view-requirement/view-requirement.component';
import { ViewSchedulesComponent } from './view-schedules/view-schedules.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    ScheduleInterviewComponent,
    NavbarComponent,
    AddRequirementComponent,
    ViewRequirementComponent,
    ViewSchedulesComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    RegisterUserComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Initialize Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFirestoreModule // imports firebase/firestore, only needed for database features
  ],
  providers: [AuthGuardGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
