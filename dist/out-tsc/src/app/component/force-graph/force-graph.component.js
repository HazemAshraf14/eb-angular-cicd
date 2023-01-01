import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { ExcelService } from '../../service/excel.service';
import { TagsInfoService } from 'src/app/service/tags-info.service';
var ForceGraphComponent = /** @class */ (function () {
    function ForceGraphComponent(excelService, tagsInfoService) {
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
    ForceGraphComponent.prototype.ngOnInit = function () {
        var chart = Highcharts.stockChart('forceContainer', this.options);
        chart.showLoading('retrieving data from server...');
        chart.setTitle({ text: 'Force' });
        var data = [];
        var date = Date.now();
        for (var i = 0; i < 1000000; i++) {
            var val = Math.random() * 5000;
            date += 60000;
            data.push([date, val]);
        }
        var d = this.tagsInfoService.getterForceData();
        chart.series[0].setData(d, true, true);
        chart.series[0].setData(this.forceData, true, true);
        chart.hideLoading();
    };
    ForceGraphComponent.prototype.exportCSV = function () {
        this.excelService.generateExcel(this.tagsInfoService.getterForceData(), 'Force');
    };
    tslib_1.__decorate([
        Input('forceData'),
        tslib_1.__metadata("design:type", Object)
    ], ForceGraphComponent.prototype, "forceData", void 0);
    ForceGraphComponent = tslib_1.__decorate([
        Component({
            selector: 'force-graph',
            templateUrl: './force-graph.component.html',
            styleUrls: ['./force-graph.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelService, TagsInfoService])
    ], ForceGraphComponent);
    return ForceGraphComponent;
}());
export { ForceGraphComponent };
//# sourceMappingURL=force-graph.component.js.map