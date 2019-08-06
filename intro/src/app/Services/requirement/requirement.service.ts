import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requirement } from '../../Models/requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  selectedRequirement: Requirement = {
    _id : '',
    client : '',
    stack : '',
    experience : '',
    location : '',
    positions : null,
    designation : '',
    description : '',
    closeDate : null
  } 
  requirement: Requirement[];

  constructor(private http: HttpClient) { 
  }

  //get data
  getData() {
    return this.http.get('http://localhost:2000/requirements/api');
  }

  //post data
  postData(data) {
    return this.http.post(`http://localhost:2000/requirements/add/api`, data);
  }

  // putdata
  putData(oneRequirement: Requirement) {
    return this.http.put(`http://localhost:2000/requirements/api/edit/${this.selectedRequirement._id}`, oneRequirement);
  }

   // delete data
   deleteData(_id) {
    return this.http.delete(`http://localhost:2000/requirements/api/${_id}`);
  }
}
