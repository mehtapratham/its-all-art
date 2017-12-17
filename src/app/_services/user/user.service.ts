import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../_models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    result: any;
    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/users/' + _id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/users/register', user);
    }

    update(user: User) {
        return this.http.put('/users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete('/users/' + _id);
    }

    addToSharedWithMe(user: User, curDoc: string) {
        return this.http
            .post('/users/shared', {'user': user._id, 'doc': curDoc})
            .subscribe(result => this.result = result);
    }
}
