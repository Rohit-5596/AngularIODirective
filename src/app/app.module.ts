import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeecountComponent } from './employeecount/employeecount.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    EmployeecountComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
