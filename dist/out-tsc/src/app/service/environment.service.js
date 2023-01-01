import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
var EnvironmentService = /** @class */ (function () {
    function EnvironmentService() {
    }
    EnvironmentService.prototype.getServerEndPoint = function () {
        return environment.serverEndPoint;
    };
    EnvironmentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EnvironmentService);
    return EnvironmentService;
}());
export { EnvironmentService };
//# sourceMappingURL=environment.service.js.map