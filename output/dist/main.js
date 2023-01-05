(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/tags-info/tags-info.component */ "./src/app/component/tags-info/tags-info.component.ts");
/* harmony import */ var _service_authentication_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/authentication.guard */ "./src/app/service/authentication.guard.ts");






// import { GraphComponent } from './component/ph-graph/ph-graph.component';
var routes = [
    { component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], path: "login" },
    { component: _component_tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_4__["TagsInfoComponent"], path: "tags-info", canActivate: [_service_authentication_guard__WEBPACK_IMPORTED_MODULE_5__["AuthenticationGuard"]] },
    { path: "**", redirectTo: 'tags-info' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-component></app-main-component>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'align-portal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/main-component/main-component.component */ "./src/app/component/main-component/main-component.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _component_tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/tags-info/tags-info.component */ "./src/app/component/tags-info/tags-info.component.ts");
/* harmony import */ var _service_authentication_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/authentication-interceptor.service */ "./src/app/service/authentication-interceptor.service.ts");
/* harmony import */ var _component_ph_graph_ph_graph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/ph-graph/ph-graph.component */ "./src/app/component/ph-graph/ph-graph.component.ts");
/* harmony import */ var _component_temp_graph_temp_graph_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/temp-graph/temp-graph.component */ "./src/app/component/temp-graph/temp-graph.component.ts");
/* harmony import */ var _component_force_graph_force_graph_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/force-graph/force-graph.component */ "./src/app/component/force-graph/force-graph.component.ts");
/* harmony import */ var _component_barometer_graph_barometer_graph_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/barometer-graph/barometer-graph.component */ "./src/app/component/barometer-graph/barometer-graph.component.ts");
/* harmony import */ var _component_x_accelerometer_graph_x_accelerometer_graph_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/x-accelerometer-graph/x-accelerometer-graph.component */ "./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.ts");
/* harmony import */ var _component_y_accelerometer_graph_y_accelerometer_graph_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/y-accelerometer-graph/y-accelerometer-graph.component */ "./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.ts");
/* harmony import */ var _component_z_accelerometer_graph_z_accelerometer_graph_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/z-accelerometer-graph/z-accelerometer-graph.component */ "./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.ts");
/* harmony import */ var _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/confirmation-dialog/confirmation-dialog.component */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _component_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/delete-confirmation-dialog/delete-confirmation-dialog.component */ "./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _component_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_6__["MainComponentComponent"],
                _component_tags_info_tags_info_component__WEBPACK_IMPORTED_MODULE_13__["TagsInfoComponent"],
                _component_ph_graph_ph_graph_component__WEBPACK_IMPORTED_MODULE_15__["PhGraphComponent"],
                _component_temp_graph_temp_graph_component__WEBPACK_IMPORTED_MODULE_16__["TempGraphComponent"],
                _component_force_graph_force_graph_component__WEBPACK_IMPORTED_MODULE_17__["ForceGraphComponent"],
                _component_barometer_graph_barometer_graph_component__WEBPACK_IMPORTED_MODULE_18__["BarometerGraphComponent"],
                _component_x_accelerometer_graph_x_accelerometer_graph_component__WEBPACK_IMPORTED_MODULE_19__["XAccelerometerGraphComponent"],
                _component_y_accelerometer_graph_y_accelerometer_graph_component__WEBPACK_IMPORTED_MODULE_20__["YAccelerometerGraphComponent"],
                _component_z_accelerometer_graph_z_accelerometer_graph_component__WEBPACK_IMPORTED_MODULE_21__["ZAccelerometerGraphComponent"],
                _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"],
                _component_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DeleteConfirmationDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _service_authentication_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationInterceptor"], multi: true }],
            entryComponents: [_component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"], _component_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_23__["DeleteConfirmationDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/barometer-graph/barometer-graph.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/barometer-graph/barometer-graph.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#barometerContainer {\n    /* height: 400px;\n    min-width: 310px; */\n    clear:right;\n    /* height: 100%;\n    width: 100%; */\n  }\n\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .export-button-style {\n    width: 15% ;\n    font-size: 12px;\n    color: white;\n    border-radius: 5%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n    margin-top: 3%;\n}\n\n  .export-button-downloading-style {\n  width: 15% ;\n  font-size: 12px;\n  color: rgb(24, 24, 24);\n  border-radius: 5%;\n  background: rgb(221, 221, 221);\n  border-color: white !important;\n  float: right;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Jhcm9tZXRlci1ncmFwaC9iYXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3dCQUNvQjtJQUNwQixZQUFZO0lBQ1o7bUJBQ2U7R0FDaEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7RUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Jhcm9tZXRlci1ncmFwaC9iYXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYXJvbWV0ZXJDb250YWluZXIge1xuICAgIC8qIGhlaWdodDogNDAwcHg7XG4gICAgbWluLXdpZHRoOiAzMTBweDsgKi9cbiAgICBjbGVhcjpyaWdodDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7ICovXG4gIH1cblxuICAubG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBvdmVyZmxvdzogc2hvdztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmV4cG9ydC1idXR0b24tc3R5bGUge1xuICAgIHdpZHRoOiAxNSUgO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NCwxMzksMjEzLDEpO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5leHBvcnQtYnV0dG9uLWRvd25sb2FkaW5nLXN0eWxlIHtcbiAgd2lkdGg6IDE1JSA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDMlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/barometer-graph/barometer-graph.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/barometer-graph/barometer-graph.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"exportBarometerBtn\" mat-icon-button matTooltip=\"Export Data\" matTooltipPosition=\"left\" [ngClass]=\"exportBtnClass\" (click)=\"exportCSV()\">\n    {{exportText}}\n</button>   \n\n<div id=\"barometerContainer\" ></div>\n "

/***/ }),

/***/ "./src/app/component/barometer-graph/barometer-graph.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/barometer-graph/barometer-graph.component.ts ***!
  \************************************************************************/
/*! exports provided: BarometerGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarometerGraphComponent", function() { return BarometerGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/excel.service */ "./src/app/service/excel.service.ts");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");






var BarometerGraphComponent = /** @class */ (function () {
    function BarometerGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.exportText = 'Export CSV';
        this.exportBtnClass = 'export-button-style';
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                }
            ]
        };
    }
    BarometerGraphComponent.prototype.ngOnInit = function () {
        var chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["stockChart"]('barometerContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Barometer' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var drawData = this.tagsInfoService.getterBarometerData();
        chart.series[0].setData(drawData, true, true);
        chart.hideLoading();
    };
    BarometerGraphComponent.prototype.exportCSV = function () {
        var _this = this;
        this.exportText = 'Downloading...';
        this.exportBtnClass = 'export-button-downloading-style';
        var exportbtnElement = document.getElementById('exportBarometerBtn');
        exportbtnElement.disabled = true;
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isDownloaded;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.excelService.generateExcel(this.tagsInfoService.getterBarometerData(), 'Barometer')];
                    case 1:
                        isDownloaded = _a.sent();
                        console.log(isDownloaded);
                        if (isDownloaded) {
                            this.exportText = 'Export CSV';
                            this.exportBtnClass = 'export-button-style';
                            exportbtnElement.disabled = false;
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('barometerData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BarometerGraphComponent.prototype, "barometerData", void 0);
    BarometerGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'barometer-graph',
            template: __webpack_require__(/*! ./barometer-graph.component.html */ "./src/app/component/barometer-graph/barometer-graph.component.html"),
            styles: [__webpack_require__(/*! ./barometer-graph.component.css */ "./src/app/component/barometer-graph/barometer-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__["TagsInfoService"]])
    ], BarometerGraphComponent);
    return BarometerGraphComponent;
}());



/***/ }),

/***/ "./src/app/component/confirmation-dialog/confirmation-dialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/confirmation-dialog/confirmation-dialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-container {\n    float: right;\n}\n\n.delete {\n    background-color: rgba(74,139,213,1);\n    color: white;\n}\n\n.create {\n    background: rgba(85, 195, 191, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksa0NBQWtDO0NBQ3JDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tY29udGFpbmVyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kZWxldGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsMTM5LDIxMywxKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY3JlYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDg1LCAxOTUsIDE5MSwgMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/confirmation-dialog/confirmation-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/confirmation-dialog/confirmation-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n\n          <mat-form-field style=\"width: 100%;\" appearance=\"fill\">\n            <mat-label>What's your note?</mat-label>\n            <input matInput [(ngModel)]=\"sessionNote\">\n          </mat-form-field>\n          <hr />\n\n    <button class=\"delete\" (click)=\"confirm()\"  mat-raised-button >Save</button> &nbsp;\n    <button (click)=\"cancel()\" mat-raised-button color=\"basic\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/component/confirmation-dialog/confirmation-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/confirmation-dialog/confirmation-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");




