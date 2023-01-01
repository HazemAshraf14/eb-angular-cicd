import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { TagsInfoComponent } from './component/tags-info/tags-info.component';
import { AuthenticationInterceptor } from './service/authentication-interceptor.service';
import { PhGraphComponent } from './component/ph-graph/ph-graph.component';
import { TempGraphComponent } from './component/temp-graph/temp-graph.component';
import { ForceGraphComponent } from './component/force-graph/force-graph.component';
import { BarometerGraphComponent } from './component/barometer-graph/barometer-graph.component';
import { XAccelerometerGraphComponent } from './component/x-accelerometer-graph/x-accelerometer-graph.component';
import { YAccelerometerGraphComponent } from './component/y-accelerometer-graph/y-accelerometer-graph.component';
import { ZAccelerometerGraphComponent } from './component/z-accelerometer-graph/z-accelerometer-graph.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                MainComponentComponent,
                TagsInfoComponent,
                PhGraphComponent,
                TempGraphComponent,
                ForceGraphComponent,
                BarometerGraphComponent,
                XAccelerometerGraphComponent,
                YAccelerometerGraphComponent,
                ZAccelerometerGraphComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule,
                MaterialModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                BrowserAnimationsModule
            ],
            providers: [CookieService,
                { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
            entryComponents: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map