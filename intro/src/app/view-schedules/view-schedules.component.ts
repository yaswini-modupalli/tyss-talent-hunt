import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
import { NgForm } from '@angular/forms';
import { Interview } from '../Models/interview';

@Component({
  selector: 'app-view-schedules',
  templateUrl: './view-schedules.component.html',
  styleUrls: ['./view-schedules.component.css']
})
export class ViewSchedulesComponent implements OnInit {

  constructor(private interviewService: InterviewService) { }

  // reset form
  resetForm(form ?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  //get data
  getRequirement() {
    this.interviewService.getData().subscribe(res => {
      this.interviewService.interviews = res as Interview[];
    });
  }
  
  // post data
  addRequirement(form: NgForm) {
    const oneInt = form.value;
    if (oneInt._id) {
      this.interviewService.putData(oneInt).subscribe(res => {
        console.log(res);
        this.getRequirement();
        this.resetForm(form);
      });
    }
  }

  // edit Data
  editRequirement(interview) {
    this.interviewService.selectedInterview = interview;
  }

   // remove data
   removeRequirement(id) {
    this.interviewService.deleteData(id).subscribe(() => {
      this.getRequirement();
    });
  }

  ngOnInit() {
    this.getRequirement();
  }

}