var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(dialogRef, tagsInfoService, popupConfigData) {
        this.dialogRef = dialogRef;
        this.tagsInfoService = tagsInfoService;
        this.popupConfigData = popupConfigData;
        this.sessionNote = this.popupConfigData.session.note;
        this.sessionId = this.popupConfigData.session.sessionId;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.confirm = function () {
        var _this = this;
        console.log(this.sessionNote);
        var saveNoteObj = {
            sessionId: this.sessionId,
            noteText: this.sessionNote
        };
        this.tagsInfoService.setDeviceSessionNote(saveNoteObj).subscribe(function (data) {
            if (data.status == 201) {
                _this.dialogRef.close("YES");
            }
        }, function (err) {
            console.log(err);
            _this.dialogRef.close("NO");
        });
    };
    ConfirmationDialogComponent.prototype.cancel = function () {
        this.dialogRef.close("NO");
    };
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_3__["TagsInfoService"], Object])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-container {\n    float: right;\n}\n\n.delete {\n    background-color: #DD3A3A;\n    color: white;\n}\n\n.create {\n    background: rgba(85, 195, 191, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2RlbGV0ZS1jb25maXJtYXRpb24tZGlhbG9nL2RlbGV0ZS1jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxrQ0FBa0M7Q0FDckMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZGVsZXRlLWNvbmZpcm1hdGlvbi1kaWFsb2cvZGVsZXRlLWNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtLWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQzQTNBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jcmVhdGUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoODUsIDE5NSwgMTkxLCAxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span>{{message}}</span>\n\n\n<hr />\n\n<div class=\"confirm-container\">\n\n    <button [ngClass]=\"action == 'Delete' ? 'delete' : 'create'\" (click)=\"confirm()\"  mat-raised-button >{{action}}</button> &nbsp;\n    <button (click)=\"cancel()\" mat-raised-button color=\"basic\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeleteConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationDialogComponent", function() { return DeleteConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteConfirmationDialogComponent = /** @class */ (function () {
    function DeleteConfirmationDialogComponent(dialogRef, popupConfigData) {
        this.dialogRef = dialogRef;
        this.popupConfigData = popupConfigData;
        this.message = this.popupConfigData.message;
        this.action = this.popupConfigData.action;
    }
    DeleteConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteConfirmationDialogComponent.prototype.confirm = function () {
        this.dialogRef.close("YES");
    };
    DeleteConfirmationDialogComponent.prototype.cancel = function () {
        this.dialogRef.close("NO");
    };
    DeleteConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./delete-confirmation-dialog.component.html */ "./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-confirmation-dialog.component.css */ "./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteConfirmationDialogComponent);
    return DeleteConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/component/force-graph/force-graph.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/force-graph/force-graph.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#forceContainer {\n    /* height: 400px;\n    min-width: 310px; */\n    clear:right;\n    /* height: 100%;\n    width: 100%; */\n  }\n\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .export-button-style {\n    width: 15% ;\n    font-size: 12px;\n    color: white;\n    border-radius: 5%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n    margin-top: 3%;\n}\n\n  .export-button-downloading-style {\n  width: 15% ;\n  font-size: 12px;\n  color: rgb(24, 24, 24);\n  border-radius: 5%;\n  background: rgb(221, 221, 221);\n  border-color: white !important;\n  float: right;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ZvcmNlLWdyYXBoL2ZvcmNlLWdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTt3QkFDb0I7SUFDcEIsWUFBWTtJQUNaO21CQUNlO0dBQ2hCOztFQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztHQUNWOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGVBQWU7Q0FDbEI7O0VBRUQ7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb3JjZS1ncmFwaC9mb3JjZS1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZvcmNlQ29udGFpbmVyIHtcbiAgICAvKiBoZWlnaHQ6IDQwMHB4O1xuICAgIG1pbi13aWR0aDogMzEwcHg7ICovXG4gICAgY2xlYXI6cmlnaHQ7XG4gICAgLyogaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlOyAqL1xuICB9XG5cbiAgLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgb3ZlcmZsb3c6IHNob3c7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5leHBvcnQtYnV0dG9uLXN0eWxlIHtcbiAgICB3aWR0aDogMTUlIDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsMTM5LDIxMywxKTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uZXhwb3J0LWJ1dHRvbi1kb3dubG9hZGluZy1zdHlsZSB7XG4gIHdpZHRoOiAxNSUgO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/force-graph/force-graph.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/force-graph/force-graph.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"exportForceBtn\" mat-icon-button matTooltip=\"Export Data\" matTooltipPosition=\"left\" [ngClass]=\"exportBtnClass\" (click)=\"exportCSV()\">\n    {{exportText}}\n</button>   \n\n<div id=\"forceContainer\" ></div>\n "

/***/ }),

/***/ "./src/app/component/force-graph/force-graph.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/force-graph/force-graph.component.ts ***!
  \****************************************************************/
/*! exports provided: ForceGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceGraphComponent", function() { return ForceGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/excel.service */ "./src/app/service/excel.service.ts");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");






var ForceGraphComponent = /** @class */ (function () {
    function ForceGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.exportText = 'Export CSV';
        this.exportBtnClass = 'export-button-style';
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                },
            ]
        };
    }
    ForceGraphComponent.prototype.ngOnInit = function () {
        var chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["stockChart"]('forceContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Force' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var drawData = this.tagsInfoService.getterForceData();
        chart.series[0].setData(drawData, true, true);
        chart.hideLoading();
    };
    ForceGraphComponent.prototype.exportCSV = function () {
        var _this = this;
        this.exportText = 'Downloading...';
        this.exportBtnClass = 'export-button-downloading-style';
        var exportbtnElement = document.getElementById('exportForceBtn');
        exportbtnElement.disabled = true;
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isDownloaded;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.excelService.generateExcel(this.tagsInfoService.getterForceData(), 'Force')];
                    case 1:
                        isDownloaded = _a.sent();
                        console.log(isDownloaded);
                        if (isDownloaded) {
                            this.exportText = 'Export CSV';
                            this.exportBtnClass = 'export-button-style';
                            exportbtnElement.disabled = false;
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('forceData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ForceGraphComponent.prototype, "forceData", void 0);
    ForceGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'force-graph',
            template: __webpack_require__(/*! ./force-graph.component.html */ "./src/app/component/force-graph/force-graph.component.html"),
            styles: [__webpack_require__(/*! ./force-graph.component.css */ "./src/app/component/force-graph/force-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__["TagsInfoService"]])
    ], ForceGraphComponent);
    return ForceGraphComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-fields {\n    position: relative;\n    /* left: 50%; */\n    padding-top: 2%;\n    top: 50%;\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 0 auto;\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 100%;\n    white-space: nowrap;\n}\n\n.mat-flat-button.mat-primary {\n    padding: 3%;\n    border-radius: 30px;\n    text-align: center;\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 120%;\n    color: rgba(33, 47, 81, 1);\n    text-transform: capitalize;\n    background-color: rgba(74,139,213,1);\n    width: 100%;\n    height: 70%;\n}\n\n.login-form-button {\n    position: relative;\n    left: 42%;\n    top: 20%;\n    width: 15%;\n    justify-content: center;\n    border-radius: 0;\n}\n\n#part1 {\n    width: 50%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n#part2 {\n    margin-top: 6%;\n    height: 100%;\n}\n\n#signIn {\n    position: relative;\n    left: 42%;\n    top: 37%;\n    overflow: visible;\n    width: 15%;\n    white-space: nowrap;\n    text-align: center;\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 150%;\n    color: rgba(33, 47, 81, 1);\n    text-transform: capitalize;\n}\n\n#loginText {\n    color: white;\n}\n\n#error {\n    color: red;\n}\n\n#logoImg {\n    width: 100%;\n}\n\n#loginContainer{\n    /* background-color: rgb(245, 245, 245); */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0NBQ1g7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSwyQ0FBMkM7Q0FDOUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLWZpZWxkcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGxlZnQ6IDUwJTsgKi9cbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkge1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICBjb2xvcjogcmdiYSgzMywgNDcsIDgxLCAxKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LDEzOSwyMTMsMSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG5cbi5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDQyJTtcbiAgICB0b3A6IDIwJTtcbiAgICB3aWR0aDogMTUlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbiNwYXJ0MSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4jcGFydDIge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI3NpZ25JbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDQyJTtcbiAgICB0b3A6IDM3JTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTUlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIGNvbG9yOiByZ2JhKDMzLCA0NywgODEsIDEpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4jbG9naW5UZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNlcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuI2xvZ29JbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jbG9naW5Db250YWluZXJ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpOyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\">\n<div>\n    <img id=\"logoImg\" src=\"assets/img/logo.png\">\n</div>\n<div id=\"part2\">\n    <div id=\"signIn\">\n        <span>Welcome back</span>\n    </div>\n    <div class=\"login-form-fields\">\n        <span [hidden]=\"!isInvalidCredentials\" id=\"error\">Invalid Credentials</span>\n        <mat-form-field>\n            <input matInput type=\"text\" placeholder=\"Username\" [formControl]=\"usernameControl\">\n            <mat-error *ngIf=\"usernameControl.invalid\">Required!</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"passwordControl\">\n            <mat-error *ngIf=\"passwordControl.invalid\">Required!</mat-error>\n        </mat-form-field>\n    </div>\n    <div class=\"login-form-button\">\n        <button mat-flat-button color=\"primary\" (click)=\"login()\"><span id=\"loginText\">Login</span></button>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.usernameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalidCredentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate(['/tags-info']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.usernameControl.value, this.passwordControl.value).subscribe(function (res) {
            console.log(res);
            _this.isInvalidCredentials = false;
            _this.router.navigate(['/tags-info']);
        }, function (err) {
            console.log(err);
            _this.isInvalidCredentials = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/main-component/main-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/main-component/main-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logoutBtn {\n    color:white;\n    background: rgba(74,139,213,1);\n    border-radius: 24px;\n    float: right;\n    width:13%;\n    margin-right: 5%;\n    border-radius: 5px\n}\n\n#logoImg {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21haW4tY29tcG9uZW50L21haW4tY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWFpbi1jb21wb25lbnQvbWFpbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvdXRCdG4ge1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsMTM5LDIxMywxKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDoxMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbn1cblxuI2xvZ29JbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/main-component/main-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/main-component/main-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Ubuntu\" rel=\"stylesheet\">\n<div>\n    <div>\n        <div *ngIf=\"isLoggedIn()\">\n            <div>\n                <img id=\"logoImg\" src=\"assets/img/logo.png\">\n            </div>\n        <button (click)=\"logoutClick()\" mat-raised-button id=\"logoutBtn\"><span>Logout</span></button>\n        </div>\n        <router-outlet> </router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/main-component/main-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/main-component/main-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentComponent", function() { return MainComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");




var MainComponentComponent = /** @class */ (function () {
    function MainComponentComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    MainComponentComponent.prototype.ngOnInit = function () {
        this.showPatientsInfo();
    };
    MainComponentComponent.prototype.showPatientsInfo = function () {
        this.router.navigate(['/patients-info']);
    };
    MainComponentComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    MainComponentComponent.prototype.logoutClick = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    MainComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-component',
            template: __webpack_require__(/*! ./main-component.component.html */ "./src/app/component/main-component/main-component.component.html"),
            styles: [__webpack_require__(/*! ./main-component.component.css */ "./src/app/component/main-component/main-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], MainComponentComponent);
    return MainComponentComponent;
}());



/***/ }),

/***/ "./src/app/component/ph-graph/ph-graph.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/ph-graph/ph-graph.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#phContainer {\n    /* height: 400px;\n    min-width: 310px; */\n    clear:right;\n    /* height: 100%;\n    width: 100%; */\n  }\n\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .export-button-style {\n    width: 15% ;\n    font-size: 12px;\n    color: white;\n    border-radius: 5%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n    margin-top: 3%;\n}\n\n  .export-button-downloading-style {\n  width: 15% ;\n  font-size: 12px;\n  color: rgb(24, 24, 24);\n  border-radius: 5%;\n  background: rgb(221, 221, 221);\n  border-color: white !important;\n  float: right;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3BoLWdyYXBoL3BoLWdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTt3QkFDb0I7SUFDcEIsWUFBWTtJQUNaO21CQUNlO0dBQ2hCOztFQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztHQUNWOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGVBQWU7Q0FDbEI7O0VBRUQ7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9waC1ncmFwaC9waC1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BoQ29udGFpbmVyIHtcbiAgICAvKiBoZWlnaHQ6IDQwMHB4O1xuICAgIG1pbi13aWR0aDogMzEwcHg7ICovXG4gICAgY2xlYXI6cmlnaHQ7XG4gICAgLyogaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlOyAqL1xuICB9XG5cbiAgLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgb3ZlcmZsb3c6IHNob3c7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5leHBvcnQtYnV0dG9uLXN0eWxlIHtcbiAgICB3aWR0aDogMTUlIDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsMTM5LDIxMywxKTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uZXhwb3J0LWJ1dHRvbi1kb3dubG9hZGluZy1zdHlsZSB7XG4gIHdpZHRoOiAxNSUgO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/ph-graph/ph-graph.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/ph-graph/ph-graph.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"exportPhBtn\" mat-icon-button matTooltip=\"Export Data\" matTooltipPosition=\"left\" [ngClass]=\"exportBtnClass\" (click)=\"exportCSV()\">\n    {{exportText}}\n</button>   \n\n<div id=\"phContainer\"></div>"

/***/ }),

/***/ "./src/app/component/ph-graph/ph-graph.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/ph-graph/ph-graph.component.ts ***!
  \**********************************************************/
/*! exports provided: PhGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhGraphComponent", function() { return PhGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/excel.service */ "./src/app/service/excel.service.ts");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");






