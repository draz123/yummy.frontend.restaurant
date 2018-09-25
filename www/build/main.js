webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Hide; });
var SHOW = '[_Loader] Show';
var HIDE = '[_Loader] Hide';
var Show = (function () {
    function Show(payload) {
        this.payload = payload;
        this.type = SHOW;
    }
    ;
    return Show;
}());

var Hide = (function () {
    function Hide() {
        this.type = HIDE;
    }
    return Hide;
}());

//# sourceMappingURL=_loader.actions.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Hide; });
var SHOW = '[_Modal] Show';
var HIDE = '[_Modal] Hide';
var Show = (function () {
    function Show(payload) {
        this.payload = payload;
        this.type = SHOW;
    }
    return Show;
}());

var Hide = (function () {
    function Hide() {
        this.type = HIDE;
    }
    return Hide;
}());

//# sourceMappingURL=_modal.actions.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_PENDINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_PENDINGS_SUCC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_PENDINGS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MARK_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMPLETE_PENDINGS; });
/* unused harmony export COMPLETE_PENDINGS_SUCC */
/* unused harmony export COMPLETE_PENDINGS_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANCEL_PENDINGS; });
/* unused harmony export CANCEL_PENDINGS_SUCC */
/* unused harmony export CANCEL_PENDINGS_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FetchPendings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FetchPendingsSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FetchPendingsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return MarkPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CompletePendings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CompletePendingsSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CompletePendingsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CancelPendings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CancelPendingsSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CancelPendingsFail; });
var FETCH_PENDINGS = "[Pending] Fetch Pendings";
var FETCH_PENDINGS_SUCC = "[Pending] Fetch Pendings Succ";
var FETCH_PENDINGS_FAIL = "[Pending] Fetch Pendings Fail";
var MARK_PENDING = "[Pending] Mark Pending";
var COMPLETE_PENDINGS = "[Pending] Complete Pendings";
var COMPLETE_PENDINGS_SUCC = "[Pending] Complete Pendings Succ";
var COMPLETE_PENDINGS_FAIL = "[Pending] Complete Pendings Fail";
var CANCEL_PENDINGS = "[Pending] Cancel Pendings";
var CANCEL_PENDINGS_SUCC = "[Pending] Cancel Pendings Succ";
var CANCEL_PENDINGS_FAIL = "[Pending] Cancel Pendings Fail";
var FetchPendings = (function () {
    function FetchPendings(payload) {
        this.payload = payload;
        this.type = FETCH_PENDINGS;
    }
    return FetchPendings;
}());

var FetchPendingsSucc = (function () {
    function FetchPendingsSucc(payload) {
        this.payload = payload;
        this.type = FETCH_PENDINGS_SUCC;
    }
    return FetchPendingsSucc;
}());

var FetchPendingsFail = (function () {
    function FetchPendingsFail() {
        this.type = FETCH_PENDINGS_FAIL;
    }
    return FetchPendingsFail;
}());

var MarkPending = (function () {
    function MarkPending(payload) {
        this.payload = payload;
        this.type = MARK_PENDING;
    }
    return MarkPending;
}());

var CompletePendings = (function () {
    function CompletePendings(payload) {
        this.payload = payload;
        this.type = COMPLETE_PENDINGS;
    }
    return CompletePendings;
}());

var CompletePendingsSucc = (function () {
    function CompletePendingsSucc(payload) {
        this.payload = payload;
        this.type = COMPLETE_PENDINGS_SUCC;
    }
    return CompletePendingsSucc;
}());

var CompletePendingsFail = (function () {
    function CompletePendingsFail() {
        this.type = COMPLETE_PENDINGS_FAIL;
    }
    return CompletePendingsFail;
}());

var CancelPendings = (function () {
    function CancelPendings(payload) {
        this.payload = payload;
        this.type = CANCEL_PENDINGS;
    }
    return CancelPendings;
}());

var CancelPendingsSucc = (function () {
    function CancelPendingsSucc(payload) {
        this.payload = payload;
        this.type = CANCEL_PENDINGS_SUCC;
    }
    return CancelPendingsSucc;
}());

var CancelPendingsFail = (function () {
    function CancelPendingsFail() {
        this.type = CANCEL_PENDINGS_FAIL;
    }
    return CancelPendingsFail;
}());

//# sourceMappingURL=pending.actions.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offer; });
var Offer = (function () {
    function Offer(offer) {
        this.id = '';
        this.name = '';
        this.restaurantId = '';
        this.image = null;
        this.description = '';
        this.price = null;
        this.calculatedPrice = null;
        this.discount = null;
        this.count = null;
        if (offer) {
            Object.assign(this, offer);
            if (!offer.calculatedPrice) {
                this.calculatedPrice = calculatePrice(this.price, this.discount);
            }
        }
    }
    return Offer;
}());

var calculatePrice = function (price, discount) {
    return Math.round(price * (100 - discount) / 10) / 10;
};
//# sourceMappingURL=offer.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_TRANSACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_TRANSACTIONS_SUCC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_TRANSACTIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FetchTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FetchTransactionsSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FetchTransactionsFail; });
var FETCH_TRANSACTIONS = "[Transaction] Fetch Transactions";
var FETCH_TRANSACTIONS_SUCC = "[Transaction] Fetch Transactions Succ";
var FETCH_TRANSACTIONS_FAIL = "[Transaction] Fetch Transactions Fail";
var FetchTransactions = (function () {
    function FetchTransactions(payload) {
        this.payload = payload;
        this.type = FETCH_TRANSACTIONS;
    }
    return FetchTransactions;
}());

var FetchTransactionsSucc = (function () {
    function FetchTransactionsSucc(payload) {
        this.payload = payload;
        this.type = FETCH_TRANSACTIONS_SUCC;
    }
    return FetchTransactionsSucc;
}());

var FetchTransactionsFail = (function () {
    function FetchTransactionsFail() {
        this.type = FETCH_TRANSACTIONS_FAIL;
    }
    return FetchTransactionsFail;
}());

//# sourceMappingURL=transaction.actions.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Api = (function () {
    function Api(http) {
        this.http = http;
    }
    Api.prototype.get = function (url, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
            };
        }
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(url, reqOpts);
    };
    Api.prototype.post = function (url, body, reqOpts) {
        return this.http.post(url, body, reqOpts);
    };
    Api.prototype.put = function (url, body, reqOpts) {
        return this.http.put(url, body, reqOpts);
    };
    Api.prototype.delete = function (url, reqOpts) {
        return this.http.delete(url, reqOpts);
    };
    Api.prototype.patch = function (url, body, reqOpts) {
        return this.http.put(url, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_FORM_SUCC; });
/* unused harmony export UPDATE_FORM_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SUBMIT_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SUBMIT_FORM_SUCC; });
/* unused harmony export SUBMIT_FORM_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UpdateFormSucc; });
/* unused harmony export UpdateFormFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SubmitForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SubmitFormSucc; });
/* unused harmony export SubmitFormFail */
var UPDATE_FORM = "[OfferForm] Update Form";
var UPDATE_FORM_SUCC = "[OfferForm] Update Form Succ";
var UPDATE_FORM_FAIL = "[OfferForm] Update Form Fail";
var SUBMIT_FORM = "[OfferForm] Submit Form";
var SUBMIT_FORM_SUCC = "[OfferForm] Submit Form Succ";
var SUBMIT_FORM_FAIL = "[OfferForm] Submit Form Fail";
var UpdateForm = (function () {
    function UpdateForm(payload) {
        this.payload = payload;
        this.type = UPDATE_FORM;
    }
    return UpdateForm;
}());

var UpdateFormSucc = (function () {
    function UpdateFormSucc(payload) {
        this.payload = payload;
        this.type = UPDATE_FORM_SUCC;
    }
    return UpdateFormSucc;
}());

var UpdateFormFail = (function () {
    function UpdateFormFail() {
        this.type = UPDATE_FORM_FAIL;
    }
    return UpdateFormFail;
}());

var SubmitForm = (function () {
    function SubmitForm(payload) {
        this.payload = payload;
        this.type = SUBMIT_FORM;
    }
    return SubmitForm;
}());

var SubmitFormSucc = (function () {
    function SubmitFormSucc(payload) {
        this.payload = payload;
        this.type = SUBMIT_FORM_SUCC;
    }
    return SubmitFormSucc;
}());

var SubmitFormFail = (function () {
    function SubmitFormFail() {
        this.type = SUBMIT_FORM_FAIL;
    }
    return SubmitFormFail;
}());

//# sourceMappingURL=offer-form.actions.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Show; });
/* unused harmony export Hide */
var SHOW = '[_Toast] Show';
var HIDE = '[_Toast] Hide';
var Show = (function () {
    function Show(payload) {
        this.payload = payload;
        this.type = SHOW;
    }
    ;
    return Show;
}());

var Hide = (function () {
    function Hide() {
        this.type = HIDE;
    }
    return Hide;
}());

