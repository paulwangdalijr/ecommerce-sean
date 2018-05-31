(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin.module/admin.module": [
		"./src/app/admin.module/admin.module.ts",
		"common",
		"admin-module-admin-module"
	],
	"./product.module/product.module": [
		"./src/app/product.module/product.module.ts",
		"common",
		"product-module-product-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//test
var routes = [
    // { path: '', 
    // 	component: HomeComponent, 
    // 	children: [
    // 		{ path: '', loadChildren: './product/product.module#ProductModule' }
    // 	]
    // },
    // { path: '', component: HomeComponent },
    // { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: '', loadChildren: './product.module/product.module#ProductModule' },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'social/:token', component: _components_social_social_component__WEBPACK_IMPORTED_MODULE_5__["SocialComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'admin', loadChildren: './admin.module/admin.module#AdminModule', canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]] },
    { path: '**', loadChildren: './product.module/product.module#ProductModule' }
    // { path: 'products', loadChildren: './products/products.module#ProductsModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_form_shared_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-form/shared-form.module */ "./src/app/shared-form/shared-form.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _shared_form_shared_form_module__WEBPACK_IMPORTED_MODULE_4__["SharedFormModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-4 lead\">\n  <p>This is a demo app developed by <a href=\"mailto:paulwangdalijr@gmail.com\"><span class=\"text-primary\">Paul Wangdali Jr.</span></a></p>\n  <p>Due to his boredom and wanting to try new things, he developed this awesome E-commerce website using the following technologies:</p>  \n  <p>Angular 6, Node.js, Express.js, SQLite, Bootstrap 4 using Bootswatch Lux Theme and utilizing some of the NPM packages to rapidly develop this wonderful website :)</p>\n  <p>Some of the functionalities are yet to be implemented!!!</p>\n  <p></p>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(authService) {
        this.authService = authService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        // console.log(this.authService.testing);
        console.log(this.authService.testing);
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-4\">\n  \n  <!-- Custom Success/Error Message -->\n  <div class=\"show-hide-message text-center\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n\n<div class=\"row\">\n\n  <div class=\"col-3\"></div>\n  <div class=\"col-6\">\n    \n  <h1 class=\"page-header\">Login</h1>\n  <!-- Login Form -->\n  <form [formGroup]=\"form\"  (submit)=\"onLoginSubmit()\">\n\n    <!-- email Field -->\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <div [ngClass]=\"{'has-error': form.controls.email.errors && form.controls.email.dirty, 'has-success': form.controls.email.valid && form.controls.email.dirty }\">\n        <input class=\"form-control\" type=\"text\" name=\"email\" formControlName=\"email\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required.</li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- Password Field  -->\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n        </ul>\n      </div>\n    </div>\n    <!-- Submit Button -->\n    <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n    <a href=\"/auth/facebook\" ><button type=\"button\" class=\"btn btn-info float-right\">Facebook</button></a>\n  </form>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.authService.testing = "testing!!!!";
        console.log("testing set!");
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.form.disable();
        var form = {
            username: this.form.get("email").value,
            password: this.form.get("password").value
        };
        this.authService.login(form).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.form.enable();
                setTimeout(function () {
                    _this.message = "";
                    _this.messageClass = '';
                }, 2000);
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = "Login successful";
                _this.authService.storeUserToken(data.token);
                _this.authService.storeUseremail(data.user.username);
                localStorage.setItem('type', data.user.type);
                sessionStorage.clear();
                setTimeout(function () {
                    if (data.user.type !== 'admin') {
                        _this.router.navigate(['']);
                    }
                    else {
                        _this.router.navigate(['/admin']);
                    }
                    _this.message = "";
                    _this.messageClass = '';
                }, 2000);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-button{\n\tfont-size: 30px;\n\tmargin-right: 15px;\n}\n.account-button i{\n\tfont-size: 30px;\n\tmargin-right: 15px;\n}\n.account-button:hover{\n\tcursor: pointer;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Shopping!</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>      \n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"about\">About</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <div class=\"btn-group show\" role=\"group\">\n        <div class=\"account-button dropdown-toggle\" data-toggle=\"dropdown\">\n           <i class=\"fas fa-user\"></i>\n        </div>\n        <div class=\"dropdown-menu\" x-placement=\"bottom-start\" style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 48px, 0px);\">\n          <a *ngIf=\"!authService.loggedIn()\" class=\"dropdown-item\" routerLink=\"login\">Login</a>\n          <a *ngIf=\"!authService.loggedIn()\" class=\"dropdown-item\" routerLink=\"signup\">Sign Up</a>\n          <a *ngIf=\"authService.loggedIn() && !authService.isAdmin() \" class=\"dropdown-item\" routerLink=\"profile\">Profile</a>\n          <a *ngIf=\"authService.isAdmin()\" class=\"dropdown-item\" routerLink=\"admin\">Dashboard</a>\n          <a *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" class=\"dropdown-item\">Logout</a>\n        </div>\n      </div>\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <!-- <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button> -->\n    </form>\n  </div>\n</nav>\n\n<div *ngIf=\"loggingOut\" class=\"text-center\">\n  <h5>Logging out...</h5>\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.loggingOut = true;
        setTimeout(function () {
            _this.authService.logout();
            _this.router.navigate(['']);
            _this.loggingOut = false;
        }, 2000);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-4\"> \n  \n<!-- Custom Success/Error Message -->\n    <div class=\"show-hide-message text-center\">\n        <div [ngClass]=\"messageClass\">\n        {{ message }}\n        </div>\n    </div>\n    <p class=\"text-primary text-center\">Please update your profile, these details will be used during checkout.</p>\n    <app-detailsform></app-detailsform>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_form_detailsform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-form/detailsform.service */ "./src/app/shared-form/detailsform.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, detailsFormService) {
        this.authService = authService;
        this.router = router;
        this.detailsFormService = detailsFormService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.detailsFormService.goBackLink = "";
        this.detailsFormService.operation = "Update";
        this.detailsFormService.emailFlag = true;
        this.detailsFormService.detailsFlag = false;
        // this.detailsFormService.onClick = (x)=>{this.click(x)};
        this.detailsFormService.onClick = function () { _this.click(); };
        // this.detailsFormService.onClick = this.click;
        // this.authService.getProfileDetails().subscribe((profile:any) => {
        //   if(profile.success){
        //     this.detailsFormService.email = this.authService.profile.user.email;
        //     this.detailsFormService.name = this.authService.profile.profile.user.name;
        //     this.detailsFormService.address = this.authService.profile.user.address;
        //     this.detailsFormService.mobile = this.authService.profile.user.mobile;
        //   }
        //   else{
        //     if(localStorage.getItem('type') !== 'admin'){
        //       this.authService.logout();
        //       this.router.navigate(['']);
        //     }else{
        //       this.router.navigate(['admin']);          
        //     }
        //   }  
        this.detailsFormService.email = this.authService.profile.email;
        this.detailsFormService.name = this.authService.profile.name;
        this.detailsFormService.address = this.authService.profile.address;
        this.detailsFormService.mobile = this.authService.profile.mobile;
        // })
    };
    ProfileComponent.prototype.click = function () {
        var _this = this;
        var user = { name: this.detailsFormService.name, address: this.detailsFormService.address, mobile: this.detailsFormService.mobile };
        this.authService.editProfile(user).subscribe(function (data) {
            if (data.success) {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
            }
            else {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
            }
            setTimeout(function () {
                _this.messageClass = "";
                _this.message = "";
            }, 2000);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_form_detailsform_service__WEBPACK_IMPORTED_MODULE_3__["DetailsformService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-4\">\n\n\t<div class='show-hide-message text-center'>\n\t\t<div [ngClass]='messageClass'>\n\t\t\t{{message}}\n\t\t</div>\n\t</div>\n\n\t<!-- Registration Form -->\n\t<div class=\"row\">\n\t\t<div class=\"col-3\"></div>\n\t\t<div class=\"col-6\">\n\t\t\t<h1 class=\"page-header\">Signup</h1>\n\t\t\t<form id=\"registerForm\" [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">  \n\t\t\t\t\n\t\t\t\t<!-- Email Input -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t<!-- <div [ngClass]=\"{'has-danger': form.controls.email.dirty && (form.controls.email.errors || !emailValid ), 'has-success': !form.controls.email.errors && emailValid}\"> -->\n\t\t\t\t\t\t<input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" \n\t\t\t\t\t\t[ngClass]=\"{'is-invalid': form.controls.email.dirty && (form.controls.email.errors || !emailValid ), 'is-valid': !form.controls.email.errors && emailValid}\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<!-- Validation -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ul class=\"help-block\"\n\t\t\t\t\t\t[ngClass]=\"{'invalid-feedback': form.controls.email.dirty && (form.controls.email.errors || !emailValid ), 'valid-feedback': !form.controls.email.errors && emailValid}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n\t\t\t\t\t\t\t<li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n\t\t\t\t\t\t\t<li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n\t\t\t\t\t\t\t<li *ngIf=\"emailMessage\">{{ emailMessage }}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t<!-- </div> -->\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Password Input -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<!-- <div [ngClass]=\"{'has-danger': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\"> -->\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" \n\t\t\t\t\t\t[ngClass]=\"{'is-invalid': (form.controls.password.errors && form.controls.password.dirty), 'is-valid': !form.controls.password.errors}\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<!-- Validation -->\n\t\t\t\t\t\t<ul class=\"help-block\"\n\t\t\t\t\t\t[ngClass]=\"{'invalid-feedback': (form.controls.password.errors && form.controls.password.dirty), 'valid-feedback': !form.controls.password.errors}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\n\t\t\t\t\t\t\t<li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Password must be at least 8 characters but no more than 35</li>\n\t\t\t\t\t\t\t<li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must have 1 uppercase character, 1 lowercase character, 1 special character and 1 number</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t<!-- </div> -->\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Confirm Password Input -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"confirm\">Confirm Password</label>\n\t\t\t\t\t<!-- <div [ngClass]=\"{'has-danger': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\"> -->\n\t\t\t\t\t\t<input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" \n\t\t\t\t\t\t[ngClass]=\"{'is-invalid': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'is-valid': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<!-- Validation -->\n\t\t\t\t\t\t<ul class=\"help-block\"\n\t\t\t\t\t\t[ngClass]=\"{'invalid-feedback': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'valid-feedback': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n\t\t\t\t\t\t\t<li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t<!-- </div> -->\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Submit Input -->\n\t\t\t\t<input [disabled]=\"!form.valid || !emailValid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n\n\t\t\t</form>\n\t\t\t<!-- Registration Form /-->\n\t\t</div>\n\t</div>\n\t<div class=\"footer-info\">\n\t\t<br><br>\n\t\t<p class=\"text-right col-form-label-sm\">Reactive Form was used here, you can't pass the front end validation :P</p>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.createForm();
    }
    SignupComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Field validators, this will update the form.controls.[control name].errors/valid in the HTML
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                    this.validateEmail
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35),
                    this.validatePassword
                ])],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, 
        //Form validator, this will update the form.valid/form.errors in the HTML
        {
            validator: this.matchingPasswords('password', 'confirm')
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.checkEmail = function () {
        var _this = this;
        this.processing = true;
        if (!this.form.get('email').errors) {
            this.authService.checkEmail(this.form.get("email").value).subscribe(function (data) {
                if (data.success) {
                    _this.messageClass = 'alert alert-success';
                    _this.emailValid = true;
                }
                else {
                    _this.messageClass = 'alert alert-danger';
                    _this.emailValid = false;
                }
                _this.message = data.message;
                _this.processing = false;
            });
        }
        console.log(this.form.get('email').errors);
        console.log(this.emailValid);
    };
    SignupComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        this.form.disable;
        var user = {
            email: this.form.get('email').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
                _this.messageClass = 'alert alert-danger';
                _this.processing = false;
                _this.form.enable;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message + ". Redirecting...";
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
        });
    };
    // Validators
    SignupComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    SignupComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,35})/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    SignupComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/social/social.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/social/social.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/social/social.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/social/social.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  social works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/social/social.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocialComponent = /** @class */ (function () {
    function SocialComponent(authGuard, authService, route, router) {
        var _this = this;
        this.authGuard = authGuard;
        this.authService = authService;
        this.route = route;
        this.router = router;
        // this.authService.storeUserData(data.token, data.user);
        // console.log(route.snapshot.url);
        this.authService.storeUserToken(route.snapshot.params['token']);
        this.authService.getProfile().subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUseremail(data.user);
                _this.router.navigate(['']);
                sessionStorage.clear();
            }
            else {
                _this.authService.logout();
                _this.router.navigate(['/login']);
            }
        });
        // this.authService.storeUserData(route.snapshot.params['token'], '');
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/components/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/components/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.redirectURL = state.url;
        if (this.authService.loggedIn()) {
            return this.authService.getAdminProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (data.success) {
                    return true;
                }
                else {
                    _this.router.navigate(['/profile']);
                    return false;
                }
            }));
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.redirectURL = state.url;
        if (this.authService.loggedIn()) {
            return this.authService.getProfileDetails().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (data.success) {
                    if (data.type === 'admin') {
                        _this.router.navigate(['/admin']);
                        return false;
                    }
                    else {
                        _this.authService.profile = data.user;
                        return true;
                    }
                }
                else {
                    _this.authService.logout();
                    _this.router.navigate(['/login']);
                    return false;
                }
            }));
            // if(localStorage.getItem('type') === 'admin'){
            //   this.router.navigate(['/admin']);
            //   return false;
            // }else{
            //   return true;
            // }
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = 'http://localhost:3000'; //dev
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('x-auth-token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        // return tokenNotExpired();'
        // console.log(this.authToken);
        var x = true;
        this.loadToken();
        try {
            x = this.jwtHelper.isTokenExpired(this.authToken);
        }
        catch (e) {
            x = true;
            this.logout();
        }
        // console.log(x);
        // return !this.jwtHelper.isTokenExpired(this.authToken);
        return !x;
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + "/auth/checkEmail/" + email);
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/auth/register', user);
    };
    AuthService.prototype.storeUserToken = function (token) {
        localStorage.setItem('x-auth-token', token);
        this.authToken = token;
    };
    AuthService.prototype.storeUseremail = function (email) {
        localStorage.setItem('email', email);
        this.authEmail = email;
    };
    AuthService.prototype.getProfile = function () {
        var _this = this;
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + "/auth/profile", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.success) {
                _this.authEmail = data.user.username;
            }
            return data;
        }));
    };
    AuthService.prototype.getProfileDetails = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + "/auth/profileDetails", this.options);
    };
    AuthService.prototype.editProfile = function (user) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + '/auth/profileUpdate', user, this.options);
    };
    AuthService.prototype.getAdminProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + "/auth/adminprofile", this.options);
        // return this.http.get(this.domain + "/auth/adminprofile", this.options).
        //   pipe(
        //     map((data:any)=>{
        //       return data.success;
        //     }));
    };
    AuthService.prototype.createOrder = function (items) {
        this.createAuthenticationHeaders();
        console.log(items);
        return this.http.post(this.domain + '/auth/createOrder', items, this.options);
    };
    AuthService.prototype.createOrderNotLoggedIn = function (i_user, i_items) {
        var params = {
            user: i_user,
            items: i_items,
        };
        return this.http.post(this.domain + '/auth/createOrderNoAuth', params);
    };
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth-token': this.authToken
            })
        };
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.authEmail = null;
        localStorage.clear();
    };
    AuthService.prototype.login = function (form) {
        var _this = this;
        return this.http.post(this.domain + '/auth/login', form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.success) {
                _this.authEmail = data.user.username;
                _this.userType = data.user.type;
                console.log(_this.userType);
            }
            return data;
        }));
    };
    AuthService.prototype.isAdmin = function () {
        if (localStorage.getItem('type') === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared-form/detailsform.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared-form/detailsform.service.ts ***!
  \****************************************************/
/*! exports provided: DetailsformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsformService", function() { return DetailsformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsformService = /** @class */ (function () {
    function DetailsformService() {
    }
    DetailsformService.prototype.onClick = function () {
    };
    DetailsformService.prototype.clearFields = function () {
        this.email = "";
        this.name = "";
        this.address = "";
        this.mobile = "";
    };
    DetailsformService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DetailsformService);
    return DetailsformService;
}());



/***/ }),