var PhGraphComponent = /** @class */ (function () {
    function PhGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.exportText = 'Export CSV';
        this.exportBtnClass = 'export-button-style';
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                },
            ]
        };
    }
    PhGraphComponent.prototype.ngOnInit = function () {
        var chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["stockChart"]('phContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'ph' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 800000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var drawData = this.tagsInfoService.getterPhData();
        chart.series[0].setData(drawData, true, true);
        chart.hideLoading();
    };
    PhGraphComponent.prototype.exportCSV = function () {
        var _this = this;
        this.exportText = 'Downloading...';
        this.exportBtnClass = 'export-button-downloading-style';
        var exportbtnElement = document.getElementById('exportPhBtn');
        exportbtnElement.disabled = true;
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isDownloaded;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.excelService.generateExcel(this.tagsInfoService.getterPhData(), 'Ph')];
                    case 1:
                        isDownloaded = _a.sent();
                        console.log(isDownloaded);
                        if (isDownloaded) {
                            this.exportText = 'Export CSV';
                            this.exportBtnClass = 'export-button-style';
                            exportbtnElement.disabled = false;
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('phData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhGraphComponent.prototype, "phData", void 0);
    PhGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ph-graph',
            template: __webpack_require__(/*! ./ph-graph.component.html */ "./src/app/component/ph-graph/ph-graph.component.html"),
            styles: [__webpack_require__(/*! ./ph-graph.component.css */ "./src/app/component/ph-graph/ph-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__["TagsInfoService"]])
    ], PhGraphComponent);
    return PhGraphComponent;
}());



/***/ }),

