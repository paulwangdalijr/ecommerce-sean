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
		"admin-module-admin-module"
	],
	"./product.module/product.module": [
		"./src/app/product.module/product.module.ts",
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
	return __webpack_require__.e(ids[1]).then(function() {
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_social_social_component__WEBPACK_IMPORTED_MODULE_12__["SocialComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "<p>\n  about works!\n</p>\n"

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

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n\twidth: 100%;\n}\n#properties-list-group{\n\twidth: 100%;\n}\n#tableProducts th{\n\theight: 4em;\n\tpadding: 1em;\n\tbackground-color: black;\n\tcolor: white;\n}\n#tableProducts td{\n\tpadding-left: 1em;\n}"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n\t<div class=\"row p-2 pr-3\">\n\t\t<button type=\"button\" class=\"btn btn-success ml-auto\" data-toggle=\"modal\" data-target=\"#modalProduct\" (click)=\"onAddProductClick()\">Add Product</button>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<table id=\"tableProducts\">\n\t\t\t  <thead>\n\t\t\t    <tr class=\"table-primary\">\n\t\t\t      <th scope=\"col\">Name</th>\n\t\t\t      <th scope=\"col\">Description</th>\n\t\t\t      <th scope=\"col\">Quantity</th>\n\t\t\t      <th scope=\"col\">Price</th>\n\t\t\t      <th scope=\"col\" class=\"text-lg-right\">Actions</th>\n\t\t\t    </tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t  \t<tr *ngFor=\"let product of products; \n\t\t\t             let isOdd=odd;\n\t\t\t             let isEven=even\" \n\t\t\t\t      [class.table-dark]=\"isOdd\" \n\t\t\t\t      [class.table-light]=\"isEven\">\n\t\t\t\t      <td>{{product.name}}</td>\n\t\t\t\t      <td>{{product.description}}</td>\n\t\t\t\t      <td>{{product.quantity}}</td>\n\t\t\t\t      <td>{{product.price}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t  <button class=\"btn btn-danger float-right\">Delete</button>\n\t\t\t\t      \t  <button class=\"btn btn-warning float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \n\t\t\t\t      \t  (click)=\"onEditProductClick(product)\">Edit</button>\n\t\t\t\t      \t  <button class=\"btn btn-info float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \n\t\t\t\t      \t  (click)=\"onViewProductClick(product)\">Details</button>\n\t\t\t\t      \t</td>\n\t\t\t\t</tr>\n\t\t\t  </tbody>\n\t\t\t</table> \n\t\t</div>\n\t</div>\n</div>\n\n\n<div class=\"modal\" id=\"modalProduct\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\t    <div class=\"form-group\">\n\t      <form name=\"form\" id=\"productForm\">\t\n\t\t      <div class=\"modal-header\">    \n\t\t        <h5 class=\"modal-title\">{{modalTitle}}</h5> \t\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t          <span aria-hidden=\"true\">&times;</span>\n\t\t        </button>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\n\t\t        <div class=\"container\">\n\t\t        \t<div class=\"row\">\n\t\t        \t\t<div class=\"col-3\">\n\t\t        \t\t\t<span>Categories</span>\n\t\t        \t\t</div>\n\t\t\t\t\t\t<div class=\"btn-group col-1\" role=\"group\">\n\t\t\t\t\t\t    <button id=\"btnGroupDrop4\" type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n\t\t\t\t\t\t    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop4\">\n\t\t\t\t\t\t    \t<div class=\"pl-1\">\n\t\t\t\t\t\t\t       <div class=\"form-check\" *ngFor=\"let category of categories\">\n\t\t\t\t\t\t\t\t        <label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t          <input [disabled]=\"operation==='view'\" class=\"form-check-input\" type=\"checkbox\" name=\"checkbox\" [checked]=\"category.checked\"\n\t\t\t\t\t\t\t\t          (change)=\"onChangeCheckBox($event.target.checked, category.ID, productSelected.id)\">\n\t\t\t\t\t\t\t\t          {{category.name}}\n\t\t\t\t\t\t\t\t        </label>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t        \t</div>\n\t\t        \t<div class=\"row\">\n\t\t\t            <div class=\"col\">\n\t\t\t            \t<div class=\"row\">\n\t\t\t\t        \t\t<img alt='test' src=\"http://www.paperairplanebehavioral.com/wp-content/uploads/2015/07/Airplane.png\"/>\n\t\t\t\t        \t</div>\n\t\t\t            \t<div class=\"row pr-3\">\n\t\t\t\t\t          \t<div id=\"properties-list-group\" class=\"list-group\">\n\t\t\t\t\t\t\t\t  <span class=\"list-group-item list-group-item-action active\">\n\t\t\t\t\t\t\t\t    Properties\n\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t  <div *ngIf=\"operation==='view'\">\n\t\t\t\t\t\t\t\t\t  <span *ngFor=\"let prop of productSelectedProperty\" class=\"list-group-item list-group-item-action\"><strong>{{prop}}: </strong>{{productSelected.property[prop]}}\n\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t          \t  \t<div *ngIf=\"operation!=='view'\">\n\t\t\t\t\t          \t  \t<div *ngFor=\"let prop of productSelectedProperty\" class=\"row\">\t\n\t\t\t\t\t          \t  \t\t<div class=\"col-10\">\t\t             \n\t\t\t\t\t\t                \t<label class=\"col-form-label col-form-label-sm\" for=\"prop\">{{prop}}</label>\n\t\t\t\t\t\t                \t<input class=\"form-control form-control-sm\" type=\"text\"[(ngModel)]=\"productSelected.property[prop]\" name=\"{{prop}}\">\n\t\t\t\t\t\t                </div>\n\t\t\t\t\t          \t  \t\t<div class=\"col-1\">\t\n\t\t\t\t\t\t                \t<button type=\"button\" class=\"close\"><span aria-hidden=\"true\"\n\t\t\t\t\t\t                \t\t(click)=\"onDeletePropertyClick(productSelected, prop)\">&times;</span>\n\t\t\t\t\t        \t\t\t\t</button> \n\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t\t          \t</div>\n\t\t\t\t\t          \t</div>\t\t\t\t          \t\n\t\t\t\t            </div>\n\t\t\t        \t</div>\n\t\t\t            <div class=\"col\">\n\t\t\t              <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"name\">Product name</label>\n\t\t\t        \t     <input [disabled]=\"operation==='view'\" type=\"text\" [(ngModel)]=\"productSelected.name\" name=\"name\" class=\"form-control\" placeholder=\"*Product Name\"/>\n\t\t\t        \t  </div>\n\t\t\t        \t  <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"\">Product description</label>\n\t\t\t              \t<textarea [disabled]=\"operation==='view'\" class=\"form-control\" placeholder=\"*Product Description\"  [(ngModel)]=\"productSelected.description\" name=\"description\"></textarea>\n\t\t\t          \t  </div>\n\t\t\t          \t  <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"quantity\">Quantity</label>\n\t\t\t          \t  \t<input [disabled]=\"operation==='view'\" type=\"number\" [(ngModel)]=\"productSelected.quantity\" name=\"quantity\" class=\"form-control\" placeholder=\"*Quantity\"/>\n\t\t\t          \t  </div>\n\t\t\t          \t  <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"price\">Price</label>\n\t\t\t          \t  \t<input [disabled]=\"operation==='view'\" type=\"number\" [(ngModel)]=\"productSelected.price\" name=\"price\" class=\"form-control\" placeholder=\"*Price\"/>\n\t\t\t          \t  </div>\n\n\t\t\t            \t<div *ngIf=\"operation!=='view'\" class=\"row border border-dark rounded\">\n\t\t\t            \t\t<div class=\"form-group p-2\">\n\t  \t\t\t\t\t\t\t\t<label class=\"col-form-label col-form-label-sm\">Property Name</label>\n\t  \t\t\t\t\t\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='newPropertyName' name='newPropertyName'>\n\t  \t\t\t\t\t\t\t\t<label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Property Value</label>\n\t  \t\t\t\t\t\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='newPropertyValue'\n\t  \t\t\t\t\t\t\t\tname='newPropertyValue' >\n\t  \t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onAddPropertyClick(productSelected)\">Add Property</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t            \t</div>\t\t\t          \t  \n\t\t\t          \t</div>\n\t\t          \t</div>\n\t\t        </div>\n\t\t      </div>\n\t     \t</form>\n\t    </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"operation==='add'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onAddClick()\" >ADD</button>\n        <button *ngIf=\"operation==='edit'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onUpdateClick()\" >UPDATE</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _product_module_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product.module/services/product.service */ "./src/app/product.module/services/product.service.ts");
/* harmony import */ var _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product.module/models/product */ "./src/app/product.module/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService, productService, router) {
        this.authService = authService;
        this.productService = productService;
        this.router = router;
        this.productSelected = new _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        this.productSelectedCategories = [];
        this.newPropertyName = "";
        this.newPropertyValue = "";
        this.categories = [];
        this.cat_prod = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        // this.authService.getAdminProfile().subscribe((profile:any) => {
        //    if(profile.success){
        //      // this.email = profile.user.username;
        //      this.getAllProducts();
        //    }else{
        //      this.router.navigate(['/profile']);
        //    }
        //  })
        this.productSelected.categories = [];
        this.getAllProducts();
    };
    AdminComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.products = [];
        this.productService.getAllProducts().subscribe(function (data) {
            data.product.forEach(function (element) {
                var ProductItem = new _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
                ProductItem.id = element.ID;
                ProductItem.description = element.description;
                ProductItem.name = element.name;
                ProductItem.price = element.price;
                ProductItem.quantity = element.quantity;
                ProductItem.property = JSON.parse(element.property);
                _this.products.push(ProductItem);
                var categories = [];
                data.cat_prod.forEach(function (element) {
                    if (ProductItem.id === element.PRODUCTID) {
                        categories.push(element.CATEGORYID);
                    }
                });
                ProductItem.categories = categories;
            });
            _this.categories = data.category;
            _this.cat_prod = data.cat_prod;
            // this.Products=data.rows;
        });
    };
    AdminComponent.prototype.setProductSelected = function (product) {
        var _this = this;
        var TempProduct = new _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        TempProduct.id = product.id;
        TempProduct.description = product.description;
        TempProduct.name = product.name;
        TempProduct.price = product.price;
        TempProduct.quantity = product.quantity;
        TempProduct.property = product.property;
        TempProduct.categories = product.categories || [];
        this.productSelectedCategories = [];
        this.categories.forEach(function (cat) {
            cat.checked = false;
        });
        TempProduct.categories.forEach(function (elem) {
            var cat_prod = {
                CATEGORYID: elem,
                PRODUCTID: TempProduct.id
            };
            var i = _this.categories.findIndex(function (cat) { return cat.ID === elem; });
            if (i >= 0) {
                _this.categories[i].checked = true;
            }
            _this.productSelectedCategories.push(cat_prod);
        });
        this.productSelected = TempProduct;
        this.productSelectedProperty = Object.getOwnPropertyNames(TempProduct.property);
    };
    AdminComponent.prototype.onEditProductClick = function (product) {
        this.operation = "edit";
        this.modalTitle = "Edit Product";
        this.setProductSelected(product);
    };
    AdminComponent.prototype.onViewProductClick = function (product) {
        this.operation = "view";
        this.modalTitle = "View Product";
        this.setProductSelected(product);
    };
    AdminComponent.prototype.onAddProductClick = function () {
        this.operation = "add";
        this.modalTitle = "Add Product";
        var product = new _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        product.property = {};
        this.setProductSelected(product);
    };
    AdminComponent.prototype.onDeletePropertyClick = function (product, property) {
        delete product.property[property];
        this.setProductSelected(product);
        // let i = this.productSelectedProperty.indexOf(property)
        // this.productSelectedProperty.splice(i,1);
    };
    AdminComponent.prototype.onAddPropertyClick = function (product) {
        if (this.newPropertyName !== "" && this.newPropertyValue !== "") {
            product.property[this.newPropertyName] = this.newPropertyValue;
            this.newPropertyName = "";
            this.newPropertyValue = "";
            this.setProductSelected(product);
        }
    };
    AdminComponent.prototype.onAddClick = function () {
        this.productService.addNewProduct(this.productSelected, this.productSelectedCategories).subscribe(function (data) {
            console.log(data);
        });
    };
    AdminComponent.prototype.onUpdateClick = function () {
        this.productService.editProduct(this.productSelected, this.productSelectedCategories).subscribe(function (data) {
            console.log(data);
        });
    };
    AdminComponent.prototype.onChangeCheckBox = function (event, catID, prodID) {
        if (event === true) {
            var cat_prod = {
                CATEGORYID: catID,
                PRODUCTID: prodID
            };
            this.productSelectedCategories.push(cat_prod);
        }
        else {
            var i = this.productSelectedCategories.findIndex(function (cat) { return cat.CATEGORYID === catID; });
            this.productSelectedCategories.splice(i, 1);
        }
    };
    AdminComponent.prototype.isChecked = function (categories, id) {
        return categories.includes(id);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _product_module_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
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

module.exports = "<div class=\"container\">\n\n  <!-- Custom Success/Error Message -->\n  <div class=\"show-hide-message\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n\n<div class=\"row\">\n\n  <div class=\"col-3\"></div>\n  <div class=\"col-6\">\n    \n  <h2 class=\"page-header\">Login</h2>\n  <!-- Login Form -->\n  <form [formGroup]=\"form\"  (submit)=\"onLoginSubmit()\">\n\n    <!-- email Field -->\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <div [ngClass]=\"{'has-error': form.controls.email.errors && form.controls.email.dirty, 'has-success': form.controls.email.valid && form.controls.email.dirty }\">\n        <input class=\"form-control\" type=\"text\" name=\"email\" formControlName=\"email\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required.</li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- Password Field  -->\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n        </ul>\n      </div>\n    </div>\n    <!-- Submit Button -->\n    <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n    <a href=\"/auth/facebook\" ><button type=\"button\" class=\"btn btn-info\">Facebook</button></a>\n  </form>\n  </div>\n</div>\n</div>"

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
                _this.form.enable();
            }
            else {
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
                }, 1000);
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Shopping!</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>      \n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"about\">About</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <div class=\"btn-group show\" role=\"group\">\n        <div class=\"account-button dropdown-toggle\" data-toggle=\"dropdown\">\n           <i class=\"fas fa-user\"></i>\n        </div>\n        <div class=\"dropdown-menu\" x-placement=\"bottom-start\" style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 48px, 0px);\">\n          <a *ngIf=\"!authService.loggedIn()\" class=\"dropdown-item\" routerLink=\"login\">Login</a>\n          <a *ngIf=\"!authService.loggedIn()\" class=\"dropdown-item\" routerLink=\"signup\">Sign Up</a>\n          <a *ngIf=\"authService.loggedIn() && !authService.isAdmin() \" class=\"dropdown-item\" routerLink=\"profile\">Profile</a>\n          <a *ngIf=\"authService.isAdmin()\" class=\"dropdown-item\" routerLink=\"admin\">Dashboard</a>\n          <a *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" class=\"dropdown-item\" routerLink=\"logout\">Logout</a>\n        </div>\n      </div>\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <!-- <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button> -->\n    </form>\n  </div>\n</nav>\n"

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
        this.authService.logout();
        this.router.navigate(['']);
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

