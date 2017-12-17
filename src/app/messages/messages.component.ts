import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from '../_services/messages/message.service';
import { DrawingService } from '../_services/drawing/drawing.service';
import 'rxjs/add/operator/map'


@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    @Input()
    currentDoc: string;
    msgs: any[] = [];
    currentUser: any;
    msgValue: string;
    timer: any;

    constructor(
        private msgService: MessageService,
        private drawingService: DrawingService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.getMessages.bind(this);
        let self = this;
        this.timer = setInterval(() => {
            self.getMessages();
        }, 1000);
    }

    ngOnDestroy(){
        clearInterval(this.timer);
    }

    getMessages() {
        this.msgService.getMessages(this.currentDoc, this.currentUser._id).subscribe(result => {
            this.msgs = result.map(m => {
                m.own = m.by === this.currentUser._id;
                return m;
            });
        });
    }

    sendMessage() {
        this.msgService.sendMessage(this.currentDoc, this.msgValue, this.currentUser._id);
        this.msgValue = "";
    }

}
