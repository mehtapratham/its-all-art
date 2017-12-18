import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DrawingService {

    result: any;

    constructor(private _http: Http) { }

    getDrawings(id: string) {
        return this._http
            .get('/api/' + id + '/all')
            .map(result => this.result = result.json());
    }

    getSharedWithMeDrawings(id: string) {
        return this._http
            .get('/api/' + id + '/shared-with-me')
            .map(result => this.result = result.json());
    }

    createNewDrawing(id: string, filename: string){
        return this._http
            .post('/api/new', {id: id, title: filename});
    }

    addGraphic(graphic: any) {
        return this._http
            .post('/api/add/graphic', graphic)
            .subscribe(results => this.result = results);
    }

    getGraphics(id: string) {
        return this._http
            .get('/api/' + id + '/all/graphics')
            .map(result => this.result = result.json());
    }

}
