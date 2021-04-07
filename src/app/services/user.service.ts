import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  /*
  singup(user, gettoken = null): Observable<any> {
    if (gettoken != null) {
      user.gettoken = gettoken;
    }

    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'Login', params, { headers: headers });
  }
  */

  singin(objeto: any): Observable<any>{
    let params = JSON.stringify(objeto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'Login', params, { headers: headers });
  }
  
}