/***/ "./src/app/shared-form/detailsform/detailsform.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared-form/detailsform/detailsform.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared-form/detailsform/detailsform.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared-form/detailsform/detailsform.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">  \n    <div class=\"col-0 col-md-2\"></div>\n    <div class=\"col-12 col-md-8\">\n      <form name=\"form\" id=\"checkoutForm\">\t\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input [disabled]=\"detailsFormService.emailFlag\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"*Enter email\" [(ngModel)]=\"detailsFormService.email\" name=\"email\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Full Name</label>\n          <input [disabled]=\"detailsFormService.detailsFlag\" type=\"text\" class=\"form-control\" placeholder=\"*Enter Name\" name=\"name\" [(ngModel)]=\"detailsFormService.name\" name=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"address\">Address</label>\n          <input [disabled]=\"detailsFormService.detailsFlag\" type=\"text\" class=\"form-control\" placeholder=\"*Enter Address\" [(ngModel)]=\"detailsFormService.address\" name=\"address\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"mobile\">Mobile Number</label>\n          <input [disabled]=\"detailsFormService.detailsFlag\" type=\"text\" class=\"form-control\" placeholder=\"*Enter Mobile Number\" [(ngModel)]=\"detailsFormService.mobile\" name=\"mobile\">\n        </div>\n        <button [disabled]=\"!detailsFormService.email ||\n        !detailsFormService.name ||\n        !detailsFormService.address ||\n        !detailsFormService.mobile\"         \n        type=\"button\" class=\"btn btn-primary\" (click)=\"detailsFormService.onClick()\">{{detailsFormService.operation}}</button>\n        <a routerLink=\"{{detailsFormService.goBackLink}}\"><button type=\"button\" class=\"btn btn-secondary\">\n          Back\n        </button></a>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"footer-info\">\n\t\t<br><br>\n\t\t<p class=\"text-right col-form-label-sm\">This is a simple form, no validation included except mandatory fields :(</p>\n\t</div>"

