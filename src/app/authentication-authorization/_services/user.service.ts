import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { User } from '../_models/index';
/** 
 * basarme en esto para buscar usuarios de la api rest
domain: string = "http://localhost:10010/organizaciones";

**/


@Injectable()
export class UserService {
    id: String;
    domain: string = 'http://localhost:10010';
    constructor(private http: HttpClient) { }

    getAll() : Observable<any>{
        return this.http.get('http://localhost:10010/users');
    }

    getById(id: String) {
        return this.http.get('http://localhost:10010/users/' + id);
    }

    create(user: User) {
        return this.http.post('http://localhost:10010/users', user);
    }

    update( put) {
       return this.http.put(`http://localhost:10010/users/${this.id}`, put)
    }

    delete(id: String) {
        return this.http.delete('http://localhost:10010/users/' + id);
    }

}