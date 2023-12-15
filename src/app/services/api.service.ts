import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public BASE_URL = 'https://inf656-webservice.onrender.com';
  public BASE_URL = 'http://localhost:3100';

  constructor() { }
}
