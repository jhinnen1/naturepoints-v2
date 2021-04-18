import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://192.168.2.195:8080";
  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(this.baseURL + '/api/admin/users').pipe(
      map(this.extractData),
      catchError(this.handleError);
 }
}