module.exports = "<p>\n  profile works!\n</p>\n"

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
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            if (profile.success) {
                _this.email = profile.user.username;
            }
            else {
                if (localStorage.getItem('type') !== 'admin') {
                    _this.authService.logout();
                    _this.router.navigate(['']);
                }
                else {
                    _this.router.navigate(['admin']);
                }
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "\n\n<div class='show-hide-message'>\n  <div [ngClass]='messageClass'>\n    {{message}}\n  </div>\n</div>\n\n<!-- Registration Form -->\n<div class=\"row\">\n\t<div class=\"col-3\"></div>\n\t<div class=\"col-6\">\n\t\t<h1 class=\"page-header\">Signup</h1>\n\t\t<form id=\"registerForm\" [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">  \n\t\t  \n\t\t  <!-- Email Input -->\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"email\">Email</label>\n\t\t    <!-- <div [ngClass]=\"{'has-danger': form.controls.email.dirty && (form.controls.email.errors || !emailValid ), 'has-success': !form.controls.email.errors && emailValid}\"> -->\n\t\t      <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" \n\t\t      [ngClass]=\"{'is-invalid': form.controls.email.dirty && (form.controls.email.errors || !emailValid ), 'is-valid': !form.controls.email.errors && emailValid}\"\n\t\t      />\n\t\t      <!-- Validation -->\n\t\t      \n\t\t      <ul class=\"help-block\"\n\t\t      [ngClass]=\"{'invalid-feedback': form.controls.email.dirty && (form.controls.email.errors || !emailValid ), 'valid-feedback': !form.controls.email.errors && emailValid}\"\n\t\t      >\n\t\t        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n\t\t        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n\t\t        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n\t\t        <li *ngIf=\"emailMessage\">{{ emailMessage }}</li>\n\t\t      </ul>\n\t\t    <!-- </div> -->\n\t\t  </div>\n\n\t\t  <!-- Password Input -->\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"password\">Password</label>\n\t\t    <!-- <div [ngClass]=\"{'has-danger': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\"> -->\n\t\t      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" \n\t\t      [ngClass]=\"{'is-invalid': (form.controls.password.errors && form.controls.password.dirty), 'is-valid': !form.controls.password.errors}\"\n\t\t      />\n\t\t      <!-- Validation -->\n\t\t      <ul class=\"help-block\"\n\t\t      [ngClass]=\"{'invalid-feedback': (form.controls.password.errors && form.controls.password.dirty), 'valid-feedback': !form.controls.password.errors}\"\n\t\t      >\n\t\t        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\n\t\t        <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Password must be at least 8 characters but no more than 35</li>\n\t\t        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must have 1 uppercase character, 1 lowercase character, 1 special character and 1 number</li>\n\t\t      </ul>\n\t\t    <!-- </div> -->\n\t\t  </div>\n\n\t\t  <!-- Confirm Password Input -->\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"confirm\">Confirm Password</label>\n\t\t    <!-- <div [ngClass]=\"{'has-danger': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\"> -->\n\t\t      <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" \n\t\t      [ngClass]=\"{'is-invalid': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'is-valid': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\"\n\t\t      />\n\t\t      <!-- Validation -->\n\t\t      <ul class=\"help-block\"\n\t\t      [ngClass]=\"{'invalid-feedback': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'valid-feedback': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\"\n\t\t      >\n\t\t        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n\t\t        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n\t\t      </ul>\n\t\t    <!-- </div> -->\n\t\t  </div>\n\n\t\t  <!-- Submit Input -->\n\t\t  <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n\n\t\t</form>\n\t\t<!-- Registration Form /-->\n\t</div>\n</div>\n"

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
        this.redirectURL = state.url;
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('type') === 'admin') {
                this.router.navigate(['/admin']);
                return false;
            }
            else {
                return true;
            }
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

