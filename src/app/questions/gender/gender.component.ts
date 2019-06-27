import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  public employees =[];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {this.employees = data; console.log(data);});
  }

}