//# sourceMappingURL=_toast.actions.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Root; });
/* unused harmony export Push */
/* unused harmony export Pop */
var ROOT = '[_Route] Root';
var PUSH = '[_Route] Push';
var POP = '[_Route] Pop';
var Root = (function () {
    function Root(payload) {
        this.payload = payload;
        this.type = ROOT;
    }
    ;
    return Root;
}());

var Push = (function () {
    function Push(payload) {
        this.payload = payload;
        this.type = PUSH;
    }
    ;
    return Push;
}());

var Pop = (function () {
    function Pop() {
        this.type = POP;
    }
    return Pop;
}());

//# sourceMappingURL=_route.actions.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Route; });
var _Route = (function () {
    function _Route(name, params) {
        if (name === void 0) { name = 'welcome'; }
        if (params === void 0) { params = {}; }
        this.name = name;
        this.params = params;
    }
    return _Route;
}());

//# sourceMappingURL=_route.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _ModalType; });
var _Modal = (function () {
    function _Modal(isShown, mode, meta) {
        this.isShown = isShown;
        this.mode = mode;
        this.meta = meta;
    }
    return _Modal;
}());

var _ModalType;
(function (_ModalType) {
    _ModalType["PENDING"] = "[ModalType] Pending";
    _ModalType["OFFER"] = "[ModalType] Offer";
    _ModalType["TRANSACTION"] = "[ModalType] Transaction";
})(_ModalType || (_ModalType = {}));
//# sourceMappingURL=_modal.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SUBMIT_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SUBMIT_FORM_SUCC; });
/* unused harmony export SUBMIT_FORM_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SubmitForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SubmitFormSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SubmitFormFail; });
var UPDATE_FORM = "[LoginForm] Update Form";
var SUBMIT_FORM = "[LoginForm] Submit Form";
var SUBMIT_FORM_SUCC = "[LoginForm] Submit Form Succ";
var SUBMIT_FORM_FAIL = "[LoginForm] Submit Form Fail";
var UpdateForm = (function () {
    function UpdateForm(payload) {
        this.payload = payload;
        this.type = UPDATE_FORM;
    }
    return UpdateForm;
}());

var SubmitForm = (function () {
    function SubmitForm(payload) {
        this.payload = payload;
        this.type = SUBMIT_FORM;
    }
    return SubmitForm;
}());

var SubmitFormSucc = (function () {
    function SubmitFormSucc() {
        this.type = SUBMIT_FORM_SUCC;
    }
    return SubmitFormSucc;
}());

var SubmitFormFail = (function () {
    function SubmitFormFail() {
        this.type = SUBMIT_FORM_FAIL;
    }
    return SubmitFormFail;
}());

//# sourceMappingURL=login-form.actions.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PendingProvider = (function () {
    function PendingProvider(rest) {
        this.rest = rest;
    }
    PendingProvider.prototype.getPendings = function () {
        return this.rest
            .postPendings()
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); });
    };
    PendingProvider.prototype.createPendings = function (number) {
        return this.rest.createPending({
            transactions: Array(number).fill(null).map(function () { return Object.assign({
                offerId: Math.floor(Math.random() * 5) + 13,
                count: 1
            }); }),
            receiveTimestamp: "2019-04-08T18:30:00"
        });
    };
    PendingProvider.prototype.completePendings = function (ids) {
        return this.rest
            .updatePendings(ids, 'COMPLETED')
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); });
    };
    PendingProvider.prototype.cancelPendings = function (ids) {
        return this.rest
            .updatePendings(ids, 'CANCELED')
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); });
    };
    PendingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_rest__["a" /* Rest */]])
    ], PendingProvider);
    return PendingProvider;
}());

//# sourceMappingURL=pending-provider.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_TAKINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_TAKINGS_SUCC; });
/* unused harmony export FETCH_TAKINGS_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FetchTakings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FetchTakingsSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FetchTakingsFail; });
var FETCH_TAKINGS = "[Takings] Fetch Takings";
var FETCH_TAKINGS_SUCC = "[Takings] Fetch Takings Succ";
var FETCH_TAKINGS_FAIL = "[Takings] Fetch Takings Fail";
var FetchTakings = (function () {
    function FetchTakings() {
        this.type = FETCH_TAKINGS;
    }
    return FetchTakings;
}());

var FetchTakingsSucc = (function () {
    function FetchTakingsSucc(payload) {
        this.payload = payload;
        this.type = FETCH_TAKINGS_SUCC;
    }
    return FetchTakingsSucc;
}());

var FetchTakingsFail = (function () {
    function FetchTakingsFail() {
        this.type = FETCH_TAKINGS_FAIL;
    }
    return FetchTakingsFail;
}());

//# sourceMappingURL=takings.actions.js.map

/***/ }),

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		817,
		4
	],
	"../pages/content/content.module": [
		818,
		3
	],
	"../pages/dashboard/dashboard.module": [
		819,
		1
	],
	"../pages/menu/menu.module": [
		820,
		2
	],
	"../pages/welcome/welcome.module": [
		821,
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
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = {
    rest: {
        rootUrl: 'http://yummy-backend.herokuapp.com/yummy/api'
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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



var OfferProvider = (function () {
    function OfferProvider(rest) {
        this.rest = rest;
        this.offers$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    OfferProvider.prototype.computeOffer = function (prevOffer, currOffer) {
        console.log(prevOffer, currOffer);
        var diff = this.getDiff(prevOffer, currOffer);
        console.log(diff);
        return currOffer;
    };
    OfferProvider.prototype.getDiff = function (o1, o2) {
        return Object.keys(o2).reduce(function (diff, key) {
            if (o1[key] === o2[key])
                return diff;
            return __assign({}, diff, (_a = {}, _a[key] = o2[key], _a));
            var _a;
        }, {});
    };
    OfferProvider.prototype.getOffers = function () {
        return this.rest
            .getOffers()
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); });
    };
    OfferProvider.prototype.deleteOffer = function (offer) {
        return this.rest
            .deleteOffer(offer.id)
            .map(function () { return offer; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); });
    };
    OfferProvider.prototype.updateOffer = function (offer) {
        return this.rest
            .putOffer(offer)
            .map(function () { return offer; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); });
    };
    OfferProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_rest__["a" /* Rest */]])
    ], OfferProvider);
    return OfferProvider;
}());

//# sourceMappingURL=offer-provider.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Initializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(286);


var Initializer = (function () {
    function Initializer() {
        this.rootPage$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](null);
        this.device$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](null);
    }
    Initializer.prototype.getRootPage = function () {
        return this.rootPage$.getValue();
    };
    Initializer.prototype.getDevice = function () {
        return this.device$.getValue();
    };
    Initializer.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve) {
            //console.log((window.cordova) ? "mobile/tab" : "browser");
            _this.setRootPage().then(function () { return resolve(); }, function () { return resolve(); });
        });
    };
    Initializer.prototype.setRootPage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkAuth().then(function () {
                _this.rootPage$.next("dashboard");
                resolve();
            }, function () {
                _this.rootPage$.next("welcome");
                resolve();
            });
        });
    };
    Initializer.prototype.checkAuth = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!sessionStorage.__th || !sessionStorage.__mail)
                reject();
            var headers = new Headers();
            headers.set("Authorization", sessionStorage.__th);
            headers.set("Email", sessionStorage.__mail);
            _this.fetchWrapper(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppConfig */].rest.rootUrl + "/balance", {
                headers: headers
            }, 5000).then(function (res) { return (res.status === 403 ? reject() : resolve()); }, function (err) { return reject(); });
        });
    };
    Initializer.prototype.fetchWrapper = function (url, options, timeout) {
        return new Promise(function (resolve, reject) {
            fetch(url, options).then(resolve).catch(reject);
            if (timeout) {
                var e = new Error("Connection timed out");
                setTimeout(reject, timeout, e);
            }
        });
    };
    return Initializer;
}());