/***/ "./src/app/component/tags-info/tags-info.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/tags-info/tags-info.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 95% !important;\n    margin: 0 auto;\n}\n\n.icon {\n    font-size: 1.8em;\n    color: rgba(74,139,213,1);\n}\n\n.button {\n    min-width: 1px;\n}\n\n.table-header {\n    width: 15%;\n}\n\n#overallStatusHeader {\n    width: 12% !important;\n    padding-left: 7px;\n}\n\n.mat-header-cell {\n    border-color: rgb(0, 0, 0);\n}\n\ntd.mat-cell {\n    border-color: rgb(0, 0, 0);\n}\n\ntd {\n    /* left: 28px; */\n    top: 97px;\n    width: 40px;\n    white-space: nowrap;\n    /* text-align: left; */\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    color: rgba(33, 47, 81, 1);\n    text-transform: capitalize;\n}\n\nth {\n    left: 13px;\n    top: 0px;\n    width: 65px;\n    white-space: nowrap;\n    text-align: left;\n    font-family: Ubuntu;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 15px;\n    color: rgba(33, 47, 81, 1);\n    text-transform: capitalize;\n}\n\n#searchBtnContainer {\n    width: 50%;\n    border-color: rgba(74,139,213,1);\n    border-radius: 5px;\n    height: 23px;\n    border-style: solid;\n    opacity: 0.6;\n    float: left;\n    margin-bottom: 3%;\n}\n\n.btnSearch {\n    border-style: none;\n    width: 90%;\n    outline: none !important;\n}\n\n.mat-paginator {\n    display: flex;\n    justify-content: center;\n}\n\n.autorenew-button-style {\n    color: white;\n    border-radius: 20%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n}\n\n#patientInfoTable {\n    background: transparent !important;\n    background-repeat: no-repeat !important;\n    background-position: center center !important;\n    background-size: 20%!important;\n    border-radius: 1% !important;\n}\n\n/* Absolute Center Spinner */\n\n.loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n/* Transparent Overlay */\n\n.loading-indicator:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.3);\n  }\n\n.loading-indicator ::ng-deep .mat-progress-spinner circle, .mat-spinner circle {\n    stroke: rgba(74,139,213,1) !important;\n}\n\n#graphsContainer {\n    width: 70% !important;\n}\n\n.sensorTableContainer {\n    width: 30% !important;\n}\n\n/* .mat-row:nth-child(even){\n    background-color: red;\n} */\n\n.mat-row:nth-child(odd){\n    background-color: rgb(238, 238, 238);\n}\n\n#tableContent {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n#logoutBtn {\n    color:white;\n    background: rgba(74,139,213,1);\n    border-radius: 24px;\n    float: right;\n    width:13%;\n    margin-right: 5%;\n    border-radius: 5px\n}\n\n#logoImg {\n    width: 100%;\n}\n\n#showGraphBtn{\n    color:white;\n    background: rgba(74,139,213,1);\n    border-radius: 5px;\n    font-weight:400;\n    font-size: 12px;\n}\n\n#deleteSessionsBtn{\n    color:white;\n    background: rgba(74,139,213,1);\n    border-radius: 5px;\n    font-weight:400;\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RhZ3MtaW5mby90YWdzLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBSUQ7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCOztBQUdEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQ0FBbUM7SUFDbkMsd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QywrQkFBK0I7SUFDL0IsNkJBQTZCO0NBQ2hDOztBQUVELDZCQUE2Qjs7QUFDN0I7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0FBRUQseUJBQXlCOztBQUMzQjtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7R0FDbkM7O0FBQ0g7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7O0lBRUk7O0FBRUo7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0FBRUg7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0NBQ25COztBQUdEO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90YWdzLWluZm8vdGFncy1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBjb2xvcjogcmdiYSg3NCwxMzksMjEzLDEpO1xufVxuXG4uYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDFweDtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuXG5cbiNvdmVyYWxsU3RhdHVzSGVhZGVyIHtcbiAgICB3aWR0aDogMTIlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG50ZC5tYXQtY2VsbCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbnRkIHtcbiAgICAvKiBsZWZ0OiAyOHB4OyAqL1xuICAgIHRvcDogOTdweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJnYmEoMzMsIDQ3LCA4MSwgMSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnRoIHtcbiAgICBsZWZ0OiAxM3B4O1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiYSgzMywgNDcsIDgxLCAxKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuI3NlYXJjaEJ0bkNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNzQsMTM5LDIxMywxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG5cbi5idG5TZWFyY2gge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1wYWdpbmF0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hdXRvcmVuZXctYnV0dG9uLXN0eWxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsMTM5LDIxMywxKTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jcGF0aWVudEluZm9UYWJsZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAlIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxJSAhaW1wb3J0YW50O1xufVxuXG4vKiBBYnNvbHV0ZSBDZW50ZXIgU3Bpbm5lciAqL1xuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgb3ZlcmZsb3c6IHNob3c7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xuLmxvYWRpbmctaW5kaWNhdG9yOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG4gIH1cbi5sb2FkaW5nLWluZGljYXRvciA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gICAgc3Ryb2tlOiByZ2JhKDc0LDEzOSwyMTMsMSkgIWltcG9ydGFudDtcbn1cblxuI2dyYXBoc0NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xufVxuXG4uc2Vuc29yVGFibGVDb250YWluZXIge1xuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbn1cblxuLyogLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0gKi9cbiAgICAgICAgXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG59XG5cbiN0YWJsZUNvbnRlbnQge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4jbG9nb3V0QnRuIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LDEzOSwyMTMsMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6MTMlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG59XG5cbiNsb2dvSW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3Nob3dHcmFwaEJ0bntcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LDEzOSwyMTMsMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cblxuI2RlbGV0ZVNlc3Npb25zQnRue1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsMTM5LDIxMywxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/tags-info/tags-info.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/tags-info/tags-info.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"loadData\" class=\"loading-indicator\">\n        <mat-spinner></mat-spinner>\n      </div>\n\n\n<table id=\"userInfoContainer\">\n    <tr>\n        <td style=\"vertical-align: top;\" class=\"sensorTableContainer\">\n          <div id=\"tableContent\">\n            <button mat-icon-button matTooltip=\"Reload data\" matTooltipPosition=\"left\" class=\"autorenew-button-style\" (click)=\"resetPatientsInfo()\">\n                <mat-icon>autorenew</mat-icon>\n            </button>\n            <div id=\"searchBtnContainer\">\n                <input matInput (keyup)=\"applyFilter($event.target.value,$event)\" class=\"btnSearch\" placeholder=\"Search\" [disabled]=\"!tagsDataSource\">\n            </div>\n            <div>\n                <table mat-table [dataSource]=\"tagsDataSource\" id=\"patientInfoTable\" matSort>\n            \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"showSession($event,row);\"></tr>\n            \n            \n                    <ng-container matColumnDef=\"tagId\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\">Tag Id</th>\n                        <td mat-cell *matCellDef=\"let tag\">\n                            {{tag.id}}\n                        </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"lastActivity\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header id=\"overallStatusHeader\">Last Activity</th>\n                        <td mat-cell *matCellDef=\"let tag\">\n                            {{getDateWithTimeZone(tag.lastActivity)}}\n                        </td>\n                    </ng-container>\n                </table>\n            \n                <table>\n                    <tr>\n                        <td>\n                            <mat-paginator #paginator [length]=\"paggingSize\" previousPageLabel=\"Previous\" nextPageLabel=\"Forward\" [pageSize]=\"tableSize\" [pageIndex]=\"pageNumber\" (page)=\"changePage($event)\">\n                            </mat-paginator>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        \n            <div *ngIf=\"displaySessions\">\n                <table mat-table [dataSource]=\"sessionDataSource\" id=\"patientInfoTable\" matSort>\n            \n                    <tr mat-header-row *matHeaderRowDef=\"sessionDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: sessionDisplayedColumns;\"></tr>\n            \n            \n                    <ng-container matColumnDef=\"sessionStart\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"table-header\">Session Start</th>\n                        <td mat-cell *matCellDef=\"let session\">\n                            {{getDateWithTimeZone(session.sessionStartTime)}}\n                        </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"lastActivity\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header id=\"overallStatusHeader\" >Last Activity</th>\n                        <td style=\"padding-left: 7px\" mat-cell *matCellDef=\"let session\">\n                            {{getDateWithTimeZone(session.lastActivity)}}\n                        </td>\n                    </ng-container>\n            \n            \n                    <ng-container matColumnDef=\"note\">\n            \n                        <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"padding-left: 4px;\">Note</th>\n                        <td mat-cell *matCellDef=\"let session\">\n                        <!-- <button class=\"button\"  (click)=\"showNote($event,session.sessionId,session.note);\" mat-icon-button > -->\n                            <button class=\"button\"  (click)=\"openNoteDialog($event, session);\" mat-icon-button >\n                            <mat-icon class=\"icon\">note_add</mat-icon>\n                        </button>\n                        </td>\n                    </ng-container>\n    \n                    <ng-container  matColumnDef=\"sensors\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header id=\"overallStatusHeader\">Sensors</th>\n                        <th mat-header-cell *matHeaderCellDef> </th>\n            \n                        <td  mat-cell *matCellDef=\"let session\">\n    \n                        <mat-form-field style=\"width: 100px;\">\n    \n                            <mat-select #select (selectionChange)=\"checkSelection($event, session)\" placeholder=\"Select sensor\"  multiple>\n    \n                                <mat-option (click)=\"optionClick()\" *ngFor=\"let sensors of typesOfsensors\" [value]=\"sensors.key\">\n                                  {{sensors.value}}\n                                </mat-option>\n    \n                                <mat-option (click)=\"toggleAllSelection($event)\" [value]=\"0\">All</mat-option>\n    \n                              </mat-select>\n                        </mat-form-field>\n                        </td>\n                    </ng-container>\n    \n                    <ng-container matColumnDef=\"showGraph\">\n                        <th mat-header-cell *matHeaderCellDef> </th>\n                        <td mat-cell *matCellDef=\"let session\" style=\"padding-left: 10px;\">\n                            <button id=\"showGraphBtn\" mat-raised-button [disabled]=\"!session.sensors || session.sensors.length == 0\" (click)=\"showGraph($event, session)\">\n                                Show Graph\n                            </button>\n                        </td>\n                    </ng-container>\n                </table>\n            \n                <table>\n                    <tr>\n                        <td>\n                            <mat-paginator #paginator [length]=\"sessionsPaggingSize\" previousPageLabel=\"Previous\" nextPageLabel=\"Forward\" [pageSize]=\"sessionsTableSize\" [pageIndex]=\"sessionsPageNumber\" (page)=\"sessionsChangePage($event)\">\n                            </mat-paginator>\n                        </td>\n                    </tr>\n                </table>\n\n                <div *ngIf=\"!noSessionsFound\">\n                    <button id=\"deleteSessionsBtn\" mat-raised-button (click)=\"deleteSessions($event)\">\n                        Delete sessions\n                    </button>\n                </div>               \n            </div>\n         </div>\n        </td>\n\n        <td id=\"graphsContainer\">\n            <div *ngIf=\"displayGraph\">\n                <ph-graph *ngIf=\"showPhGraph\"></ph-graph>\n                <temp-graph *ngIf=\"showTempGraph\"></temp-graph>\n                <force-graph *ngIf=\"showForceGraph\"></force-graph>\n                <barometer-graph *ngIf=\"showBarometerGraph\"></barometer-graph>\n                <x-accelerometer-graph *ngIf=\"showXAccelerometerGraph\"></x-accelerometer-graph>\n                <y-accelerometer-graph *ngIf=\"showYAccelerometerGraph\"></y-accelerometer-graph>\n                <z-accelerometer-graph *ngIf=\"showZAccelerometerGraph\"></z-accelerometer-graph>\n            </div>\n        </td>\n    </tr>\n\n\n</table>"

/***/ }),

/***/ "./src/app/component/tags-info/tags-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/tags-info/tags-info.component.ts ***!
  \************************************************************/
/*! exports provided: TagsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsInfoComponent", function() { return TagsInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");
/* harmony import */ var src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/local-storage.service */ "./src/app/service/local-storage.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var src_app_utils_GeneralUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/GeneralUtil */ "./src/app/utils/GeneralUtil.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_service_app_popup_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/app-popup-handler.service */ "./src/app/service/app-popup-handler.service.ts");












