import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../Services/interview/interview.service';
import { NgForm } from '@angular/forms';
import { Interview } from '../Models/interview';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {
  stacks = ['MEAN', 'MERN', 'Java', 'Dot Net', 'Python', 'Devops'];
  constructor(private interviewService: InterviewService) { }

   // reset form
   resetForm(form ?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  //get data
  getInterviews() {
    this.interviewService.getData().subscribe(res => {
      this.interviewService.interviews = res as Interview[];
    });
  }

  // post data
  addInterview(form: NgForm) {
    const interview = form.value;
    this.interviewService.postData(interview).subscribe(res => {
      console.log(res);
      this.interviewService.interviews.unshift(interview);
      this.resetForm(form);
      this.getInterviews(); 
    });
  }

  ngOnInit() {
    this.getInterviews();
  }
}
