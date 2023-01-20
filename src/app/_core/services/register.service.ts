import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class RegisterService
{private readonly serverUrl = 'https://reqres.in/api';
 constructor(private httpClient: HttpClient) {}
 register(body: any): Observable<any> {return this.httpClient.post(`${this.serverUrl}/register`, body);}}
