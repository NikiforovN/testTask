webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoHotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoHotelPage = /** @class */ (function () {
    function InfoHotelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedHotel = this.navParams.data;
    }
    InfoHotelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoHotelPage');
        this.selectedHotel = this.navParams.data;
    };
    InfoHotelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-hotel',template:/*ion-inline-start:"C:\Users\nikif\testTask\hotels\src\pages\info-hotel\info-hotel.html"*/'<!--\n  Generated template for the InfoHotelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{selectedHotel.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-avatar item-start>\n    <img src="{{selectedHotel.imageUrl}}" />\n  </ion-avatar>\n  <h2>Описание:</h2>\n  <ion-list>\n    <p>{{selectedHotel.description}}</p>\n    <p *ngIf="selectedHotel.hasParking; else other_content">\n      Наличие парковки: Да\n    </p>\n    <ng-template #other_content>Наличие парковки: Нет</ng-template>\n    <p>Цена за сутки: {{selectedHotel.roomCost}} рублей</p>\n    <p>Адрес: {{selectedHotel.address}}</p>\n    <p>Номер телефона: {{selectedHotel.phone}}</p>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nikif\testTask\hotels\src\pages\info-hotel\info-hotel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoHotelPage);
    return InfoHotelPage;
}());

//# sourceMappingURL=info-hotel.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/hotels/modal/modal.module": [
		271,
		1
	],
	"../pages/info-hotel/info-hotel.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotels_hotels__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hotels_hotels__["a" /* HotelsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\nikif\testTask\hotels\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Главная</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Система бронирования гостиниц</h3>\n\n  <button ion-button secondary (click)="openPage()">Подобрать гостиницу</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nikif\testTask\hotels\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(view, navParams) {
        this.view = view;
        this.navParams = navParams;
        this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.inputValues = {
            lower: null,
            upper: null,
            needParking: false,
        };
    }
    ModalPage.prototype.findMinCost = function (array) {
        return array.reduce(function (acc, item) {
            return item.roomCost < acc ? item.roomCost : acc;
        }, Infinity);
    };
    ModalPage.prototype.findMaxCost = function (array) {
        return array.reduce(function (acc, item) {
            return item.roomCost > acc ? item.roomCost : acc;
        }, -Infinity);
    };
    ModalPage.prototype.closeModal = function () {
        var modal = document.getElementById("page-modal");
        modal.classList.add("modal__hidden");
        this.ngOnInit();
    };
    ModalPage.prototype.setInputData = function (data) {
        console.log('data', data);
        this.onFilter.emit(data);
        this.closeModal();
    };
    ModalPage.prototype.ngOnInit = function () {
        this.inputValues.lower = this.findMinCost(this.hotelsInfo);
        this.inputValues.upper = this.findMaxCost(this.hotelsInfo);
        this.inputValues.needParking = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalPage.prototype, "hotelsInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ModalPage.prototype, "onFilter", void 0);
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-modal",template:/*ion-inline-start:"C:\Users\nikif\testTask\hotels\src\pages\hotels\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Фильтр</ion-title>\n    <ion-buttons>\n      <button (click)="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Цена</ion-label>\n      <ion-input type="text" placeholder="Минимальная цена" [(ngModel)]="inputValues.lower" ></ion-input>\n      <ion-input type="text" placeholder="Максимальная цена" [(ngModel)]="inputValues.upper" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Нужна парковка?</ion-label>\n      <ion-checkbox checked="false" [(ngModel)]="inputValues.needParking" ></ion-checkbox>\n    </ion-item>\n    <ion-buttons>\n      <button ion-button full (click)="setInputData(inputValues)">Фильтровать</button>\n    </ion-buttons>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\nikif\testTask\hotels\src\pages\hotels\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hotels_modal_modal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_info_hotel_info_hotel__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hotels_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_hotel_info_hotel__["a" /* InfoHotelPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/hotels/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-hotel/info-hotel.module#InfoHotelPageModule', name: 'InfoHotelPage', segment: 'info-hotel', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_hotel_info_hotel__["a" /* InfoHotelPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Главная', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Гостиницы', component: __WEBPACK_IMPORTED_MODULE_5__pages_hotels_hotels__["a" /* HotelsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\nikif\testTask\hotels\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Меню</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\nikif\testTask\hotels\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_hotel_info_hotel__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelsPage = /** @class */ (function () {
    function HotelsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hotels = [
            {
                imageUrl: "https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg",
                title: "Будапешт",
                description: 'Московский отель "Будапешт"',
                roomCost: 5000,
                hasParking: false,
                address: "Москва, ул. Петровские Линии, 2",
                phone: "8 (495) 729-35-01",
            },
            {
                imageUrl: "https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg",
                title: "Космос",
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: true,
                address: "Москва, пр-т Мира, 150",
                phone: "8 (495) 234-12-06",
            },
            {
                imageUrl: "https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg",
                title: "Космос",
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: "Москва, пр-т Мира, 150",
                phone: "8 (495) 234-12-06",
            },
            {
                imageUrl: "https://verbludvogne.ru/wp-content/uploads/2020/02/0-glavnya-1200h630-7_-_1200__80.jpg",
                title: "Ангара",
                description: 'Гостиница "Ангара"',
                roomCost: 500,
                hasParking: true,
                address: "Иркутск, сквер им.Кирова",
                phone: "8 (3952) 29-35-01",
            },
            {
                imageUrl: "https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg",
                title: "Будапешт",
                description: 'Московский отель "Будапешт"',
                roomCost: 2000,
                hasParking: true,
                address: "Москва, ул. Петровские Линии, 2",
                phone: "8 (495) 729-35-01",
            },
            {
                imageUrl: "https://cache.marriott.com/marriottassets/marriott/OVBMC/ovbmc-exterior-0019-hor-feat.jpg",
                title: "Marriott",
                description: 'Отель "Marriott" в Новосибирске',
                roomCost: 4500,
                hasParking: true,
                address: "Новосибирск, ул.Орджоникидзе, 29",
                phone: "8 (383) 729-35-01",
            },
        ];
    }
    HotelsPage.prototype.ngOnInit = function () {
        this.filteredData = this.hotels.slice();
    };
    HotelsPage.prototype.openModal = function () {
        var modal = document.getElementById("page-modal");
        modal.classList.remove("modal__hidden");
    };
    HotelsPage.prototype.filterHotels = function (data) {
        console.log("DataInHotels", data);
        if (!data)
            return this.hotels;
        this.filteredData = this.hotels.filter(function (item) {
            return !data.needParking
                ? item.roomCost >= data.lower && item.roomCost <= data.upper
                : item.roomCost >= data.lower &&
                    item.roomCost <= data.upper &&
                    item.hasParking;
        });
        return this.filteredData;
    };
    HotelsPage.prototype.openHotelPage = function (hotelCard) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_hotel_info_hotel__["a" /* InfoHotelPage */], hotelCard);
    };
    HotelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-hotels",template:/*ion-inline-start:"C:\Users\nikif\testTask\hotels\src\pages\hotels\hotels.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Гостиницы</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content>\n    <button ion-button color="light" full (click)="openModal()">\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n    <ion-list>\n      <button ion-item *ngFor="let hotel of filteredData" (click)="openHotelPage(hotel)">\n        <ion-avatar item-start>\n          <img src="{{hotel.imageUrl}}" />\n        </ion-avatar>\n        <h2>{{hotel.title}}</h2>\n        <p>{{hotel.address}}</p>\n      </button>\n    </ion-list>\n  </ion-content>\n\n<page-modal\n  [hotelsInfo]="hotels"\n  (onFilter)="filterHotels($event)"\n  id="page-modal"\n  class="modal__hidden"\n></page-modal>\n'/*ion-inline-end:"C:\Users\nikif\testTask\hotels\src\pages\hotels\hotels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */]])
    ], HotelsPage);
    return HotelsPage;
}());

//# sourceMappingURL=hotels.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map