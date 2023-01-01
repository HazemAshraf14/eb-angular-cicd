import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.usernameControl = new FormControl('', [Validators.required]);
        this.passwordControl = new FormControl('', [Validators.required]);
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
            _this.isInvalidCredentials = false;
            _this.router.navigate(['/tags-info']);
        }, function (err) {
            _this.isInvalidCredentials = true;
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map