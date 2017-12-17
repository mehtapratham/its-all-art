import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaperScope, Project, Path, Point, Size } from 'paper';
import { ToolsComponent } from '../tools/tools.component';
import { DrawingService } from '../_services/drawing/drawing.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    @ViewChild('appBoard') canvas1: ElementRef;
    @ViewChild('appBoardDup') canvas2: ElementRef;
    scope1: PaperScope;
    project1: Project;
    scope2: PaperScope;
    project2: Project;
    mouseDown: boolean = false;
    curTool: number = 0;
    tools: string[] = ["Pencil", "Square", "Rectangle", "Circle"];
    startX: number;
    startY: number;
    curPath: Path = null;
    strokeColor: string = "#000000";
    fillColor: string;
    points: {x: number, y: number}[] = [];
    width: number;
    height: number;
    radius: number;
    currentDoc: string;
    timer: any;
    curUser: any;

    constructor(
        private drawingService: DrawingService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.scope1 = new PaperScope();
        this.scope1.setup(this.canvas1.nativeElement);

        this.scope2 = new PaperScope();
        this.scope2.setup(this.canvas2.nativeElement);

        this.scope1.activate();

        this.currentDoc = this.route.snapshot.params['docId'];
        this.getExistingGraphics.bind(this);


        this.curUser = JSON.parse(localStorage.getItem('currentUser'));
        this.getExistingGraphics(true);
    }

    ngOnDestroy() {
        clearInterval(this.timer);
    }

    getExistingGraphics(initialLoad: boolean) {
        this.drawingService.getGraphics(this.currentDoc)
            .subscribe(graphics => {
                graphics.map((item) => {
                    if(initialLoad || item.by !== this.curUser.username){
                        this.startX = item.left;
                        this.startY = item.top;
                        this.strokeColor = item.strokeColor;
                        this.fillColor = item.fillColor;
                        this.curPath = null;
                        this.moveElementsToDuplicate();
                        switch (item.style) {
                            case "Pencil":
                                item.points.map(point => {
                                    this.drawFreeHand(point.x, point.y);
                                });
                                break;
                            case "Square":
                                this.drawSquare(item.left + item.width, item.top + item.height);
                                break;
                            case "Rectangle":
                                this.drawRectangle(item.left + item.width, item.top + item.height);
                                break;
                            case "Circle":
                                this.drawCircle(item.radius, item.radius);
                                break;
                            default:
                                break;
                        }
                        this.moveElementsToOriginal();
                        this.curPath = null;
                        this.points = [];
                        this.startX = null;
                        this.startY = null;
                    }
                });
            });
    }

    onMouseUp() {
        if(this.mouseDown) {

            this.moveElementsToOriginal();

            let graphic = {
                props: {
                    style: this.tools[this.curTool],
                    fillColor: this.fillColor,
                    strokeColor: this.strokeColor,
                    top: this.startY,
                    left: this.startX,
                    width: this.width,
                    height: this.height,
                    radius: this.radius,
                    points: this.points,
                    by: this.curUser.username
                },
                docId: this.currentDoc
            };

            this.drawingService.addGraphic(graphic);

            this.getExistingGraphics(false);

            this.curPath = null;
            this.points = [];
            this.mouseDown = false;
            this.startX = null;
            this.startY = null;
        }
    }

    onMouseMove(event: MouseEvent) {
        if(this.mouseDown) {
            switch (this.tools[this.curTool]) {
                case "Pencil":
                    this.drawFreeHand(event.offsetX, event.offsetY);
                    break;
                case "Square":
                    this.drawSquare(event.offsetX, event.offsetY);
                    break;
                case "Rectangle":
                    this.drawRectangle(event.offsetX, event.offsetY);
                    break;
                case "Circle":
                    this.drawCircle(event.offsetX, event.offsetY);
                    break;
                default:
                    break;
            }
        }
    }

    onMouseDown(event) {
        this.mouseDown = true;

        this.scope1.activate();

        this.startX = event.offsetX;
        this.startY = event.offsetY;

        this.moveElementsToDuplicate();
    }

    updateBoard(event) {
        this.curTool = event;
    }

    moveElementsToDuplicate() {
        let children = this.scope1.project.activeLayer.children;

        this.scope2.activate();
        this.scope2.project.activeLayer.addChildren(children);

        this.scope1.activate();
        this.scope1.project.activeLayer.removeChildren();
        this.scope1.project.clear();
    }

    drawFreeHand(x:number, y:number){
        if(this.curPath === null) {
            this.curPath = new Path();
            this.curPath.add(new Point(this.startX, this.startY));
            this.curPath.strokeColor = this.strokeColor;
        }
        this.curPath.add(new Point(x,y));
        this.points.push({x: x,y: y});
    }

    drawSquare(x:number, y:number) {
        this.scope1.project.clear();
        let size = Math.abs(x - this.startX) > Math.abs(y - this.startY) ? x - this.startX : y - this.startY;

        this.curPath = new Path.Rectangle(new Point(this.startX, this.startY), new Size(size, size));
        this.curPath.strokeColor = this.strokeColor;
        this.curPath.fillColor = this.fillColor;
        this.width = size;
        this.height = size;
    }

    drawRectangle(x:number, y:number) {
        this.scope1.project.clear();

        this.curPath = new Path.Rectangle(new Point(this.startX, this.startY), new Size(x - this.startX, y - this.startY));
        this.curPath.strokeColor = this.strokeColor;
        this.curPath.fillColor = this.fillColor;
        this.width = x - this.startX;
        this.height = y - this.startY;
    }

    drawCircle(x:number, y:number){
        this.scope1.project.clear();
        let radius = Math.abs(x - this.startX) > Math.abs(y - this.startY) ? x - this.startX : y - this.startY;
        this.curPath = new Path.Circle(new Point(this.startX, this.startY), radius);
        this.curPath.strokeColor = this.strokeColor;
        this.curPath.fillColor = this.fillColor;
        this.radius = radius;
    }

    moveElementsToOriginal() {
        this.scope2.activate();
        let children = this.scope2.project.activeLayer.children;

        this.scope1.activate();
        this.scope1.project.activeLayer.removeChildren();
        this.scope1.project.clear();
        this.scope1.project.activeLayer.addChildren([...children, this.curPath]);

        this.scope2.activate();
        this.scope2.project.activeLayer.removeChildren();
        this.scope2.project.clear();

        this.scope1.project.view.update();
        this.scope2.project.view.update();
    }

    updateStrokeColor(event) {
        this.strokeColor = event;
    }
    updateFillColor(event) {
        this.fillColor = event;
    }

}
