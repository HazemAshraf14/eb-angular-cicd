import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TagsInfoComponent } from './component/tags-info/tags-info.component';
// import { GraphComponent } from './component/ph-graph/ph-graph.component';
var routes = [
    { component: LoginComponent, path: "login" },
    { component: TagsInfoComponent, path: "tags-info" },
    // { component: GraphComponent, path: "graph", canActivate: [AuthenticationGuard] },
    { path: "**", redirectTo: 'tags-info' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map