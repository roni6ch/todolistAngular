import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  public name = "";
  public employees = [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Brandon" },
    { id: 3, name: "Christina" },
    { id: 4, name: "Elena" },
    { id: 5, name: "Felicia" }
  ];
  public headElements = ["ID", "Name", "Actions"];

  constructor(private employeeService: EmployeesService) {}

  ngOnInit() {
    this.employeeService.castEmployees.subscribe(data => {
      this.employees = data;
    });
  }
  addEmployee = () => {
    let newEmployee = { id: this.employees.length + 1, name: this.name };
    this.employeeService.addEmployee(newEmployee);
  };
  deleteEmployee = employeeID => {
    this.employeeService.deleteEmployee(employeeID);
  };
  update  = (id,name) => {
    this.employeeService.updateEmployee(id,name);
  };
}
