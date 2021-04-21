import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://192.168.2.195:8080";
  constructor(public httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(this.baseURL + '/api/admin/users').pipe
    (map(this.extractData()),
      catchError(this.handleError)
    );
 }


private extractData(res: Response) {
  let body = res;
  return body || {};
}
private handleError(error: Response | any) {
  let errMsg: string;
  if (error && error.name == 'HttpErrorResponse') {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.statusText;
  }
  return throwError(errMsg);
}
}