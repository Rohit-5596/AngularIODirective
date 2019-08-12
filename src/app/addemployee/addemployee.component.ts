import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
emp: Employee = {eId: 0, name: '', salary: 0, gender: ''};
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  }
  add() {
    if (this.empService.addEmployee(this.emp)) {
      alert(this.emp.eId + ' ' + this.emp.name);
      this.emp = {eId: 0, name: '', salary: 0, gender: ''};
    }
  }

}
