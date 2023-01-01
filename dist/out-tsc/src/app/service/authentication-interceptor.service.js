import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
var AuthenticationInterceptor = /** @class */ (function () {
    function AuthenticationInterceptor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthenticationInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError(function (err) {
            if (err.status === 401) {
                _this.authenticationService.logout();
                _this.router.navigate(['/login']);
            }
            var error = err.error || err.statusText;
            return throwError(error);
        }));
    };
    AuthenticationInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService, Router])
    ], AuthenticationInterceptor);
    return AuthenticationInterceptor;
}());
export { AuthenticationInterceptor };
//# sourceMappingURL=authentication-interceptor.service.js.map