var TagsInfoComponent = /** @class */ (function () {
    function TagsInfoComponent(snackBar, popupService, dialog, tagsInfoService, localStorageService, router, changeDetectorRefs, authenticationService) {
        this.snackBar = snackBar;
        this.popupService = popupService;
        this.dialog = dialog;
        this.tagsInfoService = tagsInfoService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.changeDetectorRefs = changeDetectorRefs;
        this.authenticationService = authenticationService;
        this.typesOfsensors = [
            {
                key: 1, value: 'pH',
            },
            {
                key: 2, value: 'Temperature',
            },
            {
                key: 3, value: 'Force',
            },
            {
                key: 4, value: 'Barometer',
            },
            {
                key: 5, value: 'Accelerometer',
            },
        ];
        this.tableSize = 5;
        this.sessionsTableSize = 3;
        this.showPhGraph = false;
        this.showTempGraph = false;
        this.showForceGraph = false;
        this.showBarometerGraph = false;
        this.showXAccelerometerGraph = false;
        this.showYAccelerometerGraph = false;
        this.showZAccelerometerGraph = false;
        //*****************************************
        this.noSessionsFound = true;
        this.selectedSessionIdsInfo = [];
        this.searchFilter = '';
        this.searchFilterTimeout = null;
        this.allSelected = false;
    }
    TagsInfoComponent.prototype.ngOnInit = function () {
        this.displayGraph = false;
        this.displaySessions = false;
        this.displayedColumns = [
            'tagId',
            'lastActivity'
        ];
        this.sessionDisplayedColumns = [
            'sessionStart',
            'lastActivity',
            'note',
            'sensors',
            'showGraph'
        ];
        this.loadData = true;
        this.loadSessionData = true;
        this.pageNumber = 0;
        this.sessionsPageNumber = 0;
        this.getTagsInfo();
    };
    TagsInfoComponent.prototype.toggleAllSelection = function (e) {
        if (this.allSelected) {
            this.matSelectedEvent.source.options.forEach(function (item) { return item.select(); });
        }
        else {
            this.matSelectedEvent.source.options.forEach(function (item) { return item.deselect(); });
        }
    };
    TagsInfoComponent.prototype.optionClick = function () {
        var newStatus = true;
        this.matSelectedEvent.source.options.forEach(function (item) {
            if (!item.selected && item.value != 0) {
                newStatus = false;
            }
        });
        this.allSelected = newStatus;
        if (this.allSelected) {
            this.matSelectedEvent.source.options.forEach(function (item) { return item.select(); });
        }
        else {
            this.matSelectedEvent.source.options.forEach(function (item) {
                if (item.value == 0) {
                    item.deselect();
                }
            });
        }
    };
    TagsInfoComponent.prototype.checkSelection = function (e, session) {
        if (e.value.includes(0)) {
            this.allSelected = true;
        }
        else {
            this.allSelected = false;
        }
        session.sensors = e.value;
        this.matSelectedEvent = e;
    };
    TagsInfoComponent.prototype.showGraph = function (e, session) {
        var _this = this;
        console.log('UTC offset' + new Date().getTimezoneOffset() * 60000);
        this.showPhGraph = false;
        this.showTempGraph = false;
        this.showForceGraph = false;
        this.showBarometerGraph = false;
        this.showXAccelerometerGraph = false;
        this.showYAccelerometerGraph = false;
        this.showZAccelerometerGraph = false;
        this.loadData = true;
        // loop on session.sensors and based on the sensor key call the appropiate service 
        for (var i = 0; i < session.sensors.length; i++) {
            if (session.sensors[i] == 1) {
                // call ph service
                this.tagsInfoService.getPhData({
                    sessionId: session.sessionId
                }).subscribe(function (phInfoObj) {
                    var phInfo = [];
                    var startSessionTime = phInfoObj.startSessionStartTimestamp;
                    // convert start session time from UTC to the current timezone
                    startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                    var rate = phInfoObj.rate;
                    var startSessionAccumlative = startSessionTime;
                    phInfoObj.ph.forEach(function (phValue) {
                        phInfo.push([startSessionAccumlative, phValue]);
                        startSessionAccumlative += rate;
                    });
                    _this.phData = phInfo;
                    _this.tagsInfoService.setterPhData(_this.phData);
                    _this.showPhGraph = true;
                    _this.loadData = false;
                }, function (err) {
                    console.log(err);
                });
                this.changeDetectorRefs.detectChanges();
            }
            else if (session.sensors[i] == 2) {
                // call temp
                this.tagsInfoService.getTempData({
                    sessionId: session.sessionId
                }).subscribe(function (tempInfoObj) {
                    var tempInfo = [];
                    var startSessionTime = tempInfoObj.startSessionStartTimestamp;
                    // convert start session time from UTC to the current timezone
                    startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                    var rate = tempInfoObj.rate;
                    var startSessionAccumlative = startSessionTime;
                    tempInfoObj.temperature.forEach(function (temperatureValue) {
                        tempInfo.push([startSessionAccumlative, temperatureValue]);
                        startSessionAccumlative += rate;
                    });
                    _this.tempData = tempInfo;
                    _this.tagsInfoService.setterTempData(_this.tempData);
                    _this.showTempGraph = true;
                    _this.loadData = false;
                }, function (err) {
                    console.log(err);
                });
                this.changeDetectorRefs.detectChanges();
            }
            else if (session.sensors[i] == 3) {
                // call force
                this.tagsInfoService.getForceData({
                    sessionId: session.sessionId
                }).subscribe(function (forceInfoObj) {
                    var forceInfo = [];
                    var startSessionTime = forceInfoObj.startSessionStartTimestamp;
                    // convert start session time from UTC to the current timezone
                    startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                    var rate = forceInfoObj.rate;
                    var startSessionAccumlative = startSessionTime;
                    forceInfoObj.force.forEach(function (forceValue) {
                        forceInfo.push([startSessionAccumlative, forceValue]);
                        startSessionAccumlative += rate;
                    });
                    _this.forceData = forceInfo;
                    _this.tagsInfoService.setterForceData(_this.forceData);
                    _this.showForceGraph = true;
                    _this.loadData = false;
                }, function (err) {
                    console.log(err);
                });
            }
            else if (session.sensors[i] == 4) {
                // call barometer
                this.tagsInfoService.getBarometerData({
                    sessionId: session.sessionId
                }).subscribe(function (barometerInfoObj) {
                    var barometerInfo = [];
                    var startSessionTime = barometerInfoObj.startSessionStartTimestamp;
                    // convert start session time from UTC to the current timezone
                    startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                    var rate = barometerInfoObj.rate;
                    var startSessionAccumlative = startSessionTime;
                    barometerInfoObj.pressure.forEach(function (pressureValue) {
                        barometerInfo.push([startSessionAccumlative, pressureValue]);
                        startSessionAccumlative += rate;
                    });
                    _this.barometerData = barometerInfo;
                    _this.tagsInfoService.setterBarometerData(_this.barometerData);
                    _this.showBarometerGraph = true;
                    _this.loadData = false;
                }, function (err) {
                    console.log(err);
                });
            }
            else if (session.sensors[i] == 5) {
                // call accelerometer
                var start = Date.now();
                this.tagsInfoService.getXAccelerometerData({
                    sessionId: session.sessionId
                }).subscribe(function (accelerometerInfoObj) {
                    var xAcceleromterInfo = [];
                    var startSessionTime = accelerometerInfoObj.startSessionStartTimestamp;
                    // convert start session time from UTC to the current timezone
                    startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                    var rate = accelerometerInfoObj.rate;
                    var startSessionAccumlative = startSessionTime;
                    accelerometerInfoObj.x.forEach(function (xValue) {
                        xAcceleromterInfo.push([startSessionAccumlative, xValue]);
                        startSessionAccumlative += rate;
                    });
                    _this.xAccelerometerData = xAcceleromterInfo;
                    _this.tagsInfoService.setterXAccelerometerData(_this.xAccelerometerData);
                    _this.showXAccelerometerGraph = true;
                    _this.loadData = false;
                }, function (err) {
                    console.log(err);
                });
                this.tagsInfoService.getYAccelerometerData({
                    sessionId: session.sessionId
                }).subscribe(function (accelerometerInfoObj) {
                    var yAcceleromterInfo = [];
                    var startSessionTime = accelerometerInfoObj.startSessionStartTimestamp;
                    // convert start session time from UTC to the current timezone
                    startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                    var rate = accelerometerInfoObj.rate;
                    var startSessionAccumlative = startSessionTime;
                    accelerometerInfoObj.y.forEach(function (yValue) {
                        yAcceleromterInfo.push([startSessionAccumlative, yValue]);
                        startSessionAccumlative += rate;
                    });
                    _this.yAccelerometerData = yAcceleromterInfo;
                    _this.tagsInfoService.setterYAccelerometerData(_this.yAccelerometerData);
                    _this.showYAccelerometerGraph = true;
                    // this.loadData = false;
                }, function (err) {
                    console.log(err);
                });
                this.tagsInfoService.getZAccelerometerData({
                    sessionId: session.sessionId
                }).subscribe(function (accelerometerInfoObj) {
                    var zAcceleromterInfo = [];
                    var startSessionTime = accelerometerInfoObj.startSessionStartTimestamp;
                    // convert start session time from UTC to the current timezone
                    startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                    var rate = accelerometerInfoObj.rate;
                    var startSessionAccumlative = startSessionTime;
                    accelerometerInfoObj.z.forEach(function (zValue) {
                        zAcceleromterInfo.push([startSessionAccumlative, zValue]);
                        startSessionAccumlative += rate;
                    });
                    _this.zAccelerometerData = zAcceleromterInfo;
                    _this.tagsInfoService.setterZAccelerometerData(_this.zAccelerometerData);
                    _this.showZAccelerometerGraph = true;
                    // this.loadData = false;
                }, function (err) {
                    console.log(err);
                });
            }
        }
        this.displayGraph = true;
    };
    TagsInfoComponent.prototype.openNoteDialog = function (event, session) {
        var _this = this;
        event.stopPropagation();
        var dialogRef = this.popupService.openConfirmationDialog(session);
        dialogRef.afterClosed().subscribe(function (status) {
            if (status == "YES") {
                _this.getSessionsInfo(_this.selectedTagId);
                _this.openSnackbar('Note edited successfully.');
            }
        });
    };
    TagsInfoComponent.prototype.showNote = function (event, sessionId, info) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (info == null)
            info = '';
        var newNoteVal = prompt('Note text:', info);
        if (newNoteVal != null) {
            var saveNoteObj = {
                sessionId: sessionId,
                noteText: newNoteVal
            };
            this.tagsInfoService.setDeviceSessionNote(saveNoteObj).subscribe(function (data) {
                if (data.status == 201) {
                    _this.getSessionsInfo(_this.selectedTagId);
                    alert('Note edited successfully.');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    TagsInfoComponent.prototype.deleteSessions = function (event) {
        var _this = this;
        console.log(this.selectedTagId);
        event.stopPropagation();
        var msg = "Are you sure to delete all sessions data related to this tag with id: " + this.selectedTagId + " ?";
        var dialogRef = this.popupService.openDeleteConfirmationDialog(msg, 'Delete');
        dialogRef.afterClosed().subscribe(function (status) {
            if (status == "YES") {
                _this.loadData = true;
                var sessionsInfoObj = {
                    tagId: _this.selectedTagId,
                    sessionIds: _this.selectedSessionIdsInfo
                };
                _this.tagsInfoService.deleteTagSessions(sessionsInfoObj).subscribe(function (response) {
                    if (response.status == 204) {
                        _this.getSessionsInfo(_this.selectedTagId);
                        _this.openSnackbar('Sessions deleted successfully.');
                    }
                    else if (response.status == 404) {
                        _this.loadData = false;
                        _this.openSnackbar('Tag Id is not exist!');
                    }
                }, function (err) {
                    _this.loadData = false;
                    console.log(err);
                });
            }
        });
    };
    TagsInfoComponent.prototype.resetPatientsInfo = function () {
        this.loadData = true;
        this.pageNumber = 0;
        this.getTagsInfo();
    };
    TagsInfoComponent.prototype.showSession = function (e, tagInfo) {
        e.stopPropagation();
        this.loadData = true;
        this.selectedTagId = tagInfo.id;
        this.getSessionsInfo(tagInfo.id);
        this.displaySessions = true;
    };
    TagsInfoComponent.prototype.getTagsInfo = function () {
        var _this = this;
        this.reloadSpinnerTimeout();
        this.tagsInfoService.getTagsInfo({
            filter: this.searchFilter,
            pageNumber: this.pageNumber,
            pageSize: this.tableSize
        }).subscribe(function (tagsInfoObj) {
            _this.loadData = false;
            _this.tagsInfo = tagsInfoObj.tagsInfo;
            _this.paggingSize = tagsInfoObj.totalRecordCount;
            _this.tagsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.tagsInfo);
            _this.tagsDataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
        this.changeDetectorRefs.detectChanges();
    };
    TagsInfoComponent.prototype.getSessionsInfo = function (tagId) {
        var _this = this;
        this.reloadSessionsSpinnerTimeout();
        this.tagsInfoService.getSessionsInfo({
            tagId: tagId,
            pageNumber: this.sessionsPageNumber,
            pageSize: this.sessionsTableSize
        }).subscribe(function (sessionsInfoObj) {
            _this.loadData = false;
            if (sessionsInfoObj.totalRecordCount == 0) {
                _this.noSessionsFound = true;
            }
            else {
                _this.noSessionsFound = false;
                for (var i = 0; i < sessionsInfoObj.sessions.length; i++) {
                    _this.selectedSessionIdsInfo.push(sessionsInfoObj.sessions[i].sessionId);
                }
            }
            _this.sessionsInfo = sessionsInfoObj.sessions;
            _this.sessionsPaggingSize = sessionsInfoObj.totalRecordCount;
            _this.sessionDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.sessionsInfo);
            _this.sessionDataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
        this.changeDetectorRefs.detectChanges();
    };
    TagsInfoComponent.prototype.getPatientHistory = function (event, patientInfo) {
        event.stopPropagation();
        this.localStorageService.saveData("patientInfo", patientInfo);
        this.router.navigate(['/patient-history']);
    };
    TagsInfoComponent.prototype.changePage = function (event) {
        this.loadData = true;
        this.pageNumber = event.pageIndex;
        this.getTagsInfo();
    };
    TagsInfoComponent.prototype.sessionsChangePage = function (event) {
        this.loadData = true;
        this.sessionsPageNumber = event.pageIndex;
        this.getSessionsInfo(this.selectedTagId);
    };
    TagsInfoComponent.prototype.applyFilter = function (filterValue, event) {
        var _this = this;
        this.searchFilter = filterValue.trim();
        this.searchFilter = this.searchFilter.charAt(0).toLowerCase() + this.searchFilter.slice(1);
        clearTimeout(this.searchFilterTimeout);
        if (event.keyCode === 13) {
            this.pageNumber = 0;
            this.getTagsInfo();
        }
        else {
            this.searchFilterTimeout = setTimeout(function () {
                _this.pageNumber = 0;
                _this.getTagsInfo();
            }, 1000);
        }
    };
    TagsInfoComponent.prototype.reloadSpinnerTimeout = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadData = false;
        }, 10000);
    };
    TagsInfoComponent.prototype.reloadSessionsSpinnerTimeout = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadSessionData = false;
        }, 10000);
    };
    TagsInfoComponent.prototype.getDateWithTimeZone = function (strDate) {
        return src_app_utils_GeneralUtil__WEBPACK_IMPORTED_MODULE_8__["GeneralUtil"].getDateWithTimeZone(strDate);
    };
    TagsInfoComponent.prototype.openSnackbar = function (message) {
        this.snackBar.open(message, "", {
            duration: 3000,
            horizontalPosition: "left"
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], TagsInfoComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TagsInfoComponent.prototype, "searchElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('select'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"])
    ], TagsInfoComponent.prototype, "select", void 0);
    TagsInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tags-info',
            template: __webpack_require__(/*! ./tags-info.component.html */ "./src/app/component/tags-info/tags-info.component.html"),
            styles: [__webpack_require__(/*! ./tags-info.component.css */ "./src/app/component/tags-info/tags-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], src_app_service_app_popup_handler_service__WEBPACK_IMPORTED_MODULE_10__["AppPopupHandlerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_2__["TagsInfoService"], src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], TagsInfoComponent);
    return TagsInfoComponent;
}());



