import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../Shared/shared.service';
import { Employee } from './Employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   candidate:Employee[];
   term;

   // pagination
   config: any = null;
   collection = { count: this.config, data: [] };

  constructor(private sharedService:SharedService, private router:Router) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i + 1,
        value: "items number" + (i + 1)
      });
    }

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  getAllCandidate(){
      this.candidate = this.sharedService.getCandidates;
  }

  ngOnInit(): void {
    this.getAllCandidate();
  }


  onEditCandidateDetails(id:number){
    this.router.navigate(['/employee/details/',id]);
    console.log(id);
  }

  onDeleteEmployee(id:number){
   this.sharedService.deleteEmployee(id);
   this.ngOnInit();

  }

}