//# sourceMappingURL=initializer.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_actions_offer_form_actions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_actions_modal_actions__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_actions_offer_actions__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_models_offer__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OfferModalComponent = (function () {
    function OfferModalComponent(navParams, store, formBuilder) {
        this.navParams = navParams;
        this.store = store;
        this.formBuilder = formBuilder;
        this.initForm();
    }
    OfferModalComponent.prototype.ngOnInit = function () {
        if (this.navParams.get("id")) {
            this.connectOffer(this.navParams.get("id"));
        }
    };
    OfferModalComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var getBase64 = function (file) {
            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () { return resolve(reader.result); };
                reader.onerror = function (error) { return reject(error); };
            });
        };
        getBase64(file).then(function (base64) {
            _this.image.nativeElement.src = base64;
        });
    };
    OfferModalComponent.prototype.initForm = function () {
        var tempForm = new __WEBPACK_IMPORTED_MODULE_6__core_models_offer__["a" /* Offer */]();
        Object.keys(tempForm).map(function (key, index) {
            tempForm[key] = ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required];
        });
        this.form = this.formBuilder.group(tempForm);
    };
    OfferModalComponent.prototype.initMeta = function (offer) {
        this.meta = offer;
    };
    OfferModalComponent.prototype.connectOffer = function (id) {
        var _this = this;
        this.store
            .select(function (state) { return state.offer.data; })
            .map(function (offers) {
            return offers.find(function (singleOffer) { return singleOffer.id === id; }) || new __WEBPACK_IMPORTED_MODULE_6__core_models_offer__["a" /* Offer */]();
        })
            .take(1)
            .subscribe(function (offer) {
            _this.initMeta(offer);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__core_actions_offer_form_actions__["g" /* UpdateForm */]([offer, offer]));
            _this.form$ = _this.store.select(function (state) { return state.offerForm.data; });
            _this.connectForm();
        });
    };
    OfferModalComponent.prototype.connectForm = function () {
        var _this = this;
        this.form$.subscribe(function (offerForm) {
            var tempForm = new __WEBPACK_IMPORTED_MODULE_6__core_models_offer__["a" /* Offer */]();
            Object.keys(offerForm).map(function (key, index) {
                tempForm[key] = [offerForm[key] || "", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required];
            });
            _this.form = _this.formBuilder.group(tempForm);
            _this.observeChanges();
        });
    };
    OfferModalComponent.prototype.observeChanges = function () {
        var _this = this;
        var prevState = this.form.value;
        this.form.valueChanges.subscribe(function (currState) {
            _this.dispatchChanges([prevState, currState]);
            prevState = currState;
        });
    };
    OfferModalComponent.prototype.dispatchChanges = function (state) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__core_actions_offer_form_actions__["g" /* UpdateForm */](state));
    };
    OfferModalComponent.prototype.submit = function () {
        this.close();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__core_actions_offer_form_actions__["c" /* SubmitForm */]({
            data: this.form.value
        }));
    };
    OfferModalComponent.prototype.delete = function () {
        this.close();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__core_actions_offer_actions__["b" /* DeleteOffer */](this.form.value));
    };
    OfferModalComponent.prototype.close = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__core_actions_modal_actions__["b" /* Hide */]());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('image'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], OfferModalComponent.prototype, "image", void 0);
    OfferModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "offer-modal",template:/*ion-inline-start:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/offer-modal/offer-modal.html"*/'<button\n  (click)="close()"\n  ion-button\n  icon-only\n  outline\n  class="offer__close-button">\n  <ion-icon name="close"></ion-icon>\n</button>\n<input #fileInput style="display: none" type="file" (change)="onImageChange($event)" />\n<form\n  class=\'offer__form\'\n  [formGroup]="form"\n  (ngSubmit)="submit()">\n  <div\n    class="offer__thumbnail">\n    <img (click)="fileInput.click()" [src]="(form$ | async)?.image" #image />\n  </div>\n  <div\n    class="offer__meta">\n    <span class="meta__name medium bold">\n      {{ meta?.name || \'Nazwa produktu\' }}\n    </span>\n    <br>\n    <span class="meta__id small">\n      {{ meta?.id || \'ID produktu\' }}\n    </span>\n    <br>\n  </div>\n  <div></div>\n  <ion-item\n    class="offer__field">\n    <ion-input\n      class="offer__input small"\n      formControlName="name"\n      placeholder="Nazwa produktu"\n      type="text"\n      clearInput>\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class="offer__field offer__desc">\n    <ion-label stacked>opis</ion-label>\n    <ion-textarea\n      class="offer__input small"\n      formControlName="description"\n      placeholder="Opis"\n      type="text"\n      clearInput>\n    </ion-textarea>\n  </ion-item>\n  <div\n    class="offer__label small">\n    cena wstępna\n  </div>\n  <ion-item\n    class="offer__field">\n    <ion-input\n      class="offer__input small"\n      formControlName="price"\n      placeholder="Cena wstępna"\n      type="text"\n      clearInput>\n    </ion-input>\n  </ion-item>\n  <div\n    class="offer__label small">\n    promocja\n  </div>\n  <ion-item\n    class="offer__field">\n    <ion-input\n      class="offer__input small"\n      formControlName="discount"\n      placeholder="Znizka"\n      type="text"\n      clearInput>\n    </ion-input>\n  </ion-item>\n  <div\n    class="offer__label small">\n    cena finalna\n  </div>\n  <ion-item\n    class="offer__field">\n    <ion-input\n      class="offer__input small"\n      formControlName="calculatedPrice"\n      placeholder="Nazwa produktu"\n      type="text"\n      clearInput>\n    </ion-input>\n  </ion-item>\n  <div\n    class="offer__label small">\n    ilość\n  </div>\n  <ion-item\n    class="offer__field">\n    <ion-input\n      class="offer__input small"\n      formControlName="count"\n      placeholder="Ilość produktów"\n      type="text"\n      clearInput>\n    </ion-input>\n  </ion-item>\n  <div></div>\n  <div\n    class="offer__buttons-bar">\n    <div\n      class="offer__button">\n      <span class="button__label">zapisz</span>\n      <button\n        type="submit"\n        class="button__element add"\n        ion-button\n        outline>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </div>\n    <div\n      (click)="delete()"\n      class="offer__button">\n      <span class="button__label">usuń</span>\n      <button\n        disabled="true"\n        class="button__element close"\n        ion-button\n        outline>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </div>\n  </div>\n</form>'/*ion-inline-end:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/offer-modal/offer-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], OfferModalComponent);
    return OfferModalComponent;
}());

//# sourceMappingURL=offer-modal.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_actions_pending_actions__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_actions_modal_actions__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingModalComponent = (function () {
    function PendingModalComponent(navParams, store) {
        this.navParams = navParams;
        this.store = store;
    }
    PendingModalComponent.prototype.ngOnInit = function () {
        if (this.navParams.get('id'))
            this.connectPending(this.navParams.get('id'));
    };
    PendingModalComponent.prototype.connectPending = function (id) {
        this.pending$ = this.store.select(function (state) { return state.pending.data; })
            .map(function (pendings) { return pendings.find(function (singlePending) { return singlePending.id === id; }); });
    };
    PendingModalComponent.prototype.complete = function () {
        var _this = this;
        this.pending$
            .take(1)
            .subscribe(function (pending) {
            _this.close();
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__core_actions_pending_actions__["f" /* CompletePendings */]([pending.id]));
        });
    };
    PendingModalComponent.prototype.cancel = function () {
        var _this = this;
        this.pending$
            .take(1)
            .subscribe(function (pending) {
            _this.close();
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__core_actions_pending_actions__["c" /* CancelPendings */]([pending.id]));
        });
    };
    PendingModalComponent.prototype.close = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__core_actions_modal_actions__["b" /* Hide */]);
    };
    PendingModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pending-modal',template:/*ion-inline-start:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/pending-modal/pending-modal.html"*/'<button\n  (click)="close()"\n  ion-button\n  icon-only\n  outline\n  class="pending__close-button">\n  <ion-icon name="close"></ion-icon>\n</button>\n\n<div\n  class="pending__order">\n  <span\n    class="order__label">\n    Numer zamówienia: {{ (pending$ | async)?.id }}\n  </span>\n  <div\n    class="order__date">\n    <span\n      class="date__start">\n      <span class="date--label">czas zamówienia: </span>\n      <br>\n      godz: {{ (pending$ | async)?.orderTime | date: \'shortTime\' }}\n      <br>\n      {{ (pending$ | async)?.orderTime | date: \'shortDate\' }}\n    </span>\n    <span\n      class="date__end">\n      <span class="date--label">czas odbioru: </span>\n      <br>\n      godz: {{ (pending$ | async)?.receiveTime | date: \'shortTime\' }}\n      <br>\n      {{ (pending$ | async)?.receiveTime | date: \'shortDate\' }}\n    </span>\n  </div>\n</div>\n<div\n  class="pending__products">\n  <pending-modal-product\n    *ngFor="let product of (pending$ | async)?.orderItemList"\n    [product]="product">\n  </pending-modal-product>\n</div>\n\n<div\n  class="pending__summary">\n  <div></div>\n  <div\n    class="summary__count">\n    <span class="count__label">ilość</span> \n    <span class="count__value">x</span>\n  </div>\n  <div></div>\n  <div></div>\n  <div\n    class="summary__value">\n    <span class="value__label">suma</span> \n    <span class="value__value">pln</span>\n  </div>\n  <div></div>\n  <div></div>\n  <div \n    class="summary__delivery">\n    odbiór:\n  </div>\n  <div\n    class="summary__button">\n    <span class="button__label">odebrane</span>\n    <button\n      (click)="complete()"\n      class="button__element"\n      ion-button\n      outline>\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </div>\n  <div\n    class="summary__button">\n    <span class="button__label">nieodebrane</span>\n    <button\n      (click)="cancel()"\n      class="button__element"\n      ion-button\n      outline>\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </div>\n  \n</div>'/*ion-inline-end:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/pending-modal/pending-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], PendingModalComponent);
    return PendingModalComponent;
}());

//# sourceMappingURL=pending-modal.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionModalComponent = (function () {
    function TransactionModalComponent(navParams, store) {
        this.navParams = navParams;
        this.store = store;
    }
    TransactionModalComponent.prototype.ngOnInit = function () {
        console.log(this.navParams.data);
    };
    TransactionModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'transaction-modal',template:/*ion-inline-start:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/transaction-modal/transaction-modal.html"*/'<!-- Generated template for the TransactionModalComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/transaction-modal/transaction-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], TransactionModalComponent);
    return TransactionModalComponent;
}());

