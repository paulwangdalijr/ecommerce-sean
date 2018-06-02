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
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/admin.module/components/orders/orders.component.ts");
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
            { path: 'categories', component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"] },
            { path: 'orders', component: _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"] }
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

module.exports = "<!-- <ol class=\"breadcrumb float-left\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/admin\" [routerLinkActive]=\"['active']\">Products</a></li>\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"categories\" [routerLinkActive]=\"['active']\">Categories</a></li>\r\n</ol> -->\r\n<ul class=\"nav nav-tabs float-left pt-2 pl-3\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"/admin\" [routerLinkActive]=\"['active', 'show']\" [routerLinkActiveOptions]=\"{ exact: true }\">Products</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"categories\" [routerLinkActive]=\"['active', 'show']\" \r\n    >Categories</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"orders\" [routerLinkActive]=\"['active', 'show']\" \r\n      >Orders</a>\r\n    </li>\r\n  <!-- <li class=\"nav-item\">\r\n    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n  </li>\r\n  <li class=\"nav-item dropdown\">\r\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n    <div class=\"dropdown-menu\">\r\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n      <div class=\"dropdown-divider\"></div>\r\n      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </div>\r\n  </li> -->\r\n</ul>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/admin.module/components/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { FileUploadModule } from 'ng2-file-upload'






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
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            declarations: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileSelectDirective"], _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]]
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

module.exports = "table{\r\n\twidth: 100%;\r\n\tpadding-left: 10em;\r\n\r\n}\r\n#tableCategories th{\r\n\theight: 4em;\r\n\tpadding: 1em;\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n}\r\n#tableCategories td{\r\n\tpadding-left: 1em;\r\n}"

/***/ }),

/***/ "./src/app/admin.module/components/categories/categories.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin.module/components/categories/categories.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row p-2 pr-3\">\r\n\t\t<button type=\"button\" class=\"btn btn-success ml-auto\" (click)=\"show = !show\">Add Category</button>\r\n\t</div>\r\n\t<!-- <div class=\"row\" style=\"width: 100%; padding-top: 1em\">\t -->\r\n\t<div class=\"row\" style=\"width: 100%\">\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<table id=\"tableCategories\" class=\"\">\r\n\t\t\t  <thead>\r\n\t\t\t    <tr class=\"table-primary\">\r\n\t\t\t      <th scope=\"col\">ID</th>\r\n\t\t\t      <th scope=\"col\">NAME</th>\r\n\t\t\t      <th scope=\"col\" class=\"text-lg-right\">Actions</th>\r\n\t\t\t    </tr>\r\n\t\t\t  </thead>\r\n\t\t\t  <tbody>\r\n\t\t\t  \t<tr *ngFor=\"let category of categories; \r\n\t\t\t             let isOdd=odd;\r\n\t\t\t             let isEven=even\" \r\n\t\t\t\t      [class.table-dark]=\"isOdd\" \r\n\t\t\t\t      [class.table-light]=\"isEven\">\r\n\t\t\t\t      <td>{{category.ID}}</td>\r\n\t\t\t\t      <td>{{category.name}}</td>\r\n\t\t\t\t      <td><button class=\"btn btn-danger float-right\" (click)=\"onDeleteClick(category)\" data-toggle=\"modal\" data-target=\"#modalCategory\" >Delete</button></td>\r\n\t\t\t\t  </tr>\r\n\t\t\t  </tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"show\" id='newCategory' class=\"col-lg-6 border-black\">\r\n\t\t\t<h2> Category Name: </h2>\r\n\t\t\t<input class=\"form-control form-control-lg\" type=\"text\" [(ngModel)]=\"newCategory\" placeholder=\"*Name\" name=\"name\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"addCategory()\">Add!</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- </div> -->\r\n</div>\r\n\r\n<div class=\"modal\" id=\"modalCategory\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\t    <div class=\"form-group\">\r\n\t\t      <div class=\"modal-header\">    \r\n\t\t        <h5 class=\"modal-title\">Delete Category</h5> \t\r\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t          <span aria-hidden=\"true\">&times;</span>\r\n\t\t        </button>\r\n\t\t      </div>\r\n\t\t      <div class=\"modal-body\">\t\t      \t\r\n\t      \t\t<div class=\"alert alert-dismissible alert-danger\">\r\n\t\t\t\t  <!-- <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button> -->\r\n\t\t\t\t  <h4 class=\"alert-heading\">Warning!</h4>\r\n\t\t\t\t  <p class=\"mb-0\">Confirm deletion of {{selectedCategory.name}}.</p>\r\n\t\t\t\t</div>\r\n\t\t    </div>\r\n\t    </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteCategory()\" >DELETE</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

