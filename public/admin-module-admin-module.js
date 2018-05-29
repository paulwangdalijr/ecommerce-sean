(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-module-admin-module"],{

/***/ "./src/app/admin.module/admin-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/admin.module/admin-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin.module/admin.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/admin.module/components/products/products.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/admin.module/components/categories/categories.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { AdminRoutingModule } from './admin-routing.module';



var routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], children: [
            { path: '', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
            { path: 'categories', component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"] }
        ] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin.module/admin.component.css":
/*!**************************************************!*\
  !*** ./src/app/admin.module/admin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin.module/admin.component.html":
/*!***************************************************!*\
  !*** ./src/app/admin.module/admin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ol class=\"breadcrumb float-left\">\n  <li class=\"breadcrumb-item\"><a routerLink=\"/admin\" [routerLinkActive]=\"['active']\">Products</a></li>\n  <li class=\"breadcrumb-item\"><a routerLink=\"categories\" [routerLinkActive]=\"['active']\">Categories</a></li>\n</ol> -->\n<ul class=\"nav nav-tabs float-left pt-2 pl-3\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"/admin\" [routerLinkActive]=\"['active', 'show']\" [routerLinkActiveOptions]=\"{ exact: true }\">Products</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"categories\" [routerLinkActive]=\"['active', 'show']\" \n    >Categories</a>\n  </li>\n  <!-- <li class=\"nav-item\">\n    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n  </li>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n      <div class=\"dropdown-divider\"></div>\n      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n    </div>\n  </li> -->\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin.module/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/admin.module/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin.module/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin.module/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin.module/admin.module.ts":
/*!**********************************************!*\
  !*** ./src/app/admin.module/admin.module.ts ***!
  \**********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin.module/admin-routing.module.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/admin.module/components/products/products.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/admin.module/components/categories/categories.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin.module/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            declarations: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin.module/components/categories/categories.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin.module/components/categories/categories.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n\twidth: 100%;\n\tpadding-left: 10em;\n\n}\n#tableCategories th{\n\theight: 4em;\n\tpadding: 1em;\n\tbackground-color: black;\n\tcolor: white;\n}\n#tableCategories td{\n\tpadding-left: 1em;\n}"

/***/ }),

/***/ "./src/app/admin.module/components/categories/categories.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin.module/components/categories/categories.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row p-2 pr-3\">\n\t\t<button type=\"button\" class=\"btn btn-success ml-auto\" (click)=\"show = !show\">Add Category</button>\n\t</div>\n\t<!-- <div class=\"row\" style=\"width: 100%; padding-top: 1em\">\t -->\n\t<div class=\"row\" style=\"width: 100%\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<table id=\"tableCategories\" class=\"\">\n\t\t\t  <thead>\n\t\t\t    <tr class=\"table-primary\">\n\t\t\t      <th scope=\"col\">ID</th>\n\t\t\t      <th scope=\"col\">NAME</th>\n\t\t\t      <th scope=\"col\" class=\"text-lg-right\">Actions</th>\n\t\t\t    </tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t  \t<tr *ngFor=\"let category of categories; \n\t\t\t             let isOdd=odd;\n\t\t\t             let isEven=even\" \n\t\t\t\t      [class.table-dark]=\"isOdd\" \n\t\t\t\t      [class.table-light]=\"isEven\">\n\t\t\t\t      <td>{{category.ID}}</td>\n\t\t\t\t      <td>{{category.name}}</td>\n\t\t\t\t      <td><button class=\"btn btn-danger float-right\" (click)=\"onDeleteClick(category)\" data-toggle=\"modal\" data-target=\"#modalCategory\" >Delete</button></td>\n\t\t\t\t  </tr>\n\t\t\t  </tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div *ngIf=\"show\" id='newCategory' class=\"col-lg-6 border-black\">\n\t\t\t<h2> Category Name: </h2>\n\t\t\t<input class=\"form-control form-control-lg\" type=\"text\" [(ngModel)]=\"newCategory\" placeholder=\"*Name\" name=\"name\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"addCategory()\">Add!</button>\n\t\t</div>\n\t</div>\n\t<!-- </div> -->\n</div>\n\n<div class=\"modal\" id=\"modalCategory\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\t    <div class=\"form-group\">\n\t\t      <div class=\"modal-header\">    \n\t\t        <h5 class=\"modal-title\">Delete Category</h5> \t\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t          <span aria-hidden=\"true\">&times;</span>\n\t\t        </button>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\t\t      \t\n\t      \t\t<div class=\"alert alert-dismissible alert-danger\">\n\t\t\t\t  <!-- <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button> -->\n\t\t\t\t  <h4 class=\"alert-heading\">Warning!</h4>\n\t\t\t\t  <p class=\"mb-0\">Confirm deletion of {{selectedCategory.name}}.</p>\n\t\t\t\t</div>\n\t\t    </div>\n\t    </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteCategory()\" >DELETE</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin.module/components/categories/categories.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin.module/components/categories/categories.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _product_module_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../product.module/services/product.service */ "./src/app/product.module/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(authService, productService) {
        this.authService = authService;
        this.productService = productService;
        this.categories = [];
        this.newCategory = "";
        this.selectedCategory = {};
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
    };
    CategoriesComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (data) {
            _this.categories = data.category;
        });
    };
    CategoriesComponent.prototype.addCategory = function () {
        var _this = this;
        this.productService.addCategory(this.newCategory).subscribe(function (data) {
            _this.getAllCategories();
            _this.newCategory = "";
        });
    };
    CategoriesComponent.prototype.onDeleteClick = function (category) {
        this.selectedCategory = category;
    };
    CategoriesComponent.prototype.deleteCategory = function () {
        var _this = this;
        this.productService.deleteCategory(this.selectedCategory.ID).subscribe(function (data) {
            _this.getAllCategories();
        });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/admin.module/components/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/admin.module/components/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _product_module_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/admin.module/components/products/products.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin.module/components/products/products.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n\twidth: 100%;\n}\n#properties-list-group{\n\twidth: 100%;\n}\n#tableProducts th{\n\theight: 4em;\n\tpadding: 1em;\n\tbackground-color: black;\n\tcolor: white;\n}\n#tableProducts td{\n\tpadding-left: 1em;\n}"

