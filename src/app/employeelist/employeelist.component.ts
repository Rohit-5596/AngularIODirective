import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
employees: Employee[];
selected: string = 'all';
employeeService: EmployeeService;
  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
   }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
  delete(i: number) {
    if (confirm('Are you sure you want to delete ?')) {
      this.employeeService.deleteEmployee(i);
    }
  }
  totalCount(): number {
return this.employees.length;
  }

  maleCount(): number {
    return this.employees.filter(e => e.gender === 'male').length;
      }

  femaleCount(): number {
        return this.employees.filter(e => e.gender === 'female').length;
          }
  empRadioChange(selectedValue) {
   this.selected = selectedValue;
  }
}