/***/ "./src/app/admin.module/components/orders/orders.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin.module/components/orders/orders.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tableOrders th{\r\n\theight: 4em;\r\n\tpadding: 1em;\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n}"

/***/ }),

/***/ "./src/app/admin.module/components/orders/orders.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin.module/components/orders/orders.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row p-2 pr-4\">\n        <h3 class=\"ml-auto\"> Order details</h3>        \n      </div>\n    <div class=\"row\" style=\"width: 100%\">\n      <div class=\"col-lg-6\">\n        <table id=\"tableOrders\" class=\"table table-hover\">\n          <thead>\n            <tr class=\"table-primary\">\n              <th scope=\"col\">Order Number</th>\n              <th scope=\"col\">Created</th>\n              <th scope=\"col\">Total</th>                \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let order of orders; \n                      let isOdd=odd;\n                      let isEven=even\" \n                [class.table-dark]=\"isOdd\" \n                [class.table-light]=\"isEven\" (click)=\"onRowSelect(order)\">\n                <td>{{order.ID}} </td>        \n                <td>{{order.date | date: 'MM/dd/yyyy'}} </td>          \n                <td>${{getPrice(order.items)}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-lg-6 border-black\">\n          <div class=\"card mb-3\">\n              <h3 class=\"card-header\">Order no: {{selectedOrder.ID}} <span class=\"float-right\">${{getPrice(selectedOrder.items)}}</span></h3>\n                <div class=\"card-header\">Buyer</div>\n                <div class=\"card-body\">\n                  <p class=\"card-text\">Name: {{buyer.name}}</p>\n                  <p class=\"card-text\">Address: {{buyer.address}}</p>\n                  <p class=\"card-text\">Mobile: {{buyer.mobile}}</p>\n                  <p class=\"card-text\">Email: {{buyer.email}}</p>\n              </div>\n              <div class=\"card\">\n                <div class=\"card-header\">Items</div>\n                <div class=\"card-body\">                \n                  <p *ngFor=\"let product of items\" class=\"card-text\">{{product.name}} <span class=\"float-right\">${{product.price}}</span></p>\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin.module/components/orders/orders.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin.module/components/orders/orders.component.ts ***!
  \********************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_module_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../product.module/services/product.service */ "./src/app/product.module/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(productService) {
        this.productService = productService;
        this.buyer = {};
        this.selectedOrder = {};
        this.getAllOrders();
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.productService.getAllOrders().subscribe(function (data) {
            _this.orders = data.orders;
            if (_this.orders.length > 0) {
                _this.onRowSelect(_this.orders[0]);
            }
        });
    };
    OrdersComponent.prototype.getPrice = function (items) {
        var price = 0;
        try {
            var l_items = JSON.parse(items);
            l_items.forEach(function (obj) {
                price += obj.price;
            });
        }
        catch (err) { }
        return price;
    };
    OrdersComponent.prototype.onRowSelect = function (order) {
        this.selectedOrder = order;
        this.buyer = JSON.parse(this.selectedOrder.buyer);
        // this.buyer.email = buyer.email
        // this.buyer.name = buyer.name
        // this.buyer.address = buyer.address
        // this.buyer.mobile = buyer.mobile
        this.items = JSON.parse(this.selectedOrder.items);
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/admin.module/components/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/admin.module/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_product_module_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin.module/components/products/products.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin.module/components/products/products.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n\twidth: 100%;\r\n}\r\n#properties-list-group{\r\n\twidth: 100%;\r\n}\r\n#tableProducts th{\r\n\theight: 4em;\r\n\tpadding: 1em;\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n}\r\n#tableProducts td{\r\n\tpadding-left: 1em;\r\n\t\r\n}\r\n#tableProducts td:nth-of-type(1){\r\n\twidth: 10em;\r\n}\r\n#tableProducts td:nth-of-type(2){\r\n\twidth: 30em;\r\n}\r\n.modal img {\r\n\theight: auto;\r\n\tmin-height: 10em;\r\n\tmax-height: 10em;\r\n    max-width: 92%;\r\n}"

