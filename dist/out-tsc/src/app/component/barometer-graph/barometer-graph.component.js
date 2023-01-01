import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { ExcelService } from '../../service/excel.service';
import { TagsInfoService } from 'src/app/service/tags-info.service';
var BarometerGraphComponent = /** @class */ (function () {
    function BarometerGraphComponent(excelService, tagsInfoService) {
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
                }
            ]
        };
    }
    BarometerGraphComponent.prototype.ngOnInit = function () {
        var chart = Highcharts.stockChart('barometerContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Barometer' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var d = this.tagsInfoService.getterBarometerData();
        chart.series[0].setData(d, true, true);
        chart.series[0].setData(this.barometerData, true, true);
        chart.hideLoading();
    };
    BarometerGraphComponent.prototype.exportCSV = function () {
        this.excelService.generateExcel(this.tagsInfoService.getterBarometerData(), 'Barometer');
    };
    tslib_1.__decorate([
        Input('barometerData'),
        tslib_1.__metadata("design:type", Object)
    ], BarometerGraphComponent.prototype, "barometerData", void 0);
    BarometerGraphComponent = tslib_1.__decorate([
        Component({
            selector: 'barometer-graph',
            templateUrl: './barometer-graph.component.html',
            styleUrls: ['./barometer-graph.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelService, TagsInfoService])
    ], BarometerGraphComponent);
    return BarometerGraphComponent;
}());
export { BarometerGraphComponent };
//# sourceMappingURL=barometer-graph.component.js.map