webpackJsonp([1,5],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/alert.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrawingService = (function () {
    function DrawingService(_http) {
        this._http = _http;
    }
    DrawingService.prototype.getDrawings = function (id) {
        var _this = this;
        return this._http
            .get('/api/' + id + '/all')
            .map(function (result) { return _this.result = result.json(); });
    };
    DrawingService.prototype.getSharedWithMeDrawings = function (id) {
        var _this = this;
        return this._http
            .get('/api/' + id + '/shared-with-me')
            .map(function (result) { return _this.result = result.json(); });
    };
    DrawingService.prototype.createNewDrawing = function (id, filename) {
        return this._http
            .post('/api/new', { id: id, title: filename });
    };
    DrawingService.prototype.addGraphic = function (graphic) {
        var _this = this;
        return this._http
            .post('/api/add/graphic', graphic)
            .subscribe(function (results) { return _this.result = results; });
    };
    DrawingService.prototype.getGraphics = function (id) {
        var _this = this;
        return this._http
            .get('/api/' + id + '/all/graphics')
            .map(function (result) { return _this.result = result.json(); });
    };
    DrawingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DrawingService);
    return DrawingService;
    var _a;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/drawing.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/users').map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get('/users/' + _id).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/users/register', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/users/' + user._id, user);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete('/users/' + _id);
    };
    UserService.prototype.addToSharedWithMe = function (user, curDoc) {
        var _this = this;
        return this.http
            .post('/users/shared', { 'user': user._id, 'doc': curDoc })
            .subscribe(function (result) { return _this.result = result; });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/user.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/auth.guard.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/authentication.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.getMessages = function (docId) {
        var _this = this;
        return this._http
            .get('/api/messages/' + docId)
            .map(function (result) { return _this.result = result.json(); });
    };
    MessageService.prototype.sendMessage = function (docId, msg, username) {
        var _this = this;
        return this._http
            .post('/api/send/message', { 'docId': docId, 'msg': msg, 'username': username })
            .subscribe(function (result) { return _this.result = result; });
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/message.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_paper__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_drawing_drawing_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardComponent = (function () {
    function BoardComponent(drawingService, route) {
        this.drawingService = drawingService;
        this.route = route;
        this.mouseDown = false;
        this.curTool = 0;
        this.tools = ["Pencil", "Square", "Rectangle", "Circle"];
        this.curPath = null;
        this.strokeColor = "#000000";
        this.points = [];
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.scope1 = new __WEBPACK_IMPORTED_MODULE_2_paper__["PaperScope"]();
        this.scope1.setup(this.canvas1.nativeElement);
        this.scope2 = new __WEBPACK_IMPORTED_MODULE_2_paper__["PaperScope"]();
        this.scope2.setup(this.canvas2.nativeElement);
        this.scope1.activate();
        this.currentDoc = this.route.snapshot.params['docId'];
        this.title = this.route.snapshot.params['title'];
        this.getExistingGraphics.bind(this);
        this.curUser = JSON.parse(localStorage.getItem('currentUser'));
        this.getExistingGraphics(true);
    };
    BoardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    BoardComponent.prototype.getExistingGraphics = function (initialLoad) {
        var _this = this;
        this.drawingService.getGraphics(this.currentDoc)
            .subscribe(function (graphics) {
            graphics.map(function (item) {
                if (initialLoad || item.by !== _this.curUser.username) {
                    var currentStrokeColor = _this.strokeColor;
                    _this.startX = item.left;
                    _this.startY = item.top;
                    _this.strokeColor = item.strokeColor;
                    _this.fillColor = item.fillColor;
                    _this.curPath = null;
                    _this.moveElementsToDuplicate();
                    switch (item.style) {
                        case "Pencil":
                            item.points.map(function (point) {
                                _this.drawFreeHand(point.x, point.y);
                            });
                            break;
                        case "Square":
                            _this.drawSquare(item.left + item.width, item.top + item.height);
                            break;
                        case "Rectangle":
                            _this.drawRectangle(item.left + item.width, item.top + item.height);
                            break;
                        case "Circle":
                            _this.drawCircle(item.radius, item.radius);
                            break;
                        default:
                            break;
                    }
                    _this.moveElementsToOriginal();
                    _this.curPath = null;
                    _this.points = [];
                    _this.startX = null;
                    _this.startY = null;
                    _this.strokeColor = currentStrokeColor;
                }
            });
        });
    };
    BoardComponent.prototype.onMouseUp = function () {
        if (this.mouseDown) {
            // this.moveElementsToOriginal();
            var graphic = {
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
    };
    BoardComponent.prototype.onMouseMove = function (event) {
        if (this.mouseDown) {
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
    };
    BoardComponent.prototype.onMouseDown = function (event) {
        this.mouseDown = true;
        this.scope1.activate();
        this.startX = event.offsetX;
        this.startY = event.offsetY;
        this.moveElementsToDuplicate();
    };
    BoardComponent.prototype.updateBoard = function (event) {
        this.curTool = event;
    };
    BoardComponent.prototype.moveElementsToDuplicate = function () {
        var children = this.scope1.project.activeLayer.children;
        this.scope2.activate();
        this.scope2.project.activeLayer.addChildren(children);
        this.scope1.activate();
        this.scope1.project.activeLayer.removeChildren();
        this.scope1.project.clear();
    };
    BoardComponent.prototype.drawFreeHand = function (x, y) {
        if (this.curPath === null) {
            this.curPath = new __WEBPACK_IMPORTED_MODULE_2_paper__["Path"]();
            this.curPath.add(new __WEBPACK_IMPORTED_MODULE_2_paper__["Point"](this.startX, this.startY));
            this.curPath.strokeColor = this.strokeColor;
        }
        this.curPath.add(new __WEBPACK_IMPORTED_MODULE_2_paper__["Point"](x, y));
        this.points.push({ x: x, y: y });
    };
    BoardComponent.prototype.drawSquare = function (x, y) {
        this.scope1.project.clear();
        var size = Math.abs(x - this.startX) > Math.abs(y - this.startY) ? x - this.startX : y - this.startY;
        this.curPath = new __WEBPACK_IMPORTED_MODULE_2_paper__["Path"].Rectangle(new __WEBPACK_IMPORTED_MODULE_2_paper__["Point"](this.startX, this.startY), new __WEBPACK_IMPORTED_MODULE_2_paper__["Size"](size, size));
        this.curPath.strokeColor = this.strokeColor;
        this.curPath.fillColor = this.fillColor;
        this.width = size;
        this.height = size;
    };
    BoardComponent.prototype.drawRectangle = function (x, y) {
        this.scope1.project.clear();
        this.curPath = new __WEBPACK_IMPORTED_MODULE_2_paper__["Path"].Rectangle(new __WEBPACK_IMPORTED_MODULE_2_paper__["Point"](this.startX, this.startY), new __WEBPACK_IMPORTED_MODULE_2_paper__["Size"](x - this.startX, y - this.startY));
        this.curPath.strokeColor = this.strokeColor;
        this.curPath.fillColor = this.fillColor;
        this.width = x - this.startX;
        this.height = y - this.startY;
    };
    BoardComponent.prototype.drawCircle = function (x, y) {
        this.scope1.project.clear();
        var radius = Math.abs(x - this.startX) > Math.abs(y - this.startY) ? x - this.startX : y - this.startY;
        this.curPath = new __WEBPACK_IMPORTED_MODULE_2_paper__["Path"].Circle(new __WEBPACK_IMPORTED_MODULE_2_paper__["Point"](this.startX, this.startY), radius);
        this.curPath.strokeColor = this.strokeColor;
        this.curPath.fillColor = this.fillColor;
        this.radius = radius;
    };
    BoardComponent.prototype.moveElementsToOriginal = function () {
        this.scope2.activate();
        var children = this.scope2.project.activeLayer.children;
        this.scope1.activate();
        this.scope1.project.activeLayer.removeChildren();
        this.scope1.project.clear();
        this.scope1.project.activeLayer.addChildren(children.concat([this.curPath]));
        this.scope2.activate();
        this.scope2.project.activeLayer.removeChildren();
        this.scope2.project.clear();
        this.scope1.project.view.update();
        this.scope2.project.view.update();
    };
    BoardComponent.prototype.updateStrokeColor = function (event) {
        this.strokeColor = event;
    };
    BoardComponent.prototype.updateFillColor = function (event) {
        this.fillColor = event;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('appBoard'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], BoardComponent.prototype, "canvas1", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('appBoardDup'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object)
    ], BoardComponent.prototype, "canvas2", void 0);
    BoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__(694)
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_drawing_drawing_service__["a" /* DrawingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_drawing_drawing_service__["a" /* DrawingService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], BoardComponent);
    return BoardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/board.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drawing_drawing_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(drawingService, router) {
        this.drawingService = drawingService;
        this.router = router;
        this.drawings = [];
        this.sharedDrawings = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllDrawings();
    };
    HomeComponent.prototype.loadAllDrawings = function () {
        var _this = this;
        this.drawingService
            .getDrawings(this.currentUser._id)
            .subscribe(function (drawings) { return _this.drawings = drawings; });
        this.drawingService
            .getSharedWithMeDrawings(this.currentUser._id)
            .subscribe(function (drawings) { return _this.sharedDrawings = drawings; });
    };
    HomeComponent.prototype.createNewDrawing = function (event) {
        var _this = this;
        this.drawingService
            .createNewDrawing(this.currentUser._id, this.filename)
            .subscribe(function (result) { return _this.drawings.push(result.json()); });
    };
    HomeComponent.prototype.changeRoute = function (path) {
        this.router.navigate([path]);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'home',
            template: __webpack_require__(695)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_drawing_drawing_service__["a" /* DrawingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_drawing_drawing_service__["a" /* DrawingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/home.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_alert_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_authentication_service__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: __webpack_require__(696)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_alert_service__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_alert_alert_service__["a" /* AlertService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/login.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_alert_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: __webpack_require__(698)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_alert_service__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_alert_alert_service__["a" /* AlertService */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/register.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 400;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(523);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Git/its-all-art/src/main.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'alert',
            template: __webpack_require__(692)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_alert_alert_service__["a" /* AlertService */]) === 'function' && _a) || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/alert.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* unused harmony export CustomHttp */
/* unused harmony export customHttpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customHttpProvider; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomHttp = (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    CustomHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    // private helper methods
    CustomHttp.prototype.addJwt = function (options) {
        // ensure request options and headers are not null
        options = options || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        options.headers = options.headers || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        // add authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return options;
    };
    CustomHttp.prototype.handleError = function (error) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
            window.location.href = '/login';
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error._body);
    };
    CustomHttp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === 'function' && _b) || Object])
    ], CustomHttp);
    return CustomHttp;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
function customHttpFactory(xhrBackend, requestOptions) {
    return new CustomHttp(xhrBackend, requestOptions);
}
var customHttpProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
    useFactory: customHttpFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]]
};
//# sourceMappingURL=D:/Git/its-all-art/src/custom-http.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(693)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/app.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    apiUrl: 'http://localhost:3000'
};
//# sourceMappingURL=D:/Git/its-all-art/src/app.config.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_custom_http__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_authentication_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_alert_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_drawing_drawing_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_messages_message_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_alert_alert_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__board_board_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tools_tools_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__messages_messages_component__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_17__board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__messages_messages_component__["a" /* MessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__helpers_custom_http__["a" /* customHttpProvider */],
                __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_6__services_authentication_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_alert_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_9__services_drawing_drawing_service__["a" /* DrawingService */],
                __WEBPACK_IMPORTED_MODULE_10__services_messages_message_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/app.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_board_component__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'document/:docId/:title', component: __WEBPACK_IMPORTED_MODULE_5__board_board_component__["a" /* BoardComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=D:/Git/its-all-art/src/app.routing.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_message_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_drawing_drawing_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = (function () {
    function MessagesComponent(msgService, drawingService) {
        this.msgService = msgService;
        this.drawingService = drawingService;
        this.msgs = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.getMessages.bind(this);
        var self = this;
        this.timer = setInterval(function () {
            self.getMessages();
        }, 1000);
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    MessagesComponent.prototype.getMessages = function () {
        var _this = this;
        this.msgService.getMessages(this.currentDoc).subscribe(function (result) {
            _this.msgs = result.map(function (m) {
                m.own = m.by === _this.currentUser.username;
                return m;
            });
        });
    };
    MessagesComponent.prototype.sendMessage = function () {
        this.msgService.sendMessage(this.currentDoc, this.msgValue, this.currentUser.username);
        this.msgValue = "";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], MessagesComponent.prototype, "currentDoc", void 0);
    MessagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__(697)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_messages_message_service__["a" /* MessageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_drawing_drawing_service__["a" /* DrawingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_drawing_drawing_service__["a" /* DrawingService */]) === 'function' && _b) || Object])
    ], MessagesComponent);
    return MessagesComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/messages.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolsComponent = (function () {
    function ToolsComponent(userService) {
        this.userService = userService;
        this.currentTool = 0;
        this.tools = ["Pencil", "Square", "Rectangle", "Circle"];
        this.colors = [
            "#FFFFFF", "#FFFF00", "#FF00FF", "#FF0000",
            "#C0C0C0", "#808080", "#808000", "#800080",
            "#800000", "#00FFFF", "#00FF00", "#008080",
            "#008000", "#0000FF", "#000080", "#000000"
        ];
        this.strokeColor = this.colors[15];
        this.fillColor = "";
        this.users = [];
        this.existingUsers = [];
        this.show = false;
        this.toolChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.strokeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.fillChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ToolsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (result) {
            _this.existingUsers = result.filter(function (user) {
                return (user.sharedWithMe.map(function (item) { return item._id; }).some(function (i) { return i === _this.curDoc; })
                    || user.drawings.map(function (item) { return item._id; }).some(function (i) { return i === _this.curDoc; }));
            });
            _this.users = result.filter(function (user) {
                return !(user.sharedWithMe.map(function (item) { return item._id; }).some(function (i) { return i === _this.curDoc; })
                    || user.drawings.map(function (item) { return item._id; }).some(function (i) { return i === _this.curDoc; }));
            });
        });
    };
    ToolsComponent.prototype.updateTool = function (event, index) {
        this.currentTool = index;
        this.toolChanged.emit(this.currentTool);
    };
    ToolsComponent.prototype.updateStrokeColor = function (event, color) {
        this.strokeColor = color;
        this.strokeChanged.emit(this.strokeColor);
    };
    ToolsComponent.prototype.updateFillColor = function (event, color) {
        this.fillColor = color;
        this.fillChanged.emit(this.fillColor);
    };
    ToolsComponent.prototype.addToSharedWithMe = function (event, user) {
        this.userService.addToSharedWithMe(user, this.curDoc);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], ToolsComponent.prototype, "currentTool", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])('currentDoc'), 
        __metadata('design:type', String)
    ], ToolsComponent.prototype, "curDoc", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])('title'), 
        __metadata('design:type', String)
    ], ToolsComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])('toolChange'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], ToolsComponent.prototype, "toolChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])('strokeChange'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], ToolsComponent.prototype, "strokeChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])('fillChange'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _c) || Object)
    ], ToolsComponent.prototype, "fillChanged", void 0);
    ToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'tools',
            template: __webpack_require__(699)
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === 'function' && _d) || Object])
    ], ToolsComponent);
    return ToolsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Git/its-all-art/src/tools.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Git/its-all-art/src/environment.js.map

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n\n<div class=\"app-container\">\n    <alert></alert>\n    <router-outlet></router-outlet>\n</div>\n\n\n<!-- credits -->\n<!-- <div class=\"text-center\">\n    <p>\n        <a href=\"http://jasonwatmore.com/post/2017/02/22/mean-with-angular-2-user-registration-and-login-example-tutorial\" target=\"_top\">MEAN Stack with Angular 2 - User Registration and Login Example &amp; Tutorial</a>\n    </p>\n    <p>\n        <a href=\"http://jasonwatmore.com\" target=\"_top\">JasonWatmore.com</a>\n    </p>\n</div>\n -->\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<tools\n    [currentTool] = \"curTool\"\n    [currentDoc] = \"currentDoc\"\n    [title] = \"title\"\n    (toolChange) = \"updateBoard($event)\"\n    (strokeChange) = \"updateStrokeColor($event)\"\n    (fillChange) = \"updateFillColor($event)\"\n></tools>\n<app-messages\n    [currentDoc] = \"currentDoc\"\n></app-messages>\n<div class=\"app-board-container\">\n    <canvas #appBoardDup id=\"board-element-dup\" class=\"app-board\" width=\"1200\" height=\"537\"></canvas>\n    <canvas #appBoard\n        (mousedown)=\"onMouseDown($event)\"\n        (mousemove)=\"onMouseMove($event)\"\n        (mouseup)=\"onMouseUp($event)\"\n        id=\"board-element\" class=\"app-board\" width=\"1200\" height=\"537\"\n    ></canvas>\n</div>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Hi {{currentUser.firstName}}!</h1>\n    <p><a [routerLink]=\"['/login']\" class=\"btn btn-danger logout-btn\">Logout</a></p>\n\n    <br>\n\n    <div class=\"drawing-items-container\">\n        <h2 class=\"my-drawings-header\">My Drawings</h2>\n        <div class=\"dropdown-selector create-new\">\n            <button class=\"btn btn-primary dropdown-toggle create-new-btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">+</button>\n            <div class=\"dropdown-menu new-drawing-form\">\n                <form (ngSubmit)=\"createNewDrawing($event)\" novalidate>\n                    <div class=\"form-group\">\n                        <label for=\"file-name\">File Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"file-name\" [(ngModel)]=\"filename\" required />\n                    </div>\n                    <button class=\"btn btn-primary\">Create</button>\n                </form>\n            </div>\n        </div>\n        <br>\n        <br>\n        <br>\n        <div class=\"drawing-item\" *ngFor=\"let drawing of drawings\" (click)=\"changeRoute('/document/'+ drawing._id + '/' + drawing.title)\">\n            {{drawing.title}}\n        </div>\n    </div>\n    <br>\n    <div class=\"drawing-items-container\">\n        <h2>Drawings shared with me</h2>\n        <br>\n        <div class=\"drawing-item\" *ngFor=\"let drawing of sharedDrawings\" (click)=\"changeRoute('/document/'+ drawing._id + '/' + drawing.title)\">\n            {{drawing.title}}\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"message-container\">\n    <h2 class=\"msg-header\">ChatterBot</h2>\n    <div class=\"messages\">\n        <div *ngFor=\"let msg of msgs\" class=\"msg-item\" [ngClass]=\"(msg.own)?'msg-right':'msg-left'\"><div class=\"msg-owner\">{{msg.by}}</div><div class=\"msg-text\">{{msg.msg}}</div></div>\n    </div>\n    <form (ngSubmit)=\"sendMessage()\">\n        <input type=\"text\" name=\"msg-input\" class=\"form-control message-box\" [(ngModel)]=\"msgValue\" placeholder=\"Type and press enter\"/>\n    </form>\n</div>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"tools-container\">\n    <h2 class=\"doc-title\">{{title}}</h2>\n    <div class=\"btn-group shape-selector\" role=\"group\" >\n        <button type=\"button\" class=\"btn btn-secondary\"\n            *ngFor=\"let tool of tools; let i=index\" (click)=\"updateTool($event, i)\"\n            [ngClass]=\"{active:currentTool===i}\">\n            {{tool}}\n        </button>\n    </div>\n    <div class=\"dropdown color-selector\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Stroke color\n        </button>\n        <div class=\"dropdown-menu colors-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:0:4\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateStrokeColor($event, color)\"></div>\n            </div>\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:4:8\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateStrokeColor($event, color)\"></div>\n            </div>\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:8:12\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateStrokeColor($event, color)\"></div>\n            </div>\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:12:16\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateStrokeColor($event, color)\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"dropdown color-selector\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Fill color\n        </button>\n        <div class=\"dropdown-menu colors-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:0:4\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateFillColor($event, color)\"></div>\n            </div>\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:4:8\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateFillColor($event, color)\"></div>\n            </div>\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:8:12\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateFillColor($event, color)\"></div>\n            </div>\n            <div class=\"col-sm-3 dropdown-column-custom\">\n                <div class=\"dropdown-item color-dropdown-item\" *ngFor=\"let color of colors | slice:12:16\" [ngStyle]=\"{'backgroundColor': color}\" (click)=\"updateFillColor($event, color)\"></div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"dropdown share-with-users\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Share\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <h6 class=\"dropdown-header\">Already shared with</h6>\n            <div class=\"dropdown-divider\"></div>\n            <div *ngFor=\"let user of existingUsers\" class=\"dropdown-item disabled\">\n                {{user.firstName}} {{user.lastName}}\n            </div>\n            <div class=\"dropdown-divider\"></div>\n            <h6 class=\"dropdown-header\">Can be shared with</h6>\n            <div class=\"dropdown-divider\"></div>\n            <div *ngFor=\"let user of users\" (click)=\"addToSharedWithMe($event, user)\" class=\"dropdown-item\">\n                {{user.firstName}} {{user.lastName}}\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(401);


/***/ })

},[739]);
//# sourceMappingURL=main.bundle.map