/***/ }),

/***/ "./src/app/component/temp-graph/temp-graph.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/temp-graph/temp-graph.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tempContainer {\n    /* height: 400px;\n    min-width: 310px; */\n    clear: right;\n    /* height: 100%;\n    width: 100%; */\n  }\n\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .export-button-style {\n    width: 15% ;\n    font-size: 12px;\n    color: white;\n    border-radius: 5%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n    margin-top: 3%;\n}\n\n  .export-button-downloading-style {\n  width: 15% ;\n  font-size: 12px;\n  color: rgb(24, 24, 24);\n  border-radius: 5%;\n  background: rgb(221, 221, 221);\n  border-color: white !important;\n  float: right;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RlbXAtZ3JhcGgvdGVtcC1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7d0JBQ29CO0lBQ3BCLGFBQWE7SUFDYjttQkFDZTtHQUNoQjs7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7R0FDVjs7RUFFRDtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixlQUFlO0NBQ2xCOztFQUVEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGVtcC1ncmFwaC90ZW1wLWdyYXBoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVtcENvbnRhaW5lciB7XG4gICAgLyogaGVpZ2h0OiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDMxMHB4OyAqL1xuICAgIGNsZWFyOiByaWdodDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7ICovXG4gIH1cblxuICAubG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBvdmVyZmxvdzogc2hvdztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmV4cG9ydC1idXR0b24tc3R5bGUge1xuICAgIHdpZHRoOiAxNSUgO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NCwxMzksMjEzLDEpO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5leHBvcnQtYnV0dG9uLWRvd25sb2FkaW5nLXN0eWxlIHtcbiAgd2lkdGg6IDE1JSA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDMlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/temp-graph/temp-graph.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/temp-graph/temp-graph.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"exportTempBtn\" mat-icon-button matTooltip=\"Export Data\" matTooltipPosition=\"left\" [ngClass]=\"exportBtnClass\" (click)=\"exportCSV()\">\n    {{exportText}}\n</button>   \n\n<div id=\"tempContainer\"></div>"

/***/ }),

/***/ "./src/app/component/temp-graph/temp-graph.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/temp-graph/temp-graph.component.ts ***!
  \**************************************************************/
/*! exports provided: TempGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempGraphComponent", function() { return TempGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/excel.service */ "./src/app/service/excel.service.ts");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");






var TempGraphComponent = /** @class */ (function () {
    function TempGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.exportText = 'Export CSV';
        this.exportBtnClass = 'export-button-style';
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                },
            ]
        };
    }
    TempGraphComponent.prototype.ngOnInit = function () {
        var chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["stockChart"]('tempContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Temperature' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var drawData = this.tagsInfoService.getterTempData();
        chart.series[0].setData(drawData, true, true);
        chart.hideLoading();
    };
    TempGraphComponent.prototype.exportCSV = function () {
        var _this = this;
        this.exportText = 'Downloading...';
        this.exportBtnClass = 'export-button-downloading-style';
        var exportbtnElement = document.getElementById('exportTempBtn');
        exportbtnElement.disabled = true;
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isDownloaded;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.excelService.generateExcel(this.tagsInfoService.getterTempData(), 'Temperature')];
                    case 1:
                        isDownloaded = _a.sent();
                        console.log(isDownloaded);
                        if (isDownloaded) {
                            this.exportText = 'Export CSV';
                            this.exportBtnClass = 'export-button-style';
                            exportbtnElement.disabled = false;
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tempData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TempGraphComponent.prototype, "tempData", void 0);
    TempGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'temp-graph',
            template: __webpack_require__(/*! ./temp-graph.component.html */ "./src/app/component/temp-graph/temp-graph.component.html"),
            styles: [__webpack_require__(/*! ./temp-graph.component.css */ "./src/app/component/temp-graph/temp-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__["TagsInfoService"]])
    ], TempGraphComponent);
    return TempGraphComponent;
}());



/***/ }),

/***/ "./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#xAccelerometerContainer {\n    /* height: 400px;\n    min-width: 310px; */\n    clear: right;\n    /* height: 100%;\n    width: 100%; */\n  }\n\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .export-button-style {\n    width: 15% ;\n    font-size: 12px;\n    color: white;\n    border-radius: 5%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n    margin-top: 3%;\n}\n\n  .export-button-downloading-style {\n  width: 15% ;\n  font-size: 12px;\n  color: rgb(24, 24, 24);\n  border-radius: 5%;\n  background: rgb(221, 221, 221);\n  border-color: white !important;\n  float: right;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3gtYWNjZWxlcm9tZXRlci1ncmFwaC94LWFjY2VsZXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3dCQUNvQjtJQUNwQixhQUFhO0lBQ2I7bUJBQ2U7R0FDaEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7RUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3gtYWNjZWxlcm9tZXRlci1ncmFwaC94LWFjY2VsZXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN4QWNjZWxlcm9tZXRlckNvbnRhaW5lciB7XG4gICAgLyogaGVpZ2h0OiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDMxMHB4OyAqL1xuICAgIGNsZWFyOiByaWdodDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7ICovXG4gIH1cblxuICAubG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBvdmVyZmxvdzogc2hvdztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmV4cG9ydC1idXR0b24tc3R5bGUge1xuICAgIHdpZHRoOiAxNSUgO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NCwxMzksMjEzLDEpO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5leHBvcnQtYnV0dG9uLWRvd25sb2FkaW5nLXN0eWxlIHtcbiAgd2lkdGg6IDE1JSA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDMlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"exportXAccelerometerBtn\" mat-icon-button matTooltip=\"Export Data\" matTooltipPosition=\"left\" [ngClass]=\"exportBtnClass\" (click)=\"exportCSV()\">\n    {{exportText}}\n</button>   \n\n<div id=\"xAccelerometerContainer\" ></div>\n "

/***/ }),

/***/ "./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.ts ***!
  \************************************************************************************/
/*! exports provided: XAccelerometerGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XAccelerometerGraphComponent", function() { return XAccelerometerGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/excel.service */ "./src/app/service/excel.service.ts");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");