/***/ }),

/***/ "./src/app/shared-form/detailsform/detailsform.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared-form/detailsform/detailsform.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailsformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsformComponent", function() { return DetailsformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _detailsform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../detailsform.service */ "./src/app/shared-form/detailsform.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsformComponent = /** @class */ (function () {
    function DetailsformComponent(detailsFormService) {
        this.detailsFormService = detailsFormService;
    }
    DetailsformComponent.prototype.ngOnInit = function () {
    };
    DetailsformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detailsform',
            template: __webpack_require__(/*! ./detailsform.component.html */ "./src/app/shared-form/detailsform/detailsform.component.html"),
            styles: [__webpack_require__(/*! ./detailsform.component.css */ "./src/app/shared-form/detailsform/detailsform.component.css")]
        })
        // export class DetailsformComponent implements OnInit {
        ,
        __metadata("design:paramtypes", [_detailsform_service__WEBPACK_IMPORTED_MODULE_1__["DetailsformService"]])
    ], DetailsformComponent);
    return DetailsformComponent;
}());



/***/ }),

/***/ "./src/app/shared-form/shared-form.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared-form/shared-form.module.ts ***!
  \***************************************************/
/*! exports provided: SharedFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedFormModule", function() { return SharedFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detailsform_detailsform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailsform/detailsform.component */ "./src/app/shared-form/detailsform/detailsform.component.ts");
/* harmony import */ var _detailsform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailsform.service */ "./src/app/shared-form/detailsform.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedFormModule = /** @class */ (function () {
    function SharedFormModule() {
    }
    SharedFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                // CheckoutComponent
            ],
            declarations: [_detailsform_detailsform_component__WEBPACK_IMPORTED_MODULE_4__["DetailsformComponent"]],
            exports: [
                _detailsform_detailsform_component__WEBPACK_IMPORTED_MODULE_4__["DetailsformComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_detailsform_service__WEBPACK_IMPORTED_MODULE_5__["DetailsformService"]]
            //   	, FormsModule, ReactiveFormsModule,]
        })
    ], SharedFormModule);
    return SharedFormModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\node\ecommerce-sean\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map