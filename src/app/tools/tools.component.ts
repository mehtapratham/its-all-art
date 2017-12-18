import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../_services/user/user.service';

@Component({
    selector: 'tools',
    templateUrl: './tools.component.html'
})
export class ToolsComponent implements OnInit {

    @Input()
    currentTool:number = 0;

    @Input('currentDoc')
    curDoc: string;

    @Input('title')
    title: string;

    tools:string[] = ["Pencil", "Square", "Rectangle", "Circle"];
    colors: string[] = [
        "#FFFFFF", "#FFFF00", "#FF00FF", "#FF0000",
        "#C0C0C0", "#808080", "#808000", "#800080",
        "#800000", "#00FFFF", "#00FF00", "#008080",
        "#008000", "#0000FF", "#000080", "#000000"
    ];

    strokeColor: string = this.colors[15];
    fillColor: string = "";
    users: any[] = [];
    existingUsers: any[] = [];
    show: boolean = false;

    @Output('toolChange')
    toolChanged:EventEmitter<number> = new EventEmitter<number>();

    @Output('strokeChange')
    strokeChanged:EventEmitter<string> = new EventEmitter<string>();

    @Output('fillChange')
    fillChanged:EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userService.getAll().subscribe(result => {
            this.existingUsers = result.filter((user) => {
                return (user.sharedWithMe.map(item => item._id).some((i) => i === this.curDoc)
                || user.drawings.map(item => item._id).some((i) => i === this.curDoc));
            });
            this.users = result.filter((user) => {
                return !(user.sharedWithMe.map(item => item._id).some((i) => i === this.curDoc)
                || user.drawings.map(item => item._id).some((i) => i === this.curDoc));
            });
        });
    }

    updateTool(event, index) {
        this.currentTool = index;
        this.toolChanged.emit(this.currentTool);
    }

    updateStrokeColor(event, color) {
        this.strokeColor = color;
        this.strokeChanged.emit(this.strokeColor);
    }

    updateFillColor(event, color) {
        this.fillColor = color;
        this.fillChanged.emit(this.fillColor);
    }

    addToSharedWithMe(event, user) {
        this.userService.addToSharedWithMe(user, this.curDoc);
    }
}