var XAccelerometerGraphComponent = /** @class */ (function () {
    function XAccelerometerGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.exportText = 'Export CSV';
        this.exportBtnClass = 'export-button-style';
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                },
            ]
        };
    }
    XAccelerometerGraphComponent.prototype.ngOnInit = function () {
        var chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["stockChart"]('xAccelerometerContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Accelerometer - x' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var drawData = this.tagsInfoService.getterXAccelerometerData();
        chart.series[0].setData(drawData, true, true);
        chart.hideLoading();
    };
    XAccelerometerGraphComponent.prototype.exportCSV = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var exportbtnElement;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.exportText = 'Downloading...';
                this.exportBtnClass = 'export-button-downloading-style';
                exportbtnElement = document.getElementById('exportXAccelerometerBtn');
                exportbtnElement.disabled = true;
                setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var isDownloaded;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.excelService.generateExcel(this.tagsInfoService.getterXAccelerometerData(), 'Accelerometer-X')];
                            case 1:
                                isDownloaded = _a.sent();
                                console.log(isDownloaded);
                                if (isDownloaded) {
                                    this.exportText = 'Export CSV';
                                    this.exportBtnClass = 'export-button-style';
                                    exportbtnElement.disabled = false;
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, 200);
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('xAccelerometerData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], XAccelerometerGraphComponent.prototype, "xAccelerometerData", void 0);
    XAccelerometerGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'x-accelerometer-graph',
            template: __webpack_require__(/*! ./x-accelerometer-graph.component.html */ "./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.html"),
            styles: [__webpack_require__(/*! ./x-accelerometer-graph.component.css */ "./src/app/component/x-accelerometer-graph/x-accelerometer-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__["TagsInfoService"]])
    ], XAccelerometerGraphComponent);
    return XAccelerometerGraphComponent;
}());



/***/ }),

/***/ "./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#yAccelerometerContainer {\n    /* height: 400px;\n    min-width: 310px; */\n    clear: right;\n    /* height: 100%;\n    width: 100%; */\n  }\n\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .export-button-style {\n    width: 15% ;\n    font-size: 12px;\n    color: white;\n    border-radius: 5%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n    margin-top: 3%;\n}\n\n  .export-button-downloading-style {\n  width: 15% ;\n  font-size: 12px;\n  color: rgb(24, 24, 24);\n  border-radius: 5%;\n  background: rgb(221, 221, 221);\n  border-color: white !important;\n  float: right;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ktYWNjZWxlcm9tZXRlci1ncmFwaC95LWFjY2VsZXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3dCQUNvQjtJQUNwQixhQUFhO0lBQ2I7bUJBQ2U7R0FDaEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7RUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3ktYWNjZWxlcm9tZXRlci1ncmFwaC95LWFjY2VsZXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN5QWNjZWxlcm9tZXRlckNvbnRhaW5lciB7XG4gICAgLyogaGVpZ2h0OiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDMxMHB4OyAqL1xuICAgIGNsZWFyOiByaWdodDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7ICovXG4gIH1cblxuICAubG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBvdmVyZmxvdzogc2hvdztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmV4cG9ydC1idXR0b24tc3R5bGUge1xuICAgIHdpZHRoOiAxNSUgO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NCwxMzksMjEzLDEpO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5leHBvcnQtYnV0dG9uLWRvd25sb2FkaW5nLXN0eWxlIHtcbiAgd2lkdGg6IDE1JSA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDMlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"exportYAccelerometerBtn\" mat-icon-button matTooltip=\"Export Data\" matTooltipPosition=\"left\" [ngClass]=\"exportBtnClass\" (click)=\"exportCSV()\">\n    {{exportText}}\n</button>   \n\n<div id=\"yAccelerometerContainer\" ></div>\n "

/***/ }),

/***/ "./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.ts ***!
  \************************************************************************************/
/*! exports provided: YAccelerometerGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAccelerometerGraphComponent", function() { return YAccelerometerGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/excel.service */ "./src/app/service/excel.service.ts");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");






var YAccelerometerGraphComponent = /** @class */ (function () {
    function YAccelerometerGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.exportText = 'Export CSV';
        this.exportBtnClass = 'export-button-style';
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                },
            ]
        };
    }
    YAccelerometerGraphComponent.prototype.ngOnInit = function () {
        var chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["stockChart"]('yAccelerometerContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Accelerometer - y' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var drawData = this.tagsInfoService.getterYAccelerometerData();
        chart.series[0].setData(drawData, true, true);
        chart.hideLoading();
    };
    YAccelerometerGraphComponent.prototype.exportCSV = function () {
        var _this = this;
        this.exportText = 'Downloading...';
        this.exportBtnClass = 'export-button-downloading-style';
        var exportbtnElement = document.getElementById('exportYAccelerometerBtn');
        exportbtnElement.disabled = true;
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isDownloaded;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.excelService.generateExcel(this.tagsInfoService.getterYAccelerometerData(), 'Accelerometer-Y')];
                    case 1:
                        isDownloaded = _a.sent();
                        console.log(isDownloaded);
                        if (isDownloaded) {
                            this.exportText = 'Export CSV';
                            this.exportBtnClass = 'export-button-style';
                            exportbtnElement.disabled = false;
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('yAccelerometerData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], YAccelerometerGraphComponent.prototype, "yAccelerometerData", void 0);
    YAccelerometerGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'y-accelerometer-graph',
            template: __webpack_require__(/*! ./y-accelerometer-graph.component.html */ "./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.html"),
            styles: [__webpack_require__(/*! ./y-accelerometer-graph.component.css */ "./src/app/component/y-accelerometer-graph/y-accelerometer-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__["TagsInfoService"]])
    ], YAccelerometerGraphComponent);
    return YAccelerometerGraphComponent;
}());



/***/ }),

/***/ "./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#zAccelerometerContainer {\n    /* height: 400px;\n    min-width: 310px; */\n    clear: right;\n    /* height: 100%;\n    width: 100%; */\n  }\n\n  .loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .export-button-style {\n    width: 15% ;\n    font-size: 12px;\n    color: white;\n    border-radius: 5%;\n    background: rgba(74,139,213,1);\n    border-color: white !important;\n    float: right;\n    margin-top: 3%;\n}\n\n  .export-button-downloading-style {\n  width: 15% ;\n  font-size: 12px;\n  color: rgb(24, 24, 24);\n  border-radius: 5%;\n  background: rgb(221, 221, 221);\n  border-color: white !important;\n  float: right;\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3otYWNjZWxlcm9tZXRlci1ncmFwaC96LWFjY2VsZXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3dCQUNvQjtJQUNwQixhQUFhO0lBQ2I7bUJBQ2U7R0FDaEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7RUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3otYWNjZWxlcm9tZXRlci1ncmFwaC96LWFjY2VsZXJvbWV0ZXItZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN6QWNjZWxlcm9tZXRlckNvbnRhaW5lciB7XG4gICAgLyogaGVpZ2h0OiA0MDBweDtcbiAgICBtaW4td2lkdGg6IDMxMHB4OyAqL1xuICAgIGNsZWFyOiByaWdodDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7ICovXG4gIH1cblxuICAubG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBvdmVyZmxvdzogc2hvdztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmV4cG9ydC1idXR0b24tc3R5bGUge1xuICAgIHdpZHRoOiAxNSUgO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NCwxMzksMjEzLDEpO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5leHBvcnQtYnV0dG9uLWRvd25sb2FkaW5nLXN0eWxlIHtcbiAgd2lkdGg6IDE1JSA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDMlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"exportZAccelerometerBtn\" mat-icon-button matTooltip=\"Export Data\" matTooltipPosition=\"left\" [ngClass]=\"exportBtnClass\" (click)=\"exportCSV()\">\n    {{exportText}}\n</button>   \n\n<div id=\"zAccelerometerContainer\" ></div>\n "

/***/ }),

/***/ "./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.ts ***!
  \************************************************************************************/
/*! exports provided: ZAccelerometerGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZAccelerometerGraphComponent", function() { return ZAccelerometerGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/excel.service */ "./src/app/service/excel.service.ts");
/* harmony import */ var src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tags-info.service */ "./src/app/service/tags-info.service.ts");






var ZAccelerometerGraphComponent = /** @class */ (function () {
    function ZAccelerometerGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.exportText = 'Export CSV';
        this.exportBtnClass = 'export-button-style';
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                },
            ]
        };
    }
    ZAccelerometerGraphComponent.prototype.ngOnInit = function () {
        var chart = highcharts_highstock__WEBPACK_IMPORTED_MODULE_2__["stockChart"]('zAccelerometerContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Accelerometer - z' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var drawData = this.tagsInfoService.getterZAccelerometerData();
        chart.series[0].setData(drawData, true, true);
        chart.hideLoading();
    };
    ZAccelerometerGraphComponent.prototype.exportCSV = function () {
        var _this = this;
        this.exportText = 'Downloading...';
        this.exportBtnClass = 'export-button-downloading-style';
        var exportbtnElement = document.getElementById('exportZAccelerometerBtn');
        exportbtnElement.disabled = true;
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isDownloaded;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.excelService.generateExcel(this.tagsInfoService.getterZAccelerometerData(), 'Accelerometer-Z')];
                    case 1:
                        isDownloaded = _a.sent();
                        console.log(isDownloaded);
                        if (isDownloaded) {
                            this.exportText = 'Export CSV';
                            this.exportBtnClass = 'export-button-style';
                            exportbtnElement.disabled = false;
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('zAccelerometerData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZAccelerometerGraphComponent.prototype, "zAccelerometerData", void 0);
    ZAccelerometerGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'z-accelerometer-graph',
            template: __webpack_require__(/*! ./z-accelerometer-graph.component.html */ "./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.html"),
            styles: [__webpack_require__(/*! ./z-accelerometer-graph.component.css */ "./src/app/component/z-accelerometer-graph/z-accelerometer-graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], src_app_service_tags_info_service__WEBPACK_IMPORTED_MODULE_4__["TagsInfoService"]])
    ], ZAccelerometerGraphComponent);
    return ZAccelerometerGraphComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/service/app-popup-handler.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/app-popup-handler.service.ts ***!
  \******************************************************/
/*! exports provided: AppPopupHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPopupHandlerService", function() { return AppPopupHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/confirmation-dialog/confirmation-dialog.component */ "./src/app/component/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _component_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/delete-confirmation-dialog/delete-confirmation-dialog.component */ "./src/app/component/delete-confirmation-dialog/delete-confirmation-dialog.component.ts");





var AppPopupHandlerService = /** @class */ (function () {
    function AppPopupHandlerService(dialogService) {
        this.dialogService = dialogService;
    }
    AppPopupHandlerService.prototype.openConfirmationDialog = function (session) {
        var dialogConfig = this.initPopupConfig({ 'session': session });
        return this.dialogService.open(_component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], dialogConfig);
    };
    AppPopupHandlerService.prototype.openDeleteConfirmationDialog = function (msg, action) {
        var dialogConfig = this.initPopupConfig({ 'message': msg, 'action': action });
        return this.dialogService.open(_component_delete_confirmation_dialog_delete_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmationDialogComponent"], dialogConfig);
    };
    AppPopupHandlerService.prototype.initPopupConfig = function (data) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.minWidth = "30%";
        dialogConfig.minHeight = "30%";
        dialogConfig.autoFocus = true;
        dialogConfig.data = data;
        return dialogConfig;
    };
    AppPopupHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AppPopupHandlerService);
    return AppPopupHandlerService;
}());



/***/ }),

