import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee [] = [{eId: 102, name: 'rohit', salary: 251423, gender: 'male'},
  {eId: 103, name: 'rohini', salary: 251423, gender: 'female'},
  {eId: 106, name: 'ajay', salary: 25143, gender: 'male'}];
  constructor() { }

    getEmployees(): Employee[] {
      return this.employees;
    }

    deleteEmployee(i: number): void {
    this.employees.splice(i, 1); //(index, 1) means delete record ... (index, 0) means add record
  }
    addEmployee(emp: Employee) {
      this.employees.push(emp);
      return true;
    }
}
