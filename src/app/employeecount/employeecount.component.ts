import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent implements OnInit {
  constructor() { }

  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;
  selectedValue = 'all';
  @Output()
  notify: EventEmitter<string> = new EventEmitter <string>();

  ngOnInit() {
  }

  changeMe() {
    this.notify.emit(this.selectedValue);
}
}