/***/ }),

/***/ "./src/app/admin.module/components/products/products.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin.module/components/products/products.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n\t<div class=\"row p-2 pr-3\">\n\t\t<button type=\"button\" class=\"btn btn-success ml-auto\" data-toggle=\"modal\" data-target=\"#modalProduct\" (click)=\"onAddProductClick()\">Add Product</button>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<table id=\"tableProducts\">\n\t\t\t  <thead>\n\t\t\t    <tr class=\"table-primary\">\n\t\t\t      <th scope=\"col\">Name</th>\n\t\t\t      <th scope=\"col\">Description</th>\n\t\t\t      <th scope=\"col\">Quantity</th>\n\t\t\t      <th scope=\"col\">Price</th>\n\t\t\t      <th scope=\"col\" class=\"text-lg-right\">Actions</th>\n\t\t\t    </tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t  \t<tr *ngFor=\"let product of products; \n\t\t\t             let isOdd=odd;\n\t\t\t             let isEven=even\" \n\t\t\t\t      [class.table-dark]=\"isOdd\" \n\t\t\t\t      [class.table-light]=\"isEven\">\n\t\t\t\t      <td>{{product.name}}</td>\n\t\t\t\t      <td>{{product.description}}</td>\n\t\t\t\t      <td>{{product.quantity}}</td>\n\t\t\t\t      <td>{{product.price}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t  <button class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \n\t\t\t\t      \t  (click)=\"onDeleteProductClick(product)\">Delete</button>\n\t\t\t\t      \t  <button class=\"btn btn-warning float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \n\t\t\t\t      \t  (click)=\"onEditProductClick(product)\">Edit</button>\n\t\t\t\t      \t  <button class=\"btn btn-info float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \n\t\t\t\t      \t  (click)=\"onViewProductClick(product)\">Details</button>\n\t\t\t\t      \t</td>\n\t\t\t\t</tr>\n\t\t\t  </tbody>\n\t\t\t</table> \n\t\t</div>\n\t</div>\n</div>\n\n\n<div class=\"modal\" id=\"modalProduct\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\t    <div class=\"form-group\">\n\t      <form name=\"form\" id=\"productForm\">\t\n\t\t      <div class=\"modal-header\">    \n\t\t        <h5 class=\"modal-title\">{{modalTitle}}</h5> \t\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t          <span aria-hidden=\"true\">&times;</span>\n\t\t        </button>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\n\t\t      \t<div *ngIf=\"operation === 'delete'\" class=\"container\">\n\t\t      \t\t<div class=\"alert alert-dismissible alert-danger\">\n\t\t\t\t\t  <!-- <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button> -->\n\t\t\t\t\t  <h4 class=\"alert-heading\">Warning!</h4>\n\t\t\t\t\t  <p class=\"mb-0\">Confirm deletion of {{productSelected.name}}.</p>\n\t\t\t\t\t</div>\n\t\t      \t</div>\n\t\t        <div *ngIf=\"operation !== 'delete'\" class=\"container\">\n\t\t        \t<div class=\"row\">\n\t\t        \t\t<div class=\"col-3\">\n\t\t        \t\t\t<span>Categories</span>\n\t\t        \t\t</div>\n\t\t\t\t\t\t<div class=\"btn-group col-1\" role=\"group\">\n\t\t\t\t\t\t    <button id=\"btnGroupDrop4\" type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\n\t\t\t\t\t\t    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop4\">\n\t\t\t\t\t\t    \t<div class=\"pl-1\">\n\t\t\t\t\t\t\t       <div class=\"form-check\" *ngFor=\"let category of categories\">\n\t\t\t\t\t\t\t\t        <label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t          <input [disabled]=\"operation==='view'\" class=\"form-check-input\" type=\"checkbox\" name=\"checkbox\" [checked]=\"category.checked\"\n\t\t\t\t\t\t\t\t          (change)=\"onChangeCheckBox($event.target.checked, category.ID, productSelected.id)\">\n\t\t\t\t\t\t\t\t          {{category.name}}\n\t\t\t\t\t\t\t\t        </label>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t        \t</div>\n\t\t        \t<div class=\"row\">\n\t\t\t            <div class=\"col\">\n\t\t\t            \t<div class=\"row\">\n\t\t\t\t        \t\t<img alt='test' src=\"http://www.paperairplanebehavioral.com/wp-content/uploads/2015/07/Airplane.png\"/>\n\t\t\t\t        \t</div>\n\t\t\t            \t<div class=\"row pr-3\">\n\t\t\t\t\t          \t<div id=\"properties-list-group\" class=\"list-group\">\n\t\t\t\t\t\t\t\t  <span class=\"list-group-item list-group-item-action active\">\n\t\t\t\t\t\t\t\t    Properties\n\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t  <div *ngIf=\"operation==='view'\">\n\t\t\t\t\t\t\t\t\t  <span *ngFor=\"let prop of productSelectedProperty\" class=\"list-group-item list-group-item-action\"><strong>{{prop}}: </strong>{{productSelected.property[prop]}}\n\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t          \t  \t<div *ngIf=\"operation!=='view'\">\n\t\t\t\t\t          \t  \t<div *ngFor=\"let prop of productSelectedProperty\" class=\"row\">\t\n\t\t\t\t\t          \t  \t\t<div class=\"col-10\">\t\t             \n\t\t\t\t\t\t                \t<label class=\"col-form-label col-form-label-sm\" for=\"prop\">{{prop}}</label>\n\t\t\t\t\t\t                \t<input class=\"form-control form-control-sm\" type=\"text\"[(ngModel)]=\"productSelected.property[prop]\" name=\"{{prop}}\">\n\t\t\t\t\t\t                </div>\n\t\t\t\t\t          \t  \t\t<div class=\"col-1\">\t\n\t\t\t\t\t\t                \t<button type=\"button\" class=\"close\"><span aria-hidden=\"true\"\n\t\t\t\t\t\t                \t\t(click)=\"onDeletePropertyClick(productSelected, prop)\">&times;</span>\n\t\t\t\t\t        \t\t\t\t</button> \n\t\t\t\t\t        \t\t\t</div>\n\t\t\t\t\t\t          \t</div>\n\t\t\t\t\t          \t</div>\t\t\t\t          \t\n\t\t\t\t            </div>\n\t\t\t        \t</div>\n\t\t\t            <div class=\"col\">\n\t\t\t              <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"name\">Product name</label>\n\t\t\t        \t     <input [disabled]=\"operation==='view'\" type=\"text\" [(ngModel)]=\"productSelected.name\" name=\"name\" class=\"form-control\" placeholder=\"*Product Name\"/>\n\t\t\t        \t  </div>\n\t\t\t        \t  <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"\">Product description</label>\n\t\t\t              \t<textarea [disabled]=\"operation==='view'\" class=\"form-control\" placeholder=\"*Product Description\"  [(ngModel)]=\"productSelected.description\" name=\"description\"></textarea>\n\t\t\t          \t  </div>\n\t\t\t          \t  <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"quantity\">Quantity</label>\n\t\t\t          \t  \t<input [disabled]=\"operation==='view'\" type=\"number\" [(ngModel)]=\"productSelected.quantity\" name=\"quantity\" class=\"form-control\" placeholder=\"*Quantity\"/>\n\t\t\t          \t  </div>\n\t\t\t          \t  <div class=\"row form-group\">\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"price\">Price</label>\n\t\t\t          \t  \t<input [disabled]=\"operation==='view'\" type=\"number\" [(ngModel)]=\"productSelected.price\" name=\"price\" class=\"form-control\" placeholder=\"*Price\"/>\n\t\t\t          \t  </div>\n\n\t\t\t            \t<div *ngIf=\"operation!=='view'\" class=\"row border border-dark rounded\">\n\t\t\t            \t\t<div class=\"form-group p-2\">\n\t  \t\t\t\t\t\t\t\t<label class=\"col-form-label col-form-label-sm\">Property Name</label>\n\t  \t\t\t\t\t\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='newPropertyName' name='newPropertyName'>\n\t  \t\t\t\t\t\t\t\t<label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Property Value</label>\n\t  \t\t\t\t\t\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='newPropertyValue'\n\t  \t\t\t\t\t\t\t\tname='newPropertyValue' >\n\t  \t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onAddPropertyClick(productSelected)\">Add Property</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t            \t</div>\t\t\t          \t  \n\t\t\t          \t</div>\n\t\t          \t</div>\n\t\t        </div>\n\t\t      </div>\n\t     \t</form>\n\t    </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"operation==='add'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onAddClick()\" >ADD</button>\n        <button *ngIf=\"operation==='edit'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onUpdateClick()\" >UPDATE</button>\n        <button *ngIf=\"operation==='delete'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteClick()\" >DELETE</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin.module/components/products/products.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin.module/components/products/products.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _product_module_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../product.module/services/product.service */ "./src/app/product.module/services/product.service.ts");
/* harmony import */ var _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../product.module/models/product */ "./src/app/product.module/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(authService, productService, router) {
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
    ProductsComponent.prototype.ngOnInit = function () {
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
    ProductsComponent.prototype.getAllProducts = function () {
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
    ProductsComponent.prototype.setProductSelected = function (product) {
        var _this = this;
        var TempProduct = new _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        TempProduct.id = product.id;
        TempProduct.description = product.description;
        TempProduct.name = product.name;
        TempProduct.price = product.price;
        TempProduct.quantity = product.quantity;
        TempProduct.property = product.property;
        TempProduct.categories = product.categories || [];
        // this.productSelectedCategories = [];
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
            // this.productSelectedCategories.push(cat_prod);
        });
        this.productSelected = TempProduct;
        this.productSelectedProperty = Object.getOwnPropertyNames(TempProduct.property);
    };
    ProductsComponent.prototype.onEditProductClick = function (product) {
        this.operation = "edit";
        this.modalTitle = "Edit Product";
        this.setProductSelected(product);
    };
    ProductsComponent.prototype.onViewProductClick = function (product) {
        this.operation = "view";
        this.modalTitle = "View Product";
        this.setProductSelected(product);
    };
    ProductsComponent.prototype.onAddProductClick = function () {
        this.operation = "add";
        this.modalTitle = "Add Product";
        var product = new _product_module_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
        product.property = {};
        this.setProductSelected(product);
    };
    ProductsComponent.prototype.onDeleteProductClick = function (product) {
        this.operation = "delete";
        this.modalTitle = "Delete Product";
        this.setProductSelected(product);
    };
    ProductsComponent.prototype.onDeletePropertyClick = function (product, property) {
        delete product.property[property];
        this.setProductSelected(product);
        // let i = this.productSelectedProperty.indexOf(property)
        // this.productSelectedProperty.splice(i,1);
    };
    ProductsComponent.prototype.onAddPropertyClick = function (product) {
        if (this.newPropertyName !== "" && this.newPropertyValue !== "") {
            product.property[this.newPropertyName] = this.newPropertyValue;
            this.newPropertyName = "";
            this.newPropertyValue = "";
            this.setProductSelected(product);
        }
    };
    ProductsComponent.prototype.onAddClick = function () {
        var _this = this;
        this.productService.addNewProduct(this.productSelected, this.productSelectedCategories).subscribe(function (data) {
            _this.getAllProducts();
        });
    };
    ProductsComponent.prototype.onUpdateClick = function () {
        var _this = this;
        this.productService.editProduct(this.productSelected, this.productSelectedCategories).subscribe(function (data) {
            _this.getAllProducts();
        });
    };
    ProductsComponent.prototype.onDeleteClick = function () {
        var _this = this;
        this.productService.deleteProduct(this.productSelected.id).subscribe(function (data) {
            _this.getAllProducts();
        });
    };
    ProductsComponent.prototype.onChangeCheckBox = function (event, catID, prodID) {
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
    ProductsComponent.prototype.isChecked = function (categories, id) {
        return categories.includes(id);
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/admin.module/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/admin.module/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _product_module_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-module-admin-module.js.map