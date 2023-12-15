import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  sub = false;
  loginError = false;

  userLogin: any = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private employeeService: EmployeeService, private router: Router) {}


  get form() {
    return this.userLogin.controls;
  }

  login() {
    this.sub = true;
    if (this.userLogin.valid) {
      this.employeeService.getEmployees().subscribe(employees => {
        const user = employees.find(emp => 
          emp.username === this.userLogin.value.username && 
          emp.password === this.userLogin.value.password
        );
        if (user) {
          // Redirect to another component
          this.router.navigate(['/dashboard']);
        } 
        // else {
          // Handle invalid credentials
          this.loginError = true;
        // }
      });
    }
  }


}
