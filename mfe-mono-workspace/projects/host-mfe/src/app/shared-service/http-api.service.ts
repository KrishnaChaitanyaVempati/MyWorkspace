import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/cloudVendor';

  loginApi(data: any, endpoint?: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const url = endpoint ? `${this.apiUrl}` + '/loginUser' : this.apiUrl;
    const url = this.apiUrl + '/loginUser' ;
    console.log("url - " + url);
    return this.http.post(url, data, { responseType: 'text', headers });
  }

  registerApi(data: any, endpoint?: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const url = endpoint ? `${this.apiUrl}` + '/registerUser' : this.apiUrl;
    const url = this.apiUrl + '/registerUser' ;
    console.log("url - " + url);
    return this.http.post(url, data, { headers });
  }
}
