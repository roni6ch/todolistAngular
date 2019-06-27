import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

 
  public employees =[];
  public headElements = ['ID', 'Name', 'Age', 'Delete'];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {this.employees = data; console.log(data);});
  }
  deleteEmployee = (e,id) => {
    console.log(id);
  }
}