//# sourceMappingURL=transaction-modal.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginForm; });
var LoginForm = (function () {
    function LoginForm(login, password) {
        if (login === void 0) { login = ''; }
        if (password === void 0) { password = ''; }
        this.login = login;
        this.password = password;
    }
    return LoginForm;
}());

//# sourceMappingURL=login-form.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateUser; });
var UPDATE_USER = "[User] Update User";
var UpdateUser = (function () {
    function UpdateUser(payload) {
        this.payload = payload;
        this.type = UPDATE_USER;
    }
    return UpdateUser;
}());

//# sourceMappingURL=user.actions.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ORDER_SUMMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetOrderSummary; });
var GET_ORDER_SUMMARY = '[Order Summary] Get Order Summary';
var GetOrderSummary = (function () {
    function GetOrderSummary(payload) {
        this.payload = payload;
        this.type = GET_ORDER_SUMMARY;
    }
    return GetOrderSummary;
}());

//# sourceMappingURL=order-summary.actions.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionsProvider = (function () {
    function TransactionsProvider(rest) {
        this.rest = rest;
    }
    TransactionsProvider.prototype.getTransactions = function () {
        return this.rest
            .getTransactions()
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); });
    };
    TransactionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_rest__["a" /* Rest */]])
    ], TransactionsProvider);
    return TransactionsProvider;
}());

//# sourceMappingURL=transaction-provider.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(444);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* unused harmony export initializer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_providers_http_interceptor_http_interceptor__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_effects_offer_effects__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_reducers_reducers__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_effects_login_form_effects__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_loader_loader__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_providers_initializer_initializer__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_effects_takings_effects__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_effects_pending_effects__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core_providers_pending_provider_pending_provider__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_pending_modal_pending_modal__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_offer_modal_offer_modal__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_transaction_modal_transaction_modal__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_pending_modal_pending_modal_product_pending_modal_product__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__core_providers_transaction_transaction_provider__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__core_effects_transaction_effects__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__core_effects_offer_form_effects__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_user_panel_user_panel__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["e" /* Settings */](storage, {});
}
function initializer(initializeProvider) {
    return function () { return initializeProvider.initialize(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* YummyPlace */],
                __WEBPACK_IMPORTED_MODULE_19__components_loader_loader__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_pending_modal_pending_modal__["a" /* PendingModalComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_offer_modal_offer_modal__["a" /* OfferModalComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_transaction_modal_transaction_modal__["a" /* TransactionModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_pending_modal_pending_modal_product_pending_modal_product__["a" /* PendingModalProductComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_user_panel_user_panel__["a" /* UserPanelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* YummyPlace */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'dashboard', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["d" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__core_reducers_reducers__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectsModule */].forRoot([
                    __WEBPACK_IMPORTED_MODULE_18__core_effects_login_form_effects__["a" /* LoginFormEffects */],
                    __WEBPACK_IMPORTED_MODULE_16__core_effects_offer_effects__["a" /* OfferEffects */],
                    __WEBPACK_IMPORTED_MODULE_21__core_effects_takings_effects__["a" /* TakingsEffects */],
                    __WEBPACK_IMPORTED_MODULE_22__core_effects_pending_effects__["a" /* PendingEffects */],
                    __WEBPACK_IMPORTED_MODULE_29__core_effects_transaction_effects__["a" /* TransactionEffects */],
                    __WEBPACK_IMPORTED_MODULE_30__core_effects_offer_form_effects__["a" /* OfferFormEffects */]
                ]),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* YummyPlace */],
                __WEBPACK_IMPORTED_MODULE_24__components_pending_modal_pending_modal__["a" /* PendingModalComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_offer_modal_offer_modal__["a" /* OfferModalComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_transaction_modal_transaction_modal__["a" /* TransactionModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_pending_modal_pending_modal_product_pending_modal_product__["a" /* PendingModalProductComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_user_panel_user_panel__["a" /* UserPanelComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["d" /* Rest */],
                __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["g" /* User */],
                __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["c" /* OfferProvider */],
                __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["b" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_23__core_providers_pending_provider_pending_provider__["a" /* PendingProvider */],
                __WEBPACK_IMPORTED_MODULE_28__core_providers_transaction_transaction_provider__["a" /* TransactionsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["f" /* StompProvider */],
                __WEBPACK_IMPORTED_MODULE_20__core_providers_initializer_initializer__["a" /* Initializer */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__core_providers_providers__["e" /* Settings */],
                    useFactory: provideSettings,
                    deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicErrorHandler */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__core_providers_http_interceptor_http_interceptor__["a" /* HttpInterceptorProvider */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* APP_INITIALIZER */],
                    useFactory: initializer,
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_20__core_providers_initializer_initializer__["a" /* Initializer */]
                    ],
                    multi: true
                }
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(286);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var Rest = (function (_super) {
    __extends(Rest, _super);
    function Rest(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.config = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].rest;
        return _this;
    }
    Rest.prototype.parseUrl = function (endpoint) {
        var root = this.config.rootUrl;
        return root + "/" + endpoint;
    };
    Rest.prototype.loginUser = function (body) {
        return this.post(this.parseUrl("login"), body);
    };
    Rest.prototype.getTakings = function () {
        return this.get(this.parseUrl("balance"));
    };
    Rest.prototype.createPending = function (body) {
        return this.post(this.parseUrl('transaction'), body);
    };
    Rest.prototype.postPendings = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 8; }
        return this.post(this.parseUrl("orders/current"), {
            page: page,
            size: size
        });
    };
    Rest.prototype.updatePendings = function (ids, state) {
        return this.post(this.parseUrl("orders/state"), {
            idList: ids,
            state: state
        });
    };
    Rest.prototype.getOffers = function () {
        return this.get(this.parseUrl("offers"));
    };
    Rest.prototype.getSingleOffer = function (id) {
        return this.get(this.parseUrl("offer"), {
            id: id
        });
    };
    Rest.prototype.postOffer = function (body) {
        return this.post(this.parseUrl("offer"), body);
    };
    Rest.prototype.deleteOffer = function (id) {
        return this.get(this.parseUrl("offer/delete?id=" + id));
    };
    Rest.prototype.putOffer = function (body) {
        return this.post(this.parseUrl("offer?id=" + body.id), body);
    };
    Rest.prototype.getTransactions = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 8; }
        return this.get(this.parseUrl("orders"), {
            page: page,
            size: size
        });
    };
    Rest = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], Rest);
    return Rest;
}(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]));

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offer_provider_offer_provider__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_provider_login_provider__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stomp_stomp_provider__ = __webpack_require__(752);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__rest_rest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__offer_provider_offer_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__login_provider_login_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__stomp_stomp_provider__["a"]; });








