import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { EnvironmentService } from './environment.service';
var TagsInfoService = /** @class */ (function () {
    function TagsInfoService(envService, http, authService) {
        this.envService = envService;
        this.http = http;
        this.authService = authService;
        this.remoteUrl = this.envService.getServerEndPoint();
    }
    TagsInfoService.prototype.getRequestOptions = function () {
        var requestOptions = {
            headers: new HttpHeaders({
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
        var params = new HttpParams()
            .set('page', tagsInfo.pageNumber)
            .set('size', tagsInfo.pageSize)
            .set('searchText', tagsInfo.filter);
        return this.http.get(this.remoteUrl + '/tag', { params: params });
    };
    TagsInfoService.prototype.getSessionsInfo = function (sessionsInfo) {
        var params = new HttpParams()
            .set('page', sessionsInfo.pageNumber)
            .set('size', sessionsInfo.pageSize);
        return this.http.get(this.remoteUrl + ("/tag/" + sessionsInfo.tagId + "/sessions"), { params: params });
    };
    TagsInfoService.prototype.setDeviceSessionNote = function (saveNoteObj) {
        var noteText = { note: saveNoteObj.noteText };
        return this.http.post(this.remoteUrl + ("/session/" + saveNoteObj.sessionId + "/notes"), noteText, this.getRequestOptions());
    };
    TagsInfoService.prototype.getPhData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/ph"));
    };
    TagsInfoService.prototype.getTempData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/temperature"));
    };
    TagsInfoService.prototype.getForceData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/force"));
    };
    TagsInfoService.prototype.getBarometerData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/pressure"));
    };
    TagsInfoService.prototype.getAccelerometerData = function (sessionsId) {
        return this.http.get(this.remoteUrl + ("/session/" + sessionsId.sessionId + "/accelerometer"));
    };
    TagsInfoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [EnvironmentService, HttpClient, AuthenticationService])
    ], TagsInfoService);
    return TagsInfoService;
}());
export { TagsInfoService };
//# sourceMappingURL=tags-info.service.js.map