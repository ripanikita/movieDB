"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function productsHasErrored(err) {
    return {
        type: "PRODUCT_HAS_ERRORED",
        error: err
    };
}
exports.productsHasErrored = productsHasErrored;
function productsitemsIsLoading(bool) {
    return {
        type: "PRODUCT_IS_LOADING",
        isLoading: bool
    };
}
exports.productsitemsIsLoading = productsitemsIsLoading;
function productsFetchDataSuccess(products) {
    return {
        type: "PRODUCT_FETCH_DATA_SUCCESS",
        products: products
    };
}
exports.productsFetchDataSuccess = productsFetchDataSuccess;
function productsFetchData() {
    return function (dispatch) {
        fetch(config_1.getProducts)
            .then(function (response) { return response.json(); })
            .then(function (products) { return dispatch(productsFetchDataSuccess(products.products)); });
    };
}
exports.productsFetchData = productsFetchData;
//# sourceMappingURL=selectProduct.js.map