//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YummyPlace; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_providers_providers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromPromise__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_providers_initializer_initializer__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_models_modal__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_offer_modal_offer_modal__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pending_modal_pending_modal__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_transaction_modal_transaction_modal__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var YummyPlace = (function () {
    function YummyPlace(translate, platform, settings, config, statusBar, splashScreen, store, toastCtrl, loaderCtrl, initializer, modalCtrl) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.settings = settings;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.store = store;
        this.toastCtrl = toastCtrl;
        this.loaderCtrl = loaderCtrl;
        this.initializer = initializer;
        this.modalCtrl = modalCtrl;
        this.meta = "Delluptat ligenimus es velendis magnisqui odis eostion secatusa nis ad etures ate ni untis exerio in corest, aut aceped qui qui cus, sum es apellab orehenimpor ad mo ium quam, omni nus velique rem. Ut molutectus. Gitiis que voluptatur? Anis nobistrunt essi- tate nobisim quam, sunt fugiatiur as dolo- resciis am vellaborae o cie ndissim iliquisi reium aute optatiu ribuscitates sa vendend";
        this.rootPage = this.initializer.getRootPage();
        this.toast = null;
        this.loader = null;
        this.modal = null;
        platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.settings.load();
            _this.subscribeLoader();
            _this.subscribeRoute();
            _this.subscribeToaster();
            _this.subscribeModal();
        });
        this.initTranslate();
    }
    YummyPlace.prototype.initTranslate = function () {
        var _this = this;
        this.translate.setDefaultLang("pl");
        this.translate.use("pl");
        this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function (values) {
            _this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
        });
    };
    YummyPlace.prototype.subscribeRoute = function () {
        var _this = this;
        this.store
            .select(function (state) { return state._route.data; })
            .pairwise()
            .mergeMap(function (_a) {
            var prevRoutes = _a[0], currRoutes = _a[1];
            return currRoutes.length === 1
                ? _this.setRoot(currRoutes[currRoutes.length - 1])
                : currRoutes.length > prevRoutes.length
                    ? _this.pushPage(currRoutes[currRoutes.length - 1])
                    : _this.popPage();
        })
            .subscribe();
    };
    YummyPlace.prototype.subscribeLoader = function () {
        var _this = this;
        this.store
            .select(function (state) { return state._loader.data; })
            .pairwise()
            .mergeMap(function (_a) {
            var prevLoader = _a[0], currLoader = _a[1];
            return _this.handleUIDisplay(prevLoader, currLoader, function () { return _this.showLoader(currLoader); }, function () { return _this.hideLoader(); });
        })
            .subscribe();
    };
    YummyPlace.prototype.subscribeToaster = function () {
        var _this = this;
        this.store
            .select(function (state) { return state._toast.data; })
            .pairwise()
            .mergeMap(function (_a) {
            var prevToast = _a[0], currToast = _a[1];
            return _this.handleUIDisplay(prevToast, currToast, function () { return _this.showToast(currToast); }, function () { return _this.hideToast(); });
        })
            .subscribe();
    };
    YummyPlace.prototype.subscribeModal = function () {
        var _this = this;
        this.store
            .select(function (state) { return state._modal.data; })
            .pairwise()
            .mergeMap(function (_a) {
            var prevModal = _a[0], currModal = _a[1];
            return _this.handleUIDisplay(prevModal, currModal, function () { return _this.showModal(currModal); }, function () { return _this.hideModal(); });
        })
            .subscribe();
    };
    YummyPlace.prototype.handleUIDisplay = function (prevState, currState, shownFn, hideFn) {
        var obs;
        if (!prevState.isShown && !currState.isShown) {
            obs = __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].of(null);
        }
        else if (prevState.isShown && !currState.isShown) {
            obs = Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromPromise__["fromPromise"])(hideFn());
        }
        else if (!prevState.isShown && currState.isShown) {
            obs = Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromPromise__["fromPromise"])(shownFn());
        }
        else {
            obs = Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromPromise__["fromPromise"])(hideFn()).switchMap(function () { return Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromPromise__["fromPromise"])(shownFn()); });
        }
        return obs;
    };
    YummyPlace.prototype.setRoot = function (route) {
        return this.nav.setRoot(route.name, route.params);
    };
    YummyPlace.prototype.pushPage = function (route) {
        return this.nav.push(route.name, route.params);
    };
    YummyPlace.prototype.popPage = function () {
        return this.nav.pop();
    };
    YummyPlace.prototype.showToast = function (toast) {
        this.toast = this.toastCtrl.create({
            message: toast.label,
            position: "bottom",
            duration: 4000
        });
        return this.toast.present();
    };
    YummyPlace.prototype.hideToast = function () {
        return this.toast.dismiss();
    };
    YummyPlace.prototype.showLoader = function (loader) {
        this.loader = this.loaderCtrl.create({
            content: loader.label
        });
        return this.loader.present();
    };
    YummyPlace.prototype.hideLoader = function () {
        return this.loader.dismiss();
    };
    YummyPlace.prototype.selectModalMode = function (modalMode) {
        switch (modalMode) {
            case __WEBPACK_IMPORTED_MODULE_10__core_models_modal__["b" /* _ModalType */].OFFER:
            default:
                return __WEBPACK_IMPORTED_MODULE_11__components_offer_modal_offer_modal__["a" /* OfferModalComponent */];
            case __WEBPACK_IMPORTED_MODULE_10__core_models_modal__["b" /* _ModalType */].PENDING:
                return __WEBPACK_IMPORTED_MODULE_12__components_pending_modal_pending_modal__["a" /* PendingModalComponent */];
            case __WEBPACK_IMPORTED_MODULE_10__core_models_modal__["b" /* _ModalType */].TRANSACTION:
                return __WEBPACK_IMPORTED_MODULE_13__components_transaction_modal_transaction_modal__["a" /* TransactionModalComponent */];
        }
    };
    YummyPlace.prototype.showModal = function (modal) {
        this.modal = this.modalCtrl.create(this.selectModalMode(modal.mode), modal.meta);
        return this.modal.present();
    };
    YummyPlace.prototype.hideModal = function () {
        return this.modal.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */])
    ], YummyPlace.prototype, "nav", void 0);
    YummyPlace = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <ion-menu [content]=\"content\">\n      <div class=\"placeholder\"></div>\n      <user-panel></user-panel>\n      <div class=\"meta small\">{{meta}}</div>\n    </ion-menu>\n    <ion-nav #content [root]=\"rootPage\">\n    </ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__core_providers_providers__["e" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__core_providers_initializer_initializer__["a" /* Initializer */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */]])
    ], YummyPlace);
    return YummyPlace;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(161);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginProvider = (function () {
    function LoginProvider(rest, settings) {
        this.rest = rest;
        this.settings = settings;
    }
    LoginProvider.prototype.loginUser = function (loginForm) {
        var _this = this;
        return this.rest.loginUser(this.parseForm(loginForm))
            .mergeMap(function (data) { return _this.saveAuth(data); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(err); });
    };
    LoginProvider.prototype.saveAuth = function (_a) {
        var Authorization = _a.Authorization;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(null)
            .do(function () { return sessionStorage.__th = Authorization; });
    };
    LoginProvider.prototype.parseForm = function (loginForm) {
        return Object.assign({}, {
            email: loginForm.login,
            password: loginForm.password
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_rest__["a" /* Rest */],
            __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* Settings */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login-provider.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StompProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stomp_stompjs__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stomp_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stomp_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sockjs_client__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sockjs_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StompProvider = (function () {
    function StompProvider() {
    }
    StompProvider.prototype.socketProvider = function () {
        return new __WEBPACK_IMPORTED_MODULE_3_sockjs_client__("http://yummy-backend.herokuapp.com/yummy/api/restaurant-panel");
    };
    StompProvider.prototype.connectSockets = function (endpoint) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var socket = _this.socketProvider();
            var stompClient = __WEBPACK_IMPORTED_MODULE_2__stomp_stompjs__["over"](socket);
            stompClient.connect({
                "Authorization": sessionStorage.__th,
                "Email": sessionStorage.__mail
            }, function (frame) {
                console.log("Connected: " + frame);
                stompClient.subscribe("/topic/restaurant/" + sessionStorage.__mail, function (greeting) {
                    observer.next(greeting);
                });
            });
        });
    };
    StompProvider.prototype.getHeadersValues = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].combineLatest(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(sessionStorage.__th), __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(sessionStorage.__mail));
    };
    StompProvider.prototype.getHeaders = function (authToken, login) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__stomp_stompjs__["StompHeaders"]();
        headers.authToken = authToken;
        headers.login = login;
        return headers;
    };
    StompProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StompProvider);
    return StompProvider;
}());

//# sourceMappingURL=stomp-provider.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_toast_actions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_route_actions__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_route__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpInterceptorProvider = (function () {
    function HttpInterceptorProvider(settings, store) {
        this.settings = settings;
        this.store = store;
    }
    HttpInterceptorProvider.prototype.intercept = function (req, next) {
        return this.appendAuth(req, next);
    };
    HttpInterceptorProvider.prototype.appendAuth = function (req, next) {
        var _this = this;
        return this.getHeadersValues().mergeMap(function (_a) {
            var authToken = _a[0], login = _a[1];
            return next
                .handle(req.clone(authToken && login && !req.url.includes("login")
                ? {
                    setHeaders: {
                        Authorization: authToken,
                        Email: login
                    }
                }
                : {}))
                .do(function () { }, function (err) {
                if (_this.checkIfAuthError(err))
                    _this.handleAuthError();
            });
        });
    };
    HttpInterceptorProvider.prototype.checkIfAuthError = function (err) {
        if (!err.url) {
            return false;
        }
        else if ((err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) && !err.url.includes('login')) {
            return err.status === 401 || err.status === 403;
        }
        else {
            return false;
        }
    };
    HttpInterceptorProvider.prototype.handleAuthError = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_toast_actions__["c" /* Show */]('Błąd autoryzacji, przekierowanie do strony logowania...'));
        setTimeout(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_route_actions__["d" /* Root */](new __WEBPACK_IMPORTED_MODULE_7__models_route__["a" /* _Route */]('welcome')));
        }, 4000);
    };
    HttpInterceptorProvider.prototype.getHeadersValues = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(sessionStorage.__th), __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(sessionStorage.__mail));
    };
    HttpInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["e" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]])
    ], HttpInterceptorProvider);
    return HttpInterceptorProvider;
}());

