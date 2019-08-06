import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequirementService } from '../Services/requirement/requirement.service';
import { Requirement } from '../Models/requirement';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {

  stacks = ['MEAN', 'MERN', 'Java', 'Dot Net', 'Python', 'Devops'];

  constructor(private reqService: RequirementService) {
   }

  // reset form
  resetForm(form ?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  //get data
  getRequirement() {
    this.reqService.getData().subscribe(res => {
      this.reqService.requirement = res as Requirement[];
    });
  }

  // post data
  addRequirement(form: NgForm) {
    const oneRequirement = form.value;
    this.reqService.postData(oneRequirement).subscribe(res => {
      console.log(res);
      this.reqService.requirement.unshift(oneRequirement);
      this.resetForm(form);
      this.getRequirement(); 
    });
  }
  
  ngOnInit() {
    this.getRequirement();
  }

}
