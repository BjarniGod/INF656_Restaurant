import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee/employee.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  // private BASE_URL = `${}/employees`;

  constructor(private http: HttpClient, private apiService: ApiService) { }
  private BASE_URL = `${this.apiService.BASE_URL}/employees`;

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}`)
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.BASE_URL}/${id}`)
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const body = {
      id: employee._id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      username: employee.username,
      password: employee.password
    }
    return this.http.post<Employee>(`${this.BASE_URL}`, body);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    console.log('Sending update request for employee: ', employee);
    const body = {
      id: employee._id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      username: employee.username,
      password: employee.password
    }
    return this.http.put<Employee>(`${this.BASE_URL}`, body)
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.request('delete',`${this.BASE_URL}`, {
      body: {
        id: id
      }
    });
  }
}
