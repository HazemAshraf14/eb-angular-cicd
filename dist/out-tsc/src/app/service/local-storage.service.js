import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.saveData = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getData = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    LocalStorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LocalStorageService);
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=local-storage.service.js.map