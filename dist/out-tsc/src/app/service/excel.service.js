import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as Excel from "exceljs/dist/exceljs.min.js";
import * as FileSaver from 'file-saver';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.generateExcel = function (data, sensorName) {
        console.log(JSON.stringify(data));
        var options = {
            filename: './streamed-workbook.xlsx',
            useStyles: true,
            useSharedStrings: true
        };
        var workbook = new Excel.Workbook(options);
        // workbook.creator = 'Me';
        // workbook.lastModifiedBy = 'Her';
        // workbook.created = new Date(1985, 8, 30);
        // workbook.modified = new Date();
        // workbook.lastPrinted = new Date(2016, 9, 27);
        // create a sheet with red tab colour
        var worksheet = workbook.addWorksheet(sensorName + '-measures', { properties: { tabColor: { argb: 'FFC0000' } } });
        worksheet.columns = [
            { header: 'Timestamp', key: 'timestamp', width: 30 },
            { header: 'Measure', key: 'measure', width: 10 }
        ];
        for (var i = 0; i < data.length; i++) {
            worksheet.addRow({ timestamp: data[i][0], measure: data[i][1] });
        }
        var fileName = sensorName + "_file.xlsx";
        var excelBuffer = workbook.xlsx.writeBuffer();
        workbook.xlsx.writeBuffer()
            .then(function (buffer) {
            // done buffering
            var data = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            FileSaver.saveAs(data, fileName);
            console.log(Date.now());
        });
    };
    ExcelService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ExcelService);
    return ExcelService;
}());
export { ExcelService };
//# sourceMappingURL=excel.service.js.map