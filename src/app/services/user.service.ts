import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user/user';
import { IUserBody } from '../interfaces/user/iuser-body';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/user/mockdata'

  constructor(private http: HttpClient) { 
  }

  public getProfile(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`)

  }

  public updateProfile(body:IUserBody): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`,body)
  }
}
