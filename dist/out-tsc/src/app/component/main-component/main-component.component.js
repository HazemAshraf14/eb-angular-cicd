import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
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
    MainComponentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-main-component',
            templateUrl: './main-component.component.html',
            styleUrls: ['./main-component.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthenticationService])
    ], MainComponentComponent);
    return MainComponentComponent;
}());
export { MainComponentComponent };
//# sourceMappingURL=main-component.component.js.map