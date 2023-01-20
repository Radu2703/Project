import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class LoginService
{private readonly serverUrl = 'https://reqres.in/api';
 constructor(private httpClient: HttpClient) {}
 login(body: any): Observable<any> {return this.httpClient.post(`${this.serverUrl}/login`, body);}}
