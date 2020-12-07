import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../employee/Employee.model';
import { SharedService } from '../Shared/shared.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 candidate:Employee;
 empId:number;

  constructor(private sharedService:SharedService, private route:ActivatedRoute) { }

  getIdFromRoute(){
  this.route.params.subscribe((param:Params)=>{
   this.empId = +param['id'];
   console.log("Activated Route iD " + this.empId);
  });
  }

getSingleCandidateDetails(){
this.candidate = this.sharedService.getCandidateDetails(this.empId);

}

  ngOnInit(): void {
    this.getIdFromRoute();
    this.getSingleCandidateDetails();


  }

}
