(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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



/***/ })

}]);
//# sourceMappingURL=common.js.map