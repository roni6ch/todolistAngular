import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

 
  public employees =[];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {this.employees = data; console.log(data);});
  }
}
