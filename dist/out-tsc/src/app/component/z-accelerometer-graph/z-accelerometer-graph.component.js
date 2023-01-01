import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { ExcelService } from '../../service/excel.service';
import { TagsInfoService } from 'src/app/service/tags-info.service';
var ZAccelerometerGraphComponent = /** @class */ (function () {
    function ZAccelerometerGraphComponent(excelService, tagsInfoService) {
        this.excelService = excelService;
        this.tagsInfoService = tagsInfoService;
        this.options = {
            exporting: {
                enabled: true
            },
            chart: {
                zooming: {
                    pinchType: 'x'
                }
            },
            credits: {
                enabled: false
            },
            rangeSelector: {
                inputDateFormat: '%b %e, %Y %H:%M',
                buttons: [{
                        type: 'minute',
                        count: 1,
                        text: '1m',
                    }, {
                        type: 'minute',
                        count: 15,
                        text: '15m'
                    }, {
                        type: 'minute',
                        count: 30,
                        text: '30m'
                    }, {
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                selected: 1
            },
            title: {
                text: 'Sensor Session'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            series: [
                {
                    data: []
                },
            ]
        };
    }
    ZAccelerometerGraphComponent.prototype.ngOnInit = function () {
        var chart = Highcharts.stockChart('zAccelerometerContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Accelerometer - z' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var d = this.tagsInfoService.getterZAccelerometerData();
        chart.series[0].setData(d, true, true);
        chart.hideLoading();
    };
    ZAccelerometerGraphComponent.prototype.exportCSV = function () {
        this.excelService.generateExcel(this.tagsInfoService.getterZAccelerometerData(), 'Accelerometer-Z');
    };
    tslib_1.__decorate([
        Input('zAccelerometerData'),
        tslib_1.__metadata("design:type", Object)
    ], ZAccelerometerGraphComponent.prototype, "zAccelerometerData", void 0);
    ZAccelerometerGraphComponent = tslib_1.__decorate([
        Component({
            selector: 'z-accelerometer-graph',
            templateUrl: './z-accelerometer-graph.component.html',
            styleUrls: ['./z-accelerometer-graph.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelService, TagsInfoService])
    ], ZAccelerometerGraphComponent);
    return ZAccelerometerGraphComponent;
}());
export { ZAccelerometerGraphComponent };
//# sourceMappingURL=z-accelerometer-graph.component.js.map