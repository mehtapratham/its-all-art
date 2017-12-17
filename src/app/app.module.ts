import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { customHttpProvider } from './_helpers/custom-http';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication/authentication.service'
import { UserService } from './_services/user/user.service';
import { AlertService } from './_services/alert/alert.service';
import { DrawingService } from './_services/drawing/drawing.service';
import { MessageService } from './_services/messages/message.service';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { BoardComponent } from './board/board.component';
import { ToolsComponent } from './tools/tools.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        BoardComponent,
        ToolsComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AuthenticationService,
        UserService,
        AlertService,
        DrawingService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
