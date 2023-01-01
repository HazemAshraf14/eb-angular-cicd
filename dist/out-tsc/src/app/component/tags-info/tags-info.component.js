import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { TagsInfoService } from 'src/app/service/tags-info.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MatSelect } from '@angular/material/select';
var TagsInfoComponent = /** @class */ (function () {
    function TagsInfoComponent(tagsInfoService, localStorageService, router, changeDetectorRefs, authenticationService) {
        this.tagsInfoService = tagsInfoService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.changeDetectorRefs = changeDetectorRefs;
        this.authenticationService = authenticationService;
        this.typesOfsensors = [
            {
                key: 1, value: 'pH',
            },
            {
                key: 2, value: 'Temperature',
            },
            {
                key: 3, value: 'Force',
            },
            {
                key: 4, value: 'Barometer',
            },
            {
                key: 5, value: 'Accelerometer',
            },
        ];
        this.tableSize = 5;
        this.sessionsTableSize = 3;
        this.showPhGraph = false;
        this.showTempGraph = false;
        this.showForceGraph = false;
        this.showBarometerGraph = false;
        this.showXAccelerometerGraph = false;
        this.showYAccelerometerGraph = false;
        this.showZAccelerometerGraph = false;
        //*****************************************
        this.searchFilter = '';
        this.searchFilterTimeout = null;
        this.allSelected = false;
    }
    TagsInfoComponent.prototype.ngOnInit = function () {
        this.displayGraph = false;
        this.displaySessions = false;
        this.displayedColumns = [
            'tagId',
            'lastActivity'
        ];
        this.sessionDisplayedColumns = [
            'sessionStart',
            'lastActivity',
            'note',
            'sensors',
            'showGraph'
        ];
        this.loadData = true;
        this.loadSessionData = true;
        this.pageNumber = 0;
        this.sessionsPageNumber = 0;
        this.getTagsInfo();
    };
    TagsInfoComponent.prototype.logoutClick = function () {
        // this.authenticationService.logout();
        // this.router.navigate(['/login']);
    };
    TagsInfoComponent.prototype.toggleAllSelection = function (e) {
        console.log('toggleAllSelection');
        if (this.allSelected) {
            this.matSelectedEvent.source.options.forEach(function (item) { return item.select(); });
        }
        else {
            this.matSelectedEvent.source.options.forEach(function (item) { return item.deselect(); });
        }
    };
    TagsInfoComponent.prototype.optionClick = function () {
        console.log('optionClick');
        var newStatus = true;
        this.matSelectedEvent.source.options.forEach(function (item) {
            if (!item.selected && item.value != 0) {
                newStatus = false;
            }
        });
        this.allSelected = newStatus;
        if (this.allSelected) {
            this.matSelectedEvent.source.options.forEach(function (item) { return item.select(); });
        }
        else {
            this.matSelectedEvent.source.options.forEach(function (item) {
                if (item.value == 0) {
                    item.deselect();
                }
            });
        }
    };
    TagsInfoComponent.prototype.checkSelection = function (e, session) {
        if (e.value.includes(0)) {
            this.allSelected = true;
        }
        else {
            this.allSelected = false;
        }
        session.sensors = e.value;
        this.matSelectedEvent = e;
    };
    TagsInfoComponent.prototype.showGraph = function (e, session) {
        var _this = this;
        console.log('session Obj -> ' + JSON.stringify(session));
        var _loop_1 = function (i) {
            if (session.sensors[i] == 1) {
                // call ph service
                // let data = [];
                // let date = Date.now();
                // for (let i = 0; i < 800000; i++) {
                //   let val = Math.random() * 5000;
                //   date += 60000;
                //   data.push([date, val]);
                // }
                // this.phData = data;
                // this.tagsInfoService.setterPhData(this.phData);
                // this.showPhGraph = true;
                // this.localStorageService.saveData("phData", this.phData);
                this_1.tagsInfoService.getPhData({
                    sessionId: session.sessionId
                }).subscribe(function (phInfoObj) {
                    var phInfo = [];
                    phInfoObj.forEach(function (point) {
                        phInfo.push([point.timestamp, point.ph]);
                    });
                    _this.phData = phInfo;
                    _this.tagsInfoService.setterPhData(_this.phData);
                    _this.showPhGraph = true;
                }, function (err) {
                    console.log(err);
                });
            }
            else if (session.sensors[i] == 2) {
                // call temp
                // let data = [];
                // let date = Date.now();
                // for (let i = 0; i < 800000; i++) {
                //   let val = Math.random() * 5000;
                //   date += 60000;
                //   data.push([date, val]);
                // }
                // this.tempData = data;
                // this.tagsInfoService.setterTempData(this.tempData);
                // this.showTempGraph = true;
                this_1.tagsInfoService.getTempData({
                    sessionId: session.sessionId
                }).subscribe(function (tempInfoObj) {
                    var tempInfo = [];
                    tempInfoObj.forEach(function (point) {
                        tempInfo.push([point.timestamp, point.temperature]);
                    });
                    _this.tempData = tempInfo;
                    _this.tagsInfoService.setterTempData(_this.tempData);
                    _this.showTempGraph = true;
                }, function (err) {
                    console.log(err);
                });
            }
            else if (session.sensors[i] == 3) {
                // call force
                this_1.tagsInfoService.getForceData({
                    sessionId: session.sessionId
                }).subscribe(function (forceInfoObj) {
                    var forceInfo = [];
                    forceInfoObj.forEach(function (point) {
                        forceInfo.push([point.timestamp, point.force]);
                    });
                    _this.forceData = forceInfo;
                    _this.tagsInfoService.setterForceData(_this.forceData);
                    _this.showForceGraph = true;
                }, function (err) {
                    console.log(err);
                });
            }
            else if (session.sensors[i] == 4) {
                // call barometer
                this_1.tagsInfoService.getBarometerData({
                    sessionId: session.sessionId
                }).subscribe(function (barometerInfoObj) {
                    var barometerInfo = [];
                    barometerInfoObj.forEach(function (point) {
                        barometerInfo.push([point.timestamp, point.pressure]);
                    });
                    _this.barometerData = barometerInfo;
                    _this.tagsInfoService.setterBarometerData(_this.barometerData);
                    _this.showBarometerGraph = true;
                }, function (err) {
                    console.log(err);
                });
            }
            else if (session.sensors[i] == 5) {
                // call accelerometer
                var start_1 = Date.now();
                this_1.tagsInfoService.getAccelerometerData({
                    sessionId: session.sessionId
                }).subscribe(function (accelerometerInfoObj) {
                    var xAcceleromterInfo = [];
                    var yAcceleromterInfo = [];
                    var zAcceleromterInfo = [];
                    console.log(Date.now() - start_1);
                    accelerometerInfoObj.forEach(function (point) {
                        xAcceleromterInfo.push([point.timestamp, point.x]);
                        yAcceleromterInfo.push([point.timestamp, point.y]);
                        zAcceleromterInfo.push([point.timestamp, point.z]);
                    });
                    _this.xAccelerometerData = xAcceleromterInfo;
                    _this.tagsInfoService.setterXAccelerometerData(_this.xAccelerometerData);
                    _this.showXAccelerometerGraph = true;
                    _this.yAccelerometerData = yAcceleromterInfo;
                    _this.tagsInfoService.setterYAccelerometerData(_this.yAccelerometerData);
                    _this.showYAccelerometerGraph = true;
                    _this.zAccelerometerData = zAcceleromterInfo;
                    _this.tagsInfoService.setterZAccelerometerData(_this.zAccelerometerData);
                    _this.showZAccelerometerGraph = true;
                }, function (err) {
                    console.log(err);
                });
            }
        };
        var this_1 = this;
        // loop on session.sensors and based on the sensor key call the appropiate service 
        for (var i = 0; i < session.sensors.length; i++) {
            _loop_1(i);
        }
        this.displayGraph = true;
    };
    TagsInfoComponent.prototype.showNote = function (event, sessionId, info) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var newNoteVal = prompt('Note text:', info);
        if (newNoteVal != null) {
            var saveNoteObj = {
                sessionId: sessionId,
                noteText: newNoteVal
            };
            this.tagsInfoService.setDeviceSessionNote(saveNoteObj).subscribe(function (response) {
                // if (response.status == 200) {
                _this.getSessionsInfo(sessionId);
                alert('Note edited successfully.');
                // }
            }, function (err) {
                console.log(err);
            });
        }
    };
    TagsInfoComponent.prototype.resetPatientsInfo = function () {
        this.loadData = true;
        this.pageNumber = 0;
        this.getTagsInfo();
    };
    TagsInfoComponent.prototype.showSession = function (e, tagInfo) {
        e.stopPropagation();
        console.log('row -> ' + JSON.stringify(tagInfo));
        this.getSessionsInfo(tagInfo.id);
        this.displaySessions = true;
    };
    TagsInfoComponent.prototype.getTagsInfo = function () {
        var _this = this;
        this.reloadSpinnerTimeout();
        // this.loadData = false;
        // this.tagsInfo = [
        //   {
        //     "id": "2314124323",
        //     "lastActivity": "2018-03-20T09:12:28Z"
        //   }
        // ];
        // this.paggingSize = 1;
        // this.tagsDataSource = new MatTableDataSource(this.tagsInfo);
        // this.tagsDataSource.sort = this.sort;
        // if (this.checkSearch) {
        //   setTimeout(() => {
        //     this.searchElement.nativeElement.focus();
        //   }, 0);
        //   this.checkSearch = false;
        // }
        this.tagsInfoService.getTagsInfo({
            filter: this.searchFilter,
            pageNumber: this.pageNumber,
            pageSize: this.tableSize
        }).subscribe(function (tagsInfoObj) {
            _this.loadData = false;
            _this.tagsInfo = tagsInfoObj.tagsInfo;
            _this.paggingSize = tagsInfoObj.totalRecordCount;
            _this.tagsDataSource = new MatTableDataSource(_this.tagsInfo);
            _this.tagsDataSource.sort = _this.sort;
            if (_this.checkSearch) {
                setTimeout(function () {
                    _this.searchElement.nativeElement.focus();
                }, 0);
                _this.checkSearch = false;
            }
        }, function (err) {
            console.log(err);
        });
        this.changeDetectorRefs.detectChanges();
    };
    TagsInfoComponent.prototype.getSessionsInfo = function (tagId) {
        var _this = this;
        this.reloadSessionsSpinnerTimeout();
        // this.loadData = false;
        // this.sessionsInfo = [
        //   {
        //     "sessionId": "a4f01436-f9d6-4c3d-a100-c5f333a54ae5",
        //     "sessionStartTime": 1682899199000,
        //     "lastActivity": 1682899199000,
        //     "note": "added notes"
        //   }
        // ];
        // this.sessionsPaggingSize = 1;
        // this.sessionDataSource = new MatTableDataSource(this.sessionsInfo);
        // this.sessionDataSource.sort = this.sort;
        this.tagsInfoService.getSessionsInfo({
            tagId: tagId,
            pageNumber: this.sessionsPageNumber,
            pageSize: this.sessionsTableSize
        }).subscribe(function (sessionsInfoObj) {
            _this.loadData = false;
            _this.sessionsInfo = sessionsInfoObj.sessions;
            _this.sessionsPaggingSize = sessionsInfoObj.totalRecordCount;
            _this.sessionDataSource = new MatTableDataSource(_this.sessionsInfo);
            _this.sessionDataSource.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
        this.changeDetectorRefs.detectChanges();
    };
    TagsInfoComponent.prototype.getPatientHistory = function (event, patientInfo) {
        event.stopPropagation();
        this.localStorageService.saveData("patientInfo", patientInfo);
        this.router.navigate(['/patient-history']);
    };
    TagsInfoComponent.prototype.changePage = function (event) {
        this.loadData = true;
        this.pageNumber = event.pageIndex;
        this.getTagsInfo();
    };
    TagsInfoComponent.prototype.sessionsChangePage = function (event) {
        this.loadSessionData = true;
        this.sessionsPageNumber = event.pageIndex;
        this.getTagsInfo();
    };
    TagsInfoComponent.prototype.applyFilter = function (filterValue, event) {
        var _this = this;
        this.searchFilter = filterValue.trim().toLowerCase();
        clearTimeout(this.searchFilterTimeout);
        this.checkSearch = true;
        if (event.keyCode === 13) {
            this.pageNumber = 0;
            this.getTagsInfo();
        }
        else {
            this.searchFilterTimeout = setTimeout(function () {
                _this.pageNumber = 0;
                _this.getTagsInfo();
            }, 1000);
        }
    };
    TagsInfoComponent.prototype.reloadSpinnerTimeout = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadData = false;
        }, 10000);
    };
    TagsInfoComponent.prototype.reloadSessionsSpinnerTimeout = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadSessionData = false;
        }, 10000);
    };
    tslib_1.__decorate([
        ViewChild(MatSort),
        tslib_1.__metadata("design:type", MatSort)
    ], TagsInfoComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        ViewChild('search'),
        tslib_1.__metadata("design:type", ElementRef)
    ], TagsInfoComponent.prototype, "searchElement", void 0);
    tslib_1.__decorate([
        ViewChild('select'),
        tslib_1.__metadata("design:type", MatSelect)
    ], TagsInfoComponent.prototype, "select", void 0);
    TagsInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tags-info',
            templateUrl: './tags-info.component.html',
            styleUrls: ['./tags-info.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TagsInfoService, LocalStorageService, Router, ChangeDetectorRef, AuthenticationService])
    ], TagsInfoComponent);
    return TagsInfoComponent;
}());
export { TagsInfoComponent };
//# sourceMappingURL=tags-info.component.js.map