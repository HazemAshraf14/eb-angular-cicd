import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { ExcelService } from '../../service/excel.service';
import { TagsInfoService } from 'src/app/service/tags-info.service';
var XAccelerometerGraphComponent = /** @class */ (function () {
    function XAccelerometerGraphComponent(excelService, tagsInfoService) {
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
    XAccelerometerGraphComponent.prototype.ngOnInit = function () {
        var chart = Highcharts.stockChart('xAccelerometerContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Accelerometer - x' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var d = this.tagsInfoService.getterXAccelerometerData();
        chart.series[0].setData(d, true, true);
        chart.hideLoading();
    };
    XAccelerometerGraphComponent.prototype.exportCSV = function () {
        this.excelService.generateExcel(this.tagsInfoService.getterXAccelerometerData(), 'Accelerometer-X');
    };
    tslib_1.__decorate([
        Input('xAccelerometerData'),
        tslib_1.__metadata("design:type", Object)
    ], XAccelerometerGraphComponent.prototype, "xAccelerometerData", void 0);
    XAccelerometerGraphComponent = tslib_1.__decorate([
        Component({
            selector: 'x-accelerometer-graph',
            templateUrl: './x-accelerometer-graph.component.html',
            styleUrls: ['./x-accelerometer-graph.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelService, TagsInfoService])
    ], XAccelerometerGraphComponent);
    return XAccelerometerGraphComponent;
}());
export { XAccelerometerGraphComponent };
//# sourceMappingURL=x-accelerometer-graph.component.js.map