import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { IEmployee } from "../interfaces/iemployee";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  private _url: string = "/assets/data/employees.json";
  public employees: BehaviorSubject<IEmployee[]> = new BehaviorSubject<
    IEmployee[]
  >([]);
  castEmployees = this.employees.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<IEmployee[]>(this._url).subscribe(data => {
      this.employees.next(data);
    });
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.castEmployees;
  }
  addEmployee = newEmployee => {
    let _employees = this.employees.getValue();
    _employees.push(newEmployee);
    this.employees.next(_employees);
  };
  deleteEmployee(id) {
    let _employees = this.employees.getValue();
    _employees.forEach((item, index) => {
      if (item.id === id) {
        _employees.splice(index, 1);
      }
    });
    this.employees.next(_employees);
  }
  updateEmployee = (id,name) => {
    let _employees = this.employees.getValue();
    console.log(_employees);
    _employees.forEach((item, index) => {
      if (item.id === id) {
        item.name = name
      }
    });

    this.employees.next(_employees);
  };

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
