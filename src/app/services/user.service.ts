import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api';


  constructor( private http: HttpClient ) { }

  deleteUser( user: UserModel) {
  return this.http.delete(`${ this.url }/users/${ user.id }`, {observe: 'response'})
  }


  getUsers(page:number) {
    return this.http.get(`${ this.url }/users?page=${ page }`)
  }

  updateUser(user: UserModel){
    return this.http.put(`${ this.url }/users`, user , {observe: 'response'});
  }

  logIn(form:any){
    return this.http.post(`${ this.url }/login`, form , {observe: 'response'});
  }

  register(form:any){
    return this.http.post(`${ this.url }/register`, form, {observe: 'response'});
  }
}
