import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
    result: any;

    constructor(private _http: Http) { }

    getMessages(docId: string, userId: string) {
        return this._http
            .get('/api/messages/' + docId + '/' + userId)
            .map(result => this.result = result.json());
    }

    sendMessage(docId: string, msg: string, userId: string) {
        return this._http
            .post('/api/send/message', {'docId': docId, 'msg': msg, 'userId': userId})
            .subscribe(result => this.result = result);
    }

}