//# sourceMappingURL=http-interceptor.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_loader_actions__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_offer_provider_offer_provider__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OfferEffects = (function () {
    function OfferEffects(actions$, store, offerProvider, stompProvider) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.offerProvider = offerProvider;
        this.stompProvider = stompProvider;
        // @Effect()
        // public getOffers$ = this.actions$
        //   .ofType(fromActions.FETCH_OFFERS)
        //   .switchMap(() => this.offerProvider.getOffers())
        //   .map((res: any | HttpErrorResponse) => {
        //     return (!(res instanceof HttpErrorResponse) && res.offers)
        //       ? new fromActions.FetchOffersSucc(res.offers)
        //       : new fromActions.FetchOffersFail;
        //   });
        this.deleteOffer$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["a" /* DELETE_OFFER */])
            .pluck("payload")
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_loader_actions__["d" /* Show */]("Usuwanie oferty...")); })
            .switchMap(function (payload) { return _this.offerProvider.deleteOffer(payload); })
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_loader_actions__["b" /* Hide */]); })
            .map(function (res) {
            return (!(res instanceof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpErrorResponse */]))
                ? new __WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["d" /* DeleteOfferSucc */](res)
                : new __WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["c" /* DeleteOfferFail */];
        });
        this.updateOffer$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["k" /* UPDATE_OFFER */])
            .pluck("payload")
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_loader_actions__["d" /* Show */]("Aktualizacja oferty...")); })
            .switchMap(function (payload) { return _this.offerProvider.updateOffer(payload); })
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_loader_actions__["b" /* Hide */]); })
            .map(function (res) {
            return (!(res instanceof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpErrorResponse */]))
                ? new __WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["n" /* UpdateOfferSucc */](res)
                : new __WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["m" /* UpdateOfferFail */];
        });
        this.socketOffers$ = this.stompProvider
            .connectSockets('/topic/orders/current')
            .map(function (res) {
            return (!(res instanceof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpErrorResponse */]) && res.offers)
                ? new __WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["j" /* FetchOffersSucc */](res.offers)
                : new __WEBPACK_IMPORTED_MODULE_2__actions_offer_actions__["i" /* FetchOffersFail */];
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], OfferEffects.prototype, "deleteOffer$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], OfferEffects.prototype, "updateOffer$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], OfferEffects.prototype, "socketOffers$", void 0);
    OfferEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__providers_offer_provider_offer_provider__["a" /* OfferProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_providers__["f" /* StompProvider */]])
    ], OfferEffects);
    return OfferEffects;
}());

//# sourceMappingURL=offer.effects.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_form_login_form_reducer__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__offer_offer_reducer__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_reducer__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_route_reducer__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_reducer__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_reducer__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pending_pending_reducer__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transaction_transaction_reducer__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__takings_takings_reducer__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_summary_order_summary_reducer__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_modal_reducer__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__offer_form_offer_form_reducer__ = __webpack_require__(807);












var reducers = {
    _route: __WEBPACK_IMPORTED_MODULE_3__route_route_reducer__["a" /* _routeReducer */],
    _toast: __WEBPACK_IMPORTED_MODULE_4__toast_toast_reducer__["a" /* _toastReducer */],
    _loader: __WEBPACK_IMPORTED_MODULE_5__loader_loader_reducer__["a" /* _loaderReducer */],
    _modal: __WEBPACK_IMPORTED_MODULE_10__modal_modal_reducer__["a" /* _modalReducer */],
    loginForm: __WEBPACK_IMPORTED_MODULE_0__login_form_login_form_reducer__["a" /* loginFormReducer */],
    offerForm: __WEBPACK_IMPORTED_MODULE_11__offer_form_offer_form_reducer__["a" /* offerFormReducer */],
    user: __WEBPACK_IMPORTED_MODULE_2__user_user_reducer__["a" /* userReducer */],
    offer: __WEBPACK_IMPORTED_MODULE_1__offer_offer_reducer__["a" /* offerReducer */],
    pending: __WEBPACK_IMPORTED_MODULE_6__pending_pending_reducer__["a" /* pendingReducer */],
    transaction: __WEBPACK_IMPORTED_MODULE_7__transaction_transaction_reducer__["a" /* transactionReducer */],
    takings: __WEBPACK_IMPORTED_MODULE_8__takings_takings_reducer__["a" /* takingsReducer */],
    orderSummary: __WEBPACK_IMPORTED_MODULE_9__order_summary_order_summary_reducer__["a" /* orderSummaryReducer */]
};
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_login_form__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_login_form_actions__ = __webpack_require__(198);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: new __WEBPACK_IMPORTED_MODULE_0__models_login_form__["a" /* LoginForm */]()
};
var loginFormReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_login_form_actions__["f" /* UPDATE_FORM */]:
            return __assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_1__actions_login_form_actions__["b" /* SUBMIT_FORM_SUCC */]:
            return initialState;
        default:
            return state;
    }
};
//# sourceMappingURL=login-form.reducer.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return offerReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_offer__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_offer_actions__ = __webpack_require__(81);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: [],
    isFetching: false
};
var offerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_offer_actions__["k" /* UPDATE_OFFER */]:
            return __assign({}, state, { data: state.data.map(function (offer) {
                    return offer.id !== action.payload.id
                        ? offer
                        : new __WEBPACK_IMPORTED_MODULE_0__models_offer__["a" /* Offer */](action.payload);
                }) });
        case __WEBPACK_IMPORTED_MODULE_1__actions_offer_actions__["e" /* FETCH_OFFERS */]:
            return __assign({}, state, { isFetching: true });
        case __WEBPACK_IMPORTED_MODULE_1__actions_offer_actions__["g" /* FETCH_OFFERS_SUCC */]:
            return __assign({}, state, { data: action.payload.map(function (offer) { return new __WEBPACK_IMPORTED_MODULE_0__models_offer__["a" /* Offer */](offer); }), isFetching: false });
        case __WEBPACK_IMPORTED_MODULE_1__actions_offer_actions__["f" /* FETCH_OFFERS_FAIL */]:
            return __assign({}, state, { isFetching: false });
        default:
            return state;
    }
};
//# sourceMappingURL=offer.reducer.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__ = __webpack_require__(436);


var initialState = {
    data: new __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* User */]()
};
var userReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__["a" /* UPDATE_USER */]:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
//# sourceMappingURL=user.reducer.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_form__ = __webpack_require__(435);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this) || this;
    }
    return User;
}(__WEBPACK_IMPORTED_MODULE_0__login_form__["a" /* LoginForm */]));

;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _routeReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_route__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_route_actions__ = __webpack_require__(194);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: [
        new __WEBPACK_IMPORTED_MODULE_0__models_route__["a" /* _Route */]('welcome', {})
    ]
};
var _routeReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_route_actions__["c" /* ROOT */]:
            return __assign({}, state, { data: [action.payload] });
        case __WEBPACK_IMPORTED_MODULE_1__actions_route_actions__["b" /* PUSH */]:
            return __assign({}, state, { data: state.data.concat([action.payload]) });
        case __WEBPACK_IMPORTED_MODULE_1__actions_route_actions__["a" /* POP */]:
            return __assign({}, state, { data: state.data.splice(-1, 1).slice() });
        default:
            return state;
    }
};
//# sourceMappingURL=_route.reducer.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toastReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_toast__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_toast_actions__ = __webpack_require__(193);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: new __WEBPACK_IMPORTED_MODULE_0__models_toast__["a" /* _Toast */]()
};
var _toastReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_toast_actions__["b" /* SHOW */]:
            return __assign({}, state, { data: new __WEBPACK_IMPORTED_MODULE_0__models_toast__["a" /* _Toast */](true, action.payload) });
        case __WEBPACK_IMPORTED_MODULE_1__actions_toast_actions__["a" /* HIDE */]:
            return __assign({}, state, { data: new __WEBPACK_IMPORTED_MODULE_0__models_toast__["a" /* _Toast */]() });
        default:
            return state;
    }
};
//# sourceMappingURL=_toast.reducer.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Toast; });
var _Toast = (function () {
    function _Toast(isShown, label) {
        if (isShown === void 0) { isShown = false; }
        if (label === void 0) { label = ''; }
        this.isShown = isShown;
        this.label = label;
    }
    return _Toast;
}());

//# sourceMappingURL=_toast.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _loaderReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_loader__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_loader_actions__ = __webpack_require__(107);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: new __WEBPACK_IMPORTED_MODULE_0__models_loader__["a" /* _Loader */]()
};
var _loaderReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_loader_actions__["c" /* SHOW */]:
            return __assign({}, state, { data: new __WEBPACK_IMPORTED_MODULE_0__models_loader__["a" /* _Loader */](true, action.payload) });
        case __WEBPACK_IMPORTED_MODULE_1__actions_loader_actions__["a" /* HIDE */]:
            return __assign({}, state, { data: new __WEBPACK_IMPORTED_MODULE_0__models_loader__["a" /* _Loader */]() });
        default:
            return state;
    }
};
//# sourceMappingURL=_loader.reducer.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Loader; });
var _Loader = (function () {
    function _Loader(isShown, label) {
        if (isShown === void 0) { isShown = false; }
        if (label === void 0) { label = ''; }
        this.isShown = isShown;
        this.label = label;
    }
    return _Loader;
}());

//# sourceMappingURL=_loader.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pendingReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_pending_actions__ = __webpack_require__(109);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

