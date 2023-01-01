import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, envService, cookieService) {
        this.http = http;
        this.envService = envService;
        this.cookieService = cookieService;
        this.TOKEN_KEY = "i_pill_auth_token";
        this.ROLE = "i_pill_role";
        this.remoteUrl = this.envService.getServerEndPoint();
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return new Observable(function (obs) {
            _this.http.post(_this.remoteUrl + '/vendor/login', { 'email': email, 'password': password }).subscribe(function (res) {
                if (res.code == 6) {
                    _this.cookieService.set(_this.TOKEN_KEY, res.authCode, undefined, undefined, undefined, undefined, "Strict");
                    _this.cookieService.set(_this.ROLE, res.role, undefined, undefined, undefined, undefined, "Strict");
                    obs.next();
                }
                else if (res.error) {
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
    AuthenticationService.prototype.getRole = function () {
        var role = this.cookieService.get(this.ROLE);
        return role;
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, EnvironmentService, CookieService])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map