import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://192.168.2.195:8080";
  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(this.baseURL + '/api/admin/users').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
 }


private extractData(res: Response) {
  let body = res;
  return body || {};
}
private handleError(error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}