//TODO remove mockup
var initialState = {
    data: [],
    isFetching: false
};
var pendingReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_pending_actions__["i" /* FETCH_PENDINGS */]:
            return __assign({}, state, { isFetching: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions_pending_actions__["k" /* FETCH_PENDINGS_SUCC */]:
            return __assign({}, state, { data: action.payload, isFetching: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_pending_actions__["j" /* FETCH_PENDINGS_FAIL */]:
            return __assign({}, state, { isFetching: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_pending_actions__["o" /* MARK_PENDING */]:
            return __assign({}, state, { data: state.data.map(function (pending) {
                    return pending.id !== action.payload.id
                        ? pending
                        : __assign({}, pending, { isMarked: !pending.isMarked });
                }) });
        default:
            return state;
    }
};
//# sourceMappingURL=pending.reducer.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transactionReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_transaction_actions__ = __webpack_require__(111);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

//TODO remove mockup
var initialState = {
    data: [],
    isFetching: false
};
var transactionReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_actions__["a" /* FETCH_TRANSACTIONS */]:
            return __assign({}, state, { isFetching: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_actions__["c" /* FETCH_TRANSACTIONS_SUCC */]:
            return __assign({}, state, { data: action.payload, isFetching: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_transaction_actions__["b" /* FETCH_TRANSACTIONS_FAIL */]:
            return __assign({}, state, { isFetching: false });
        default:
            return state;
    }
};
//# sourceMappingURL=transaction.reducer.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takingsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_takings_actions__ = __webpack_require__(200);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    data: [],
    isFetching: false
};
var takingsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_takings_actions__["b" /* FETCH_TAKINGS_SUCC */]:
            return __assign({}, state, { data: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=takings.reducer.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderSummaryReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_order_summary__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_order_summary_actions__ = __webpack_require__(437);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: new __WEBPACK_IMPORTED_MODULE_0__models_order_summary__["a" /* OrderSummary */]()
};
var orderSummaryReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_order_summary_actions__["a" /* GET_ORDER_SUMMARY */]:
            return __assign({}, state, { data: new __WEBPACK_IMPORTED_MODULE_0__models_order_summary__["a" /* OrderSummary */](action.payload) });
        default:
            return state;
    }
};
//# sourceMappingURL=order-summary.reducer.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
var OrderSummary = (function () {
    function OrderSummary(orderSummary) {
        Object.assign(this, orderSummary);
    }
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _modalReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_modal__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_modal_actions__ = __webpack_require__(108);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: new __WEBPACK_IMPORTED_MODULE_0__models_modal__["a" /* _Modal */](false)
};
var _modalReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_modal_actions__["c" /* SHOW */]:
            return __assign({}, state, { data: new __WEBPACK_IMPORTED_MODULE_0__models_modal__["a" /* _Modal */](true, action.payload.mode, action.payload.meta) });
        case __WEBPACK_IMPORTED_MODULE_1__actions_modal_actions__["a" /* HIDE */]:
            return __assign({}, state, { data: new __WEBPACK_IMPORTED_MODULE_0__models_modal__["a" /* _Modal */](false) });
        default:
            return state;
    }
};
//# sourceMappingURL=_modal.reducer.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return offerFormReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_offer_form__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_offer_form_actions__ = __webpack_require__(192);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    data: new __WEBPACK_IMPORTED_MODULE_0__models_offer_form__["a" /* OfferForm */]()
};
var offerFormReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_offer_form_actions__["f" /* UPDATE_FORM_SUCC */]:
            return __assign({}, state, { data: __assign({}, state.data, action.payload) });
        case __WEBPACK_IMPORTED_MODULE_1__actions_offer_form_actions__["b" /* SUBMIT_FORM_SUCC */]:
            return __assign({}, state, action.payload);
        default:
            return state;
    }
};
//# sourceMappingURL=offer-form.reducer.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__offer__ = __webpack_require__(110);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OfferForm = (function (_super) {
    __extends(OfferForm, _super);
    function OfferForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OfferForm;
}(__WEBPACK_IMPORTED_MODULE_0__offer__["a" /* Offer */]));

//# sourceMappingURL=offer-form.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_login_form_actions__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_toast_actions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_route_actions__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_providers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_route__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginFormEffects = (function () {
    function LoginFormEffects(actions$, loginProvider, store) {
        var _this = this;
        this.actions$ = actions$;
        this.loginProvider = loginProvider;
        this.store = store;
        this.loginUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_login_form_actions__["a" /* SUBMIT_FORM */])
            .pluck("payload")
            .do(function (payload) { return _this.handleSideBefore(); })
            .switchMap(function (payload) {
            return _this.loginProvider.loginUser(payload.data);
        })
            .do(function (res) { return _this.handleSideAfter(res); })
            .map(function (res) { return _this.handleLoginRes(res); });
    }
    LoginFormEffects.prototype.handleLoginRes = function (res) {
        return res instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */]
            ? new __WEBPACK_IMPORTED_MODULE_3__actions_login_form_actions__["d" /* SubmitFormFail */]()
            : new __WEBPACK_IMPORTED_MODULE_3__actions_login_form_actions__["e" /* SubmitFormSucc */]();
    };
    LoginFormEffects.prototype.handleSideBefore = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__["d" /* Show */]("Logowanie..."));
    };
    LoginFormEffects.prototype.handleSideAfter = function (res) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__["b" /* Hide */]());
        if (!(res instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */])) {
            this.updateUser();
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__actions_route_actions__["d" /* Root */](new __WEBPACK_IMPORTED_MODULE_10__models_route__["a" /* _Route */]("dashboard")));
        }
        else {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_toast_actions__["c" /* Show */]("Wprowadzone hasło jest nieprawidłowe. Proszę, spróbuj jeszcze raz."));
        }
    };
    LoginFormEffects.prototype.updateUser = function () {
        var _this = this;
        this.store
            .select(function (state) { return state.loginForm; })
            .take(1)
            .do(function (res) { return sessionStorage.__mail = res.data.login; })
            .subscribe(function (data) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["b" /* UpdateUser */](data));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], LoginFormEffects.prototype, "loginUser$", void 0);
    LoginFormEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_8__providers_providers__["b" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["b" /* Store */]])
    ], LoginFormEffects);
    return LoginFormEffects;
}());

//# sourceMappingURL=login-form.effects.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_OFFER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UPDATE_OFFER; });
/* unused harmony export UPDATE_OFFER_SUCC */
/* unused harmony export UPDATE_OFFER_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_OFFER; });
/* unused harmony export DELETE_OFFER_SUCC */
/* unused harmony export DELETE_OFFER_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_OFFERS_SUCC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_OFFERS_FAIL; });
/* unused harmony export AddOffer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UpdateOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return UpdateOfferSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return UpdateOfferFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteOfferSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DeleteOfferFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FetchOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FetchOffersSucc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FetchOffersFail; });
var ADD_OFFER = "[Offer] Add Offer";
var UPDATE_OFFER = "[Offer] Update Offer";
var UPDATE_OFFER_SUCC = "[Offer] Update Offer Succ";
var UPDATE_OFFER_FAIL = "[Offer] Update Offer Fail";
var DELETE_OFFER = "[Offer] Delete Offer";
var DELETE_OFFER_SUCC = "[Offer] Delete Offer Succ";
var DELETE_OFFER_FAIL = "[Offer] Delete Offer Fail";
var FETCH_OFFERS = "[Offer] Fetch Offers";
var FETCH_OFFERS_SUCC = "[Offer] Fetch Offers Succ";
var FETCH_OFFERS_FAIL = "[Offer] Fetch Offers Fail";
var AddOffer = (function () {
    function AddOffer(payload) {
        this.payload = payload;
        this.type = ADD_OFFER;
    }
    return AddOffer;
}());

var UpdateOffer = (function () {
    function UpdateOffer(payload) {
        this.payload = payload;
        this.type = UPDATE_OFFER;
    }
    return UpdateOffer;
}());

var UpdateOfferSucc = (function () {
    function UpdateOfferSucc(payload) {
        this.payload = payload;
        this.type = UPDATE_OFFER_SUCC;
    }
    return UpdateOfferSucc;
}());

var UpdateOfferFail = (function () {
    function UpdateOfferFail() {
        this.type = UPDATE_OFFER_FAIL;
    }
    return UpdateOfferFail;
}());

var DeleteOffer = (function () {
    function DeleteOffer(payload) {
        this.payload = payload;
        this.type = DELETE_OFFER;
    }
    return DeleteOffer;
}());

var DeleteOfferSucc = (function () {
    function DeleteOfferSucc(payload) {
        this.payload = payload;
        this.type = DELETE_OFFER_SUCC;
    }
    return DeleteOfferSucc;
}());

var DeleteOfferFail = (function () {
    function DeleteOfferFail() {
        this.type = DELETE_OFFER_FAIL;
    }
    return DeleteOfferFail;
}());

var FetchOffers = (function () {
    function FetchOffers() {
        this.type = FETCH_OFFERS;
    }
    return FetchOffers;
}());

var FetchOffersSucc = (function () {
    function FetchOffersSucc(payload) {
        this.payload = payload;
        this.type = FETCH_OFFERS_SUCC;
    }
    return FetchOffersSucc;
}());

var FetchOffersFail = (function () {
    function FetchOffersFail() {
        this.type = FETCH_OFFERS_FAIL;
    }
    return FetchOffersFail;
}());

//# sourceMappingURL=offer.actions.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'loader',template:/*ion-inline-start:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/loader/loader.html"*/'<div\n  class="loader__rotate rotate__big">\n</div>\n<div\n  class="loader__rotate rotate__medium">\n</div>\n<div\n  class="loader__rotate rotate__small">\n</div>\n<div\n  class="loader__rotate rotate__tiny">\n</div>'/*ion-inline-end:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/loader/loader.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakingsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_takings_actions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_order_summary_actions__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TakingsEffects = (function () {
    function TakingsEffects(actions$, store, rest) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.rest = rest;
        this.fetchTakings$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_takings_actions__["a" /* FETCH_TAKINGS */])
            .switchMap(function () { return _this.rest.getTakings(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); })
            .do(function (res) { return _this.handleOrderSummary(res); })
            .map(function (res) { return _this.handleTakings(res); });
    }
    TakingsEffects.prototype.handleTakings = function (res) {
        return (!(res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */]) && res.takings)
            ? new __WEBPACK_IMPORTED_MODULE_3__actions_takings_actions__["e" /* FetchTakingsSucc */](res.takings)
            : new __WEBPACK_IMPORTED_MODULE_3__actions_takings_actions__["d" /* FetchTakingsFail */]();
    };
    TakingsEffects.prototype.handleOrderSummary = function (res) {
        if (!(res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */]) && res.orderSummary) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_order_summary_actions__["b" /* GetOrderSummary */](res.orderSummary));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TakingsEffects.prototype, "fetchTakings$", void 0);
    TakingsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* Rest */]])
    ], TakingsEffects);
    return TakingsEffects;
}());

