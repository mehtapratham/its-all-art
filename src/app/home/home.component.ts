import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/user';
import { DrawingService } from '../_services/drawing/drawing.service';

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    drawings: any[] = [];
    sharedDrawings: any[] = [];
    filename: string;

    constructor(
        private drawingService: DrawingService,
        private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllDrawings();
    }

    private loadAllDrawings() {
        this.drawingService
            .getDrawings(this.currentUser._id)
            .subscribe(drawings => this.drawings = drawings);

        this.drawingService
            .getSharedWithMeDrawings(this.currentUser._id)
            .subscribe(drawings => this.sharedDrawings = drawings);
    }

    createNewDrawing(event) {
        this.drawingService
            .createNewDrawing(this.currentUser._id, this.filename)
            .subscribe(result => this.drawings.push(result.json()));
    }

    changeRoute(path: string){
        this.router.navigate([path]);
    }

}
