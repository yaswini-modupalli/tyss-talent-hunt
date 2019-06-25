import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from './Models/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  apiURL = 'http://localhost:2000/interviews';
  selectedInterview : Interview = {
    _id: '',
    cname: '',
    gender: '',
    sdate: null,
    stack: '',
    contactNo: null,
    email: '',
    relocate: '',
    currOrg: '',
    totalExp: '',
    relevantExp: '',
    cctc: '',
    ectc: '',
    noticePeriod: '',
    location: '',
    interviewPanel: ''
  }
  interviews : Interview[];
  constructor(private http: HttpClient) { }

  //get data
  getData() {
    return this.http.get(`${this.apiURL}/api`);
  }

  //post data
  postData(data) {
    return this.http.post(`${this.apiURL}/add/api`, data);
  }

  // putdata
  putData(oneRequirement: Interview) {
    return this.http.put(`${this.apiURL}/api/edit/${this.selectedInterview._id}`, oneRequirement);
  }

   // delete data
   deleteData(_id) {
    return this.http.delete(`${this.apiURL}/api/${_id}`);
  }
}
