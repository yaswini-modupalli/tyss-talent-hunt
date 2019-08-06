import { Component, OnInit } from '@angular/core';
import { Requirement } from '../Models/requirement';
import { RequirementService } from '../Services/requirement/requirement.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-requirement',
  templateUrl: './view-requirement.component.html',
  styleUrls: ['./view-requirement.component.css']
})
export class ViewRequirementComponent implements OnInit {
  constructor(private reqService: RequirementService) { }

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
    const oneReq = form.value;
    if (oneReq._id) {
      this.reqService.putData(oneReq).subscribe(res => {
        console.log(res);
        this.getRequirement();
        this.resetForm(form);
      });
    }
  }

  // edit Data
  editRequirement(requirement) {
    this.reqService.selectedRequirement = requirement;
  }

  // remove data
  removeRequirement(id) {
    this.reqService.deleteData(id).subscribe(() => {
      this.getRequirement();
    });
  }

  ngOnInit() {
    this.getRequirement();
  }
}