/***/ "./src/app/service/authentication-interceptor.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/service/authentication-interceptor.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationInterceptor", function() { return AuthenticationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");






var AuthenticationInterceptor = /** @class */ (function () {
    function AuthenticationInterceptor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthenticationInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401) {
                _this.authenticationService.logout();
                _this.router.navigate(['/login']);
            }
            var error = err.error || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    AuthenticationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationInterceptor);
    return AuthenticationInterceptor;
}());



/***/ }),

/***/ "./src/app/service/authentication.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/service/authentication.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment.service */ "./src/app/service/environment.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, envService, cookieService) {
        this.http = http;
        this.envService = envService;
        this.cookieService = cookieService;
        this.TOKEN_KEY = "align_auth_token";
        this.remoteUrl = this.envService.getServerEndPoint();
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (obs) {
            _this.http.post('https://align-server.twi-cloud-services.com/user/login', { 'username': username, 'password': password }, { observe: "response" }).subscribe(function (res) {
                console.log(res);
                if (res.body.code == 200) {
                    console.log('http status is 200');
                    console.log('res body -> ' + res.body);
                    _this.cookieService.set(_this.TOKEN_KEY, res.body.token, undefined, undefined, undefined, undefined, "Strict");
                    // this.cookieService.set(this.ROLE, res.role, undefined,undefined,undefined,undefined,"Strict");
                    obs.next();
                }
                else if (res.body.code == 208) {
                    console.log(res);
                    obs.error(res);
                }
            }, function (err) {
                obs.error(err);
            }, function () {
                obs.complete();
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove cookie
        this.cookieService.delete(this.TOKEN_KEY);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.cookieService.check(this.TOKEN_KEY);
    };
    AuthenticationService.prototype.getUserToken = function () {
        var token = this.cookieService.get(this.TOKEN_KEY);
        return token;
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/environment.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/environment.service.ts ***!
  \************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var EnvironmentService = /** @class */ (function () {
    function EnvironmentService() {
    }
    EnvironmentService.prototype.getServerEndPoint = function () {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverEndPoint;
    };
    EnvironmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnvironmentService);
    return EnvironmentService;
}());



/***/ }),

/***/ "./src/app/service/excel.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/excel.service.ts ***!
  \******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs/dist/exceljs.min.js */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);




var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.generateExcel = function (data, sensorName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, workbook, worksheet, i, fileName, excelBuffer, excelData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            filename: './streamed-workbook.xlsx',
                            useStyles: true,
                            useSharedStrings: true
                        };
                        workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__["Workbook"](options);
                        worksheet = workbook.addWorksheet(sensorName + '-measures', { properties: { tabColor: { argb: 'FFC0000' } } });
                        worksheet.columns = [
                            { header: 'Timestamp', key: 'timestamp', width: 30 },
                            { header: 'Measure', key: 'measure', width: 10 }
                        ];
                        for (i = 0; i < data.length; i++) {
                            worksheet.addRow({ timestamp: data[i][0], measure: data[i][1] });
                        }
                        fileName = sensorName + "_file.xlsx";
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 1:
                        excelBuffer = _a.sent();
                        excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](excelData, fileName);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/service/local-storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/local-storage.service.ts ***!
  \**************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.saveData = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getData = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/service/tags-info.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/tags-info.service.ts ***!
  \**********************************************/
/*! exports provided: TagsInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsInfoService", function() { return TagsInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environment.service */ "./src/app/service/environment.service.ts");





var TagsInfoService = /** @class */ (function () {
    function TagsInfoService(envService, http, authService) {
        this.envService = envService;
        this.http = http;
        this.authService = authService;
        this.remoteUrl = this.envService.getServerEndPoint();
    }
    TagsInfoService.prototype.getRequestOptions = function () {
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.authService.getUserToken()
            })
        };
        return requestOptions;
    };
    TagsInfoService.prototype.setterPhData = function (phData) {
        this.phData = phData;
    };
    TagsInfoService.prototype.getterPhData = function () {
        return this.phData;
    };
    TagsInfoService.prototype.setterTempData = function (tempData) {
        this.tempData = tempData;
    };
    TagsInfoService.prototype.getterTempData = function () {
        return this.tempData;
    };
    TagsInfoService.prototype.setterForceData = function (forceData) {
        this.forceData = forceData;
    };
    TagsInfoService.prototype.getterForceData = function () {
        return this.forceData;
    };
    TagsInfoService.prototype.setterBarometerData = function (barometerData) {
        this.barometerData = barometerData;
    };
    TagsInfoService.prototype.getterBarometerData = function () {
        return this.barometerData;
    };
    TagsInfoService.prototype.setterXAccelerometerData = function (xAccelerometerData) {
        this.xAccelerometerData = xAccelerometerData;
    };
    TagsInfoService.prototype.getterXAccelerometerData = function () {
        return this.xAccelerometerData;
    };
    TagsInfoService.prototype.setterYAccelerometerData = function (yAccelerometerData) {
        this.yAccelerometerData = yAccelerometerData;
    };
    TagsInfoService.prototype.getterYAccelerometerData = function () {
        return this.yAccelerometerData;
    };
    TagsInfoService.prototype.setterZAccelerometerData = function (zAccelerometerData) {
        this.zAccelerometerData = zAccelerometerData;
    };
    TagsInfoService.prototype.getterZAccelerometerData = function () {
        return this.zAccelerometerData;
    };
    TagsInfoService.prototype.getTagsInfo = function (tagsInfo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', tagsInfo.pageNumber)
            .set('size', tagsInfo.pageSize)
            .set('searchText', tagsInfo.filter);
        var requestOptions = {
            params: params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.authService.getUserToken()
            })
        };
        return this.http.get(this.remoteUrl + '/tag', requestOptions);
    };
    TagsInfoService.prototype.deleteTagSessions = function (sessionsInfoObj) {
        var sessionIdsObj = {
            sessionIds: sessionsInfoObj.sessionIds
        };
        return this.http.post(this.remoteUrl + ("/tag/" + sessionsInfoObj.tagId + "/sessions"), sessionIdsObj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.authService.getUserToken()
            }),
            observe: 'response'
        });
    };
    TagsInfoService.prototype.getSessionsInfo = function (sessionsInfo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', sessionsInfo.pageNumber)
            .set('size', sessionsInfo.pageSize);
        var requestOptions = {
            params: params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.authService.getUserToken()
            })
        };
        return this.http.get(this.remoteUrl + ("/tag/" + sessionsInfo.tagId + "/sessions"), requestOptions);
    };
    TagsInfoService.prototype.setDeviceSessionNote = function (saveNoteObj) {
        var noteText = { note: saveNoteObj.noteText };
        return this.http.post(this.remoteUrl + ("/session/" + saveNoteObj.sessionId + "/notes"), noteText, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Authorization": "Bearer " + this.authService.getUserToken()
            }),
            observe: 'response'
        });
    };
    TagsInfoService.prototype.getPhData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/ph"), this.getRequestOptions());
    };
    TagsInfoService.prototype.getTempData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/temperature"), this.getRequestOptions());
    };
    TagsInfoService.prototype.getForceData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/force"), this.getRequestOptions());
    };
    TagsInfoService.prototype.getBarometerData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/pressure"), this.getRequestOptions());
    };
    TagsInfoService.prototype.getXAccelerometerData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/accelerometerX"), this.getRequestOptions());
    };
    TagsInfoService.prototype.getYAccelerometerData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/accelerometerY"), this.getRequestOptions());
    };
    TagsInfoService.prototype.getZAccelerometerData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/accelerometerZ"), this.getRequestOptions());
    };
    TagsInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_environment_service__WEBPACK_IMPORTED_MODULE_4__["EnvironmentService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], TagsInfoService);
    return TagsInfoService;
}());



/***/ }),

/***/ "./src/app/utils/GeneralUtil.ts":
/*!**************************************!*\
  !*** ./src/app/utils/GeneralUtil.ts ***!
  \**************************************/
/*! exports provided: GeneralUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralUtil", function() { return GeneralUtil; });
var GeneralUtil = /** @class */ (function () {
    function GeneralUtil() {
    }
    GeneralUtil.getDateWithTimeZone = function (strDate) {
        if (strDate) {
            var date = new Date(parseInt(strDate));
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = (hours != 0) ? hours : 12;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            return date.toLocaleDateString() + " " + hours + ':' + minutes + ' ' + ampm;
        }
        return null;
    };
    return GeneralUtil;
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
var environment = {
    production: false,
    serverEndPoint: "https://align-server.twi-cloud-services.com/api/device"
};


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hazem.ashraf/eb-angular-cicd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map