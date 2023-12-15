import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: Employee[] = [];
  employee: any = {
    _id: '',
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  };
  newEmployee: any = {
    _id: '',
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  };


  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data as Employee[];
    });
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  clearData() {
    this.employee = {
      _id: '',
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    };
  }
  

  createEmployee() {
      this.employeeService.createEmployee(this.newEmployee).subscribe({
        next: (newEmployee) => {
          console.log('Employee successfully created: ', newEmployee);
          this.loadEmployees()
        },
        error: (error) => {
          console.error('Error creating employee: ', error)
        }
    });
  }

  getEmployee(id: string) {
    // console.log(id);
    if(id) {
      this.employeeService.getEmployee(id).subscribe((employeeData) => {
        this.employee = employeeData;
      });
    } else {
      console.log('Employee Id is undefined');
    }
  }

  updatedEmployee() {
    if(this.employee._id) {
      this.employeeService.updateEmployee(this.employee).subscribe({
        next: (updateEmployee) => {
          console.log('Employee successfully updated: ', updateEmployee);
          this.loadEmployees()
        },
        error: (error) => {
          console.error('Error updating employee: ', error)
        }
    });
    } else {
      console.log('Employee Id is undefined');
    }
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe((response) => {
      console.log('Employee deleted: ', response);
      this.loadEmployees();
    })
  }


}
