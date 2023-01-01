import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
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
    AuthenticationGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService, Router])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());
export { AuthenticationGuard };
//# sourceMappingURL=authentication.guard.js.map