//# sourceMappingURL=takings.effects.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pending_provider_pending_provider__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_transaction_actions__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PendingEffects = (function () {
    function PendingEffects(actions$, store, pendingProvider) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.pendingProvider = pendingProvider;
        this.getPendings$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["i" /* FETCH_PENDINGS */])
            .switchMap(function () { return _this.pendingProvider.getPendings(); })
            .map(function (res) {
            return (!(res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */]) && res.currentOrderList)
                ? new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["n" /* FetchPendingsSucc */](res.currentOrderList)
                : new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["m" /* FetchPendingsFail */]();
        });
        this.completePendings$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["b" /* COMPLETE_PENDINGS */])
            .pluck('payload')
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__["d" /* Show */]("Akceptowanie zamówień...")); })
            .switchMap(function (payload) { return _this.pendingProvider.completePendings(payload); })
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__["b" /* Hide */]); })
            .do(function (res) {
            if (!(res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */])) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["l" /* FetchPendings */]({}));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_transaction_actions__["d" /* FetchTransactions */]({}));
            }
        })
            .map(function (res) {
            return (!(res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */]))
                ? new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["h" /* CompletePendingsSucc */](res)
                : new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["g" /* CompletePendingsFail */]();
        });
        this.cancelPendings$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["a" /* CANCEL_PENDINGS */])
            .pluck('payload')
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__["d" /* Show */]("Odrzucanie zamówień...")); })
            .switchMap(function (payload) { return _this.pendingProvider.cancelPendings(payload); })
            .do(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_loader_actions__["b" /* Hide */]); })
            .do(function (res) {
            if (!(res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */])) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["l" /* FetchPendings */]({}));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_transaction_actions__["d" /* FetchTransactions */]({}));
            }
        })
            .map(function (res) {
            return (!(res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */]))
                ? new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["e" /* CancelPendingsSucc */](res)
                : new __WEBPACK_IMPORTED_MODULE_3__actions_pending_actions__["d" /* CancelPendingsFail */]();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PendingEffects.prototype, "getPendings$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PendingEffects.prototype, "completePendings$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], PendingEffects.prototype, "cancelPendings$", void 0);
    PendingEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__providers_pending_provider_pending_provider__["a" /* PendingProvider */]])
    ], PendingEffects);
    return PendingEffects;
}());

//# sourceMappingURL=pending.effects.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingModalProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PendingModalProductComponent = (function () {
    function PendingModalProductComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PendingModalProductComponent.prototype, "product", void 0);
    PendingModalProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pending-modal-product',template:/*ion-inline-start:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/pending-modal/pending-modal-product/pending-modal-product.html"*/'<div\n  class="product__thumbnail">\n  <img [src]="product?.image" />\n</div>\n<div\n  class="product__name">\n  <span\n    class="name__label">\n    {{ product?.name }}\n  </span>\n  <span\n    class="name__count">\n    <span class="count--label">ilość</span>\n    <span class="count--value bold">x {{ product?.count }}</span>\n  </span>\n</div>\n<div\n  class="product__price">\n  <div>\n    <span\n      class="discount__label">\n      promocja:\n    </span>\n    <span\n      class="discount__value">\n      <span class="bold">{{ product?.discount }}</span> %\n    </span>\n  </div>\n  <div>\n    <span\n      class="price__label">\n      cena:\n    </span>\n    <span\n      class="price__value">\n      <span class="bold">{{ product?.price }}</span> pln\n    </span>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/pending-modal/pending-modal-product/pending-modal-product.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PendingModalProductComponent);
    return PendingModalProductComponent;
}());

//# sourceMappingURL=pending-modal-product.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_transaction_actions__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transaction_transaction_provider__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionEffects = (function () {
    function TransactionEffects(actions$, store, transactionProvider) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.transactionProvider = transactionProvider;
        this.getPendings$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_transaction_actions__["a" /* FETCH_TRANSACTIONS */])
            .switchMap(function () { return _this.transactionProvider.getTransactions(); })
            .map(function (res) {
            return (!(res instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) && res.currentOrderList)
                ? new __WEBPACK_IMPORTED_MODULE_2__actions_transaction_actions__["f" /* FetchTransactionsSucc */](res.currentOrderList)
                : new __WEBPACK_IMPORTED_MODULE_2__actions_transaction_actions__["e" /* FetchTransactionsFail */]();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TransactionEffects.prototype, "getPendings$", void 0);
    TransactionEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__providers_transaction_transaction_provider__["a" /* TransactionsProvider */]])
    ], TransactionEffects);
    return TransactionEffects;
}());

//# sourceMappingURL=transaction.effects.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferFormEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_offer_form_actions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_offer_actions__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OfferFormEffects = (function () {
    function OfferFormEffects(actions$, offerProvider, store) {
        var _this = this;
        this.actions$ = actions$;
        this.offerProvider = offerProvider;
        this.store = store;
        this.updateForm = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_offer_form_actions__["e" /* UPDATE_FORM */])
            .pluck("payload")
            .map(function (_a) {
            var prevState = _a[0], currState = _a[1];
            return _this.offerProvider.computeOffer(prevState, currState);
        })
            .map(function (offer) { return Object.assign({
            data: offer
        }); })
            .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_2__actions_offer_form_actions__["h" /* UpdateFormSucc */](payload); });
        this.submitForm$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_offer_form_actions__["a" /* SUBMIT_FORM */])
            .pluck("payload")
            .do(function (payload) {
            return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_offer_actions__["l" /* UpdateOffer */](payload.data));
        })
            .map(function (payload) { return new __WEBPACK_IMPORTED_MODULE_2__actions_offer_form_actions__["d" /* SubmitFormSucc */](payload); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], OfferFormEffects.prototype, "updateForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], OfferFormEffects.prototype, "submitForm$", void 0);
    OfferFormEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["c" /* OfferProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]])
    ], OfferFormEffects);
    return OfferFormEffects;
}());

//# sourceMappingURL=offer-form.effects.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPanelComponent = (function () {
    function UserPanelComponent(store) {
        this.store = store;
    }
    UserPanelComponent.prototype.ngOnInit = function () {
        this.user$ = this.store.select(function (state) { return state.user.data; });
    };
    UserPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-panel',template:/*ion-inline-start:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/user-panel/user-panel.html"*/'<div\n  class="user-panel__badge">\n  <div></div>\n  <div></div>\n  <img [src]="\'assets/icon/edit.svg\'" />\n  <div></div>\n  <img [src]="\'assets/icon/user.svg\'" />\n  <div></div>\n  <div\n    class="badge__info">\n    <span class="small">profil</span>\n    <span class="medium bold">Admin</span>\n    <span class="small">{{ (user$ | async)?.login }}</span>\n    <span class="small">adres</span>\n  </div>\n</div>\n<div\n  menuClose\n  class="user-panel__tab bold">\n  <img [src]="\'assets/icon/iconhome.svg\'" />\n  home\n</div>\n<div\n  menuClose\n  class="user-panel__tab bold">\n  <img [src]="\'assets/icon/iconoption.svg\'" />\n  support\n</div>'/*ion-inline-end:"/Users/albert/WebstormProjects/yummy.frontend.restaurant/src/components/user-panel/user-panel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], UserPanelComponent);
    return UserPanelComponent;
}());

//# sourceMappingURL=user-panel.js.map

/***/ })

},[439]);
//# sourceMappingURL=main.js.map