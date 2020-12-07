import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Employee } from '../employee/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private candidate_Data:Employee[] = [ {
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "8/10/2016"
  },
  {"id": 12,"name": "John","department": "HR","joining_date": "18/1/2011"},
  { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019"},
  {"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "7/7/2017"},
  { "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19/8/2014"},
  {"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "5/10/2014"},
  { "id": 17,"name": "Gare","department": "Development",  "joining_date": "6/4/2014"},
  { "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "8/12/2010"},
  {"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "7/5/2011"},
  { "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20/10/2010"}]



  constructor(private http:HttpClient) { }

 get getCandidates(){
       return this.candidate_Data.filter(item=>{
      return item;
    });
  }

  getCandidateDetails(id:number){
    return this.candidate_Data.find(e => e.id == id);
  }

   deleteEmployee(id:number){
    const i = this.candidate_Data.findIndex(e=>e.id === id);
    if(i !== -1){
     return this.candidate_Data.splice(i,1);
    }
   }

}