/***/ }),

/***/ "./src/app/admin.module/components/products/products.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin.module/components/products/products.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\r\n\t<div class=\"row p-2 pr-3\">\r\n\t\t<button type=\"button\" class=\"btn btn-success ml-auto\" data-toggle=\"modal\" data-target=\"#modalProduct\" (click)=\"onAddProductClick()\">Add Product</button>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<table id=\"tableProducts\">\r\n\t\t\t  <thead>\r\n\t\t\t    <tr class=\"table-primary\">\r\n\t\t\t      <th scope=\"col\">Name</th>\r\n\t\t\t      <th scope=\"col\">Description</th>\r\n\t\t\t      <th scope=\"col\">Quantity</th>\r\n\t\t\t      <th scope=\"col\">Price</th>\r\n\t\t\t      <th scope=\"col\" class=\"text-lg-right\">Actions</th>\r\n\t\t\t    </tr>\r\n\t\t\t  </thead>\r\n\t\t\t  <tbody>\r\n\t\t\t  \t<tr *ngFor=\"let product of products; \r\n\t\t\t             let isOdd=odd;\r\n\t\t\t             let isEven=even\" \r\n\t\t\t\t      [class.table-dark]=\"isOdd\" \r\n\t\t\t\t      [class.table-light]=\"isEven\">\r\n\t\t\t\t      <td>{{product.name}}</td>\r\n\t\t\t\t      <td>{{product.description}}</td>\r\n\t\t\t\t      <td>{{product.quantity}}</td>\r\n\t\t\t\t      <td>{{product.price}}</td>\r\n\t\t\t\t      <td>\r\n\t\t\t\t      \t  <button class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \r\n\t\t\t\t      \t  (click)=\"onDeleteProductClick(product)\">Delete</button>\r\n\t\t\t\t      \t  <button class=\"btn btn-warning float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \r\n\t\t\t\t      \t  (click)=\"onEditProductClick(product)\">Edit</button>\r\n\t\t\t\t      \t  <button class=\"btn btn-info float-right\" data-toggle=\"modal\" data-target=\"#modalProduct\" \r\n\t\t\t\t      \t  (click)=\"onViewProductClick(product)\">Details</button>\r\n\t\t\t\t      \t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t  </tbody>\r\n\t\t\t</table> \r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"modal\" id=\"modalProduct\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\t    <div class=\"form-group\">\r\n\t      <form name=\"form\" id=\"productForm\">\t\r\n\t\t      <div class=\"modal-header\">    \r\n\t\t        <h5 class=\"modal-title\">{{modalTitle}}</h5> \t\r\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t          <span aria-hidden=\"true\">&times;</span>\r\n\t\t        </button>\r\n\t\t      </div>\r\n\t\t      <div class=\"modal-body\">\r\n\t\t      \t<div *ngIf=\"operation === 'delete'\" class=\"container\">\r\n\t\t      \t\t<div class=\"alert alert-dismissible alert-danger\">\r\n\t\t\t\t\t  <!-- <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button> -->\r\n\t\t\t\t\t  <h4 class=\"alert-heading\">Warning!</h4>\r\n\t\t\t\t\t  <p class=\"mb-0\">Confirm deletion of {{productSelected.name}}.</p>\r\n\t\t\t\t\t</div>\r\n\t\t      \t</div>\r\n\t\t        <div *ngIf=\"operation !== 'delete'\" class=\"container\">\r\n\t\t        \t<div class=\"row\">\r\n\t\t        \t\t<div class=\"col-3\">\r\n\t\t        \t\t\t<span>Categories</span>\r\n\t\t        \t\t</div>\r\n\t\t\t\t\t\t<div class=\"btn-group col-1\" role=\"group\">\r\n\t\t\t\t\t\t    <button id=\"btnGroupDrop4\" type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\r\n\t\t\t\t\t\t    <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop4\">\r\n\t\t\t\t\t\t    \t<div class=\"pl-1\">\r\n\t\t\t\t\t\t\t       <div class=\"form-check\" *ngFor=\"let category of categories\">\r\n\t\t\t\t\t\t\t\t        <label class=\"form-check-label\">\r\n\t\t\t\t\t\t\t\t          <input [disabled]=\"operation==='view'\" class=\"form-check-input\" type=\"checkbox\" name=\"checkbox\" [checked]=\"category.checked\"\r\n\t\t\t\t\t\t\t\t          (change)=\"onChangeCheckBox($event.target.checked, category.ID, productSelected.id)\">\r\n\t\t\t\t\t\t\t\t          {{category.name}}\r\n\t\t\t\t\t\t\t\t        </label>\r\n\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t        \t</div>\r\n\t\t        \t<div class=\"row\">\r\n\t\t\t            <div class=\"col\">\r\n\t\t\t            \t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<img alt=\"{{productSelected.id}}\" [src]=\"this.authService.domain + '/img/' + productSelected.id + '.jpg?' + time\" />\r\n\t\t\t\t\t\t\t\t\t\t<!-- [src]=\"authService.domain + '/img/' + productSelected.id + '.jpg'\" -->\r\n\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"operation!=='view'\" class=\"form-control-file\" type=\"file\" name=\"fileUpload\" ng2FileSelect [uploader]=\"productService.fileUploader\">\r\n\t\t\t\t        \t</div>\r\n\t\t\t            \t<div class=\"row pr-3 pt-2\">\r\n\t\t\t\t\t          \t<div id=\"properties-list-group\" class=\"list-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-group-item list-group-item-action active\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tProperties\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t  <div *ngIf=\"operation==='view'\">\r\n\t\t\t\t\t\t\t\t\t  <span *ngFor=\"let prop of productSelectedProperty\" class=\"list-group-item list-group-item-action\"><strong>{{prop}}: </strong>{{productSelected.property[prop]}}\r\n\t\t\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t          \t  \t<div *ngIf=\"operation!=='view'\">\r\n\t\t\t\t\t          \t  \t<div *ngFor=\"let prop of productSelectedProperty\" class=\"row\">\t\r\n\t\t\t\t\t          \t  \t\t<div class=\"col-10\">\t\t             \r\n\t\t\t\t\t\t                \t<label class=\"col-form-label col-form-label-sm\" for=\"prop\">{{prop}}</label>\r\n\t\t\t\t\t\t                \t<input class=\"form-control form-control-sm\" type=\"text\"[(ngModel)]=\"productSelected.property[prop]\" name=\"{{prop}}\">\r\n\t\t\t\t\t\t                </div>\r\n\t\t\t\t\t          \t  \t\t<div class=\"col-1\">\t\r\n\t\t\t\t\t\t                \t<button type=\"button\" class=\"close\"><span aria-hidden=\"true\"\r\n\t\t\t\t\t\t                \t\t(click)=\"onDeletePropertyClick(productSelected, prop)\">&times;</span>\r\n\t\t\t\t\t        \t\t\t\t</button> \r\n\t\t\t\t\t        \t\t\t</div>\r\n\t\t\t\t\t\t          \t</div>\r\n\t\t\t\t\t          \t</div>\t\t\t\t          \t\r\n\t\t\t\t            </div>\r\n\t\t\t        \t</div>\r\n\t\t\t            <div class=\"col\">\r\n\t\t\t              <div class=\"row form-group\">\r\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"name\">Product name</label>\r\n\t\t\t        \t     <input [disabled]=\"operation==='view'\" type=\"text\" [(ngModel)]=\"productSelected.name\" name=\"name\" class=\"form-control\" placeholder=\"*Product Name\"/>\r\n\t\t\t        \t  </div>\r\n\t\t\t        \t  <div class=\"row form-group\">\r\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"\">Product description</label>\r\n\t\t\t              \t<textarea [disabled]=\"operation==='view'\" class=\"form-control\" placeholder=\"*Product Description\"  [(ngModel)]=\"productSelected.description\" name=\"description\"></textarea>\r\n\t\t\t          \t  </div>\r\n\t\t\t          \t  <div class=\"row form-group\">\r\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"quantity\">Quantity</label>\r\n\t\t\t          \t  \t<input [disabled]=\"operation==='view'\" type=\"number\" [(ngModel)]=\"productSelected.quantity\" name=\"quantity\" class=\"form-control\" placeholder=\"*Quantity\"/>\r\n\t\t\t          \t  </div>\r\n\t\t\t          \t  <div class=\"row form-group\">\r\n\t\t\t              \t<label class=\"col-form-label col-form-label-sm\" for=\"price\">Price</label>\r\n\t\t\t          \t  \t<input [disabled]=\"operation==='view'\" type=\"number\" [(ngModel)]=\"productSelected.price\" name=\"price\" class=\"form-control\" placeholder=\"*Price\"/>\r\n\t\t\t          \t  </div>\r\n\r\n\t\t\t            \t<div *ngIf=\"operation!=='view'\" class=\"row border border-dark rounded\">\r\n\t\t\t            \t\t<div class=\"form-group p-2\">\r\n\t  \t\t\t\t\t\t\t\t<label class=\"col-form-label col-form-label-sm\">Property Name</label>\r\n\t  \t\t\t\t\t\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='newPropertyName' name='newPropertyName'>\r\n\t  \t\t\t\t\t\t\t\t<label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Property Value</label>\r\n\t  \t\t\t\t\t\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='newPropertyValue'\r\n\t  \t\t\t\t\t\t\t\tname='newPropertyValue' >\r\n\t  \t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onAddPropertyClick(productSelected)\">Add Property</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t            \t</div>\t\t\t          \t  \r\n\t\t\t          \t</div>\r\n\t\t          \t</div>\r\n\t\t        </div>\r\n\t\t      </div>\r\n\t     \t</form>\r\n\t    </div>\r\n      <div class=\"modal-footer\">\r\n        <button *ngIf=\"operation==='add'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onAddClick()\" >ADD</button>\r\n        <button *ngIf=\"operation==='edit'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onUpdateClick()\" >UPDATE</button>\r\n        <button *ngIf=\"operation==='delete'\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteClick()\" >DELETE</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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





// import { FileSelectDirective } from 'ng2-file-upload'
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
        this.time = new Date().getTime();
        this.productSelected = TempProduct;
        this.productSelectedProperty = Object.getOwnPropertyNames(TempProduct.property);
        this.productService.fileUploader.queue = [];
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
            if (data.success) {
                _this.productService.uploadFile(data.id, function () { _this.getAllProducts(); });
                // this.getAllProducts();
            }
        });
    };
    ProductsComponent.prototype.onUpdateClick = function () {
        var _this = this;
        this.productService.editProduct(this.productSelected, this.productSelectedCategories).subscribe(function (data) {
            // this.getAllProducts();
            _this.productService.uploadFile(_this.productSelected.id, function () { _this.getAllProducts(); });
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