/***/ "./src/app/product.module/models/product.ts":
/*!**************************************************!*\
  !*** ./src/app/product.module/models/product.ts ***!
  \**************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product.module/services/product.service.ts":
/*!************************************************************!*\
  !*** ./src/app/product.module/services/product.service.ts ***!
  \************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.domain = 'http://localhost:3000'; //dev
    }
    ProductService.prototype.getAllProducts = function () {
        return this.http.get(this.domain + '/api/product/getProducts');
    };
    ProductService.prototype.addNewProduct = function (x_product, x_cat_prod) {
        this.authService.createAuthenticationHeaders();
        var req = { product: x_product, cat_prod: x_cat_prod };
        return this.http.post(this.domain + '/auth/newProduct', req, this.authService.options);
    };
    ProductService.prototype.editProduct = function (x_product, x_cat_prod) {
        this.authService.createAuthenticationHeaders();
        var req = { product: x_product, cat_prod: x_cat_prod };
        return this.http.put(this.domain + '/auth/editProduct', req, this.authService.options);
    };
    ProductService.prototype.deleteProduct = function (id) {
        this.authService.createAuthenticationHeaders();
        return this.http.delete(this.domain + '/auth/deleteProduct/' + id, this.authService.options);
    };
    ProductService.prototype.addCategory = function (name) {
        this.authService.createAuthenticationHeaders();
        var req = { category: name };
        return this.http.post(this.domain + '/auth/newCategory', req, this.authService.options);
    };
    ProductService.prototype.deleteCategory = function (id) {
        this.authService.createAuthenticationHeaders();
        return this.http.delete(this.domain + '/auth/deleteCategory/' + id, this.authService.options);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProductService);
    return ProductService;
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
    AuthService.prototype.getAdminProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + "/auth/adminprofile", this.options);
        // return this.http.get(this.domain + "/auth/adminprofile", this.options).
        //   pipe(
        //     map((data:any)=>{
        //       return data.success;
        //     }));
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