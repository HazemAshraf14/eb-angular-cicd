import { Injectable } from '@angular/core';
import * as Excel from "exceljs/dist/exceljs.min.js";
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  async generateExcel(data, sensorName){
  
      var options = {
        filename: './streamed-workbook.xlsx',
        useStyles: true,
        useSharedStrings: true
      };
      let workbook = new Excel.Workbook(options);
  
      // workbook.creator = 'Me';
      // workbook.lastModifiedBy = 'Her';
      // workbook.created = new Date(1985, 8, 30);
      // workbook.modified = new Date();
      // workbook.lastPrinted = new Date(2016, 9, 27);
      // create a sheet with red tab colour
      var worksheet = workbook.addWorksheet(sensorName + '-measures', {properties:{tabColor:{argb:'FFC0000'}}});
      worksheet.columns = [
        { header: 'Timestamp', key: 'timestamp', width: 30 },
        { header: 'Measure', key: 'measure', width: 10 }
      ];
      for (let i = 0; i < data.length; i++) {
           worksheet.addRow({timestamp: data[i][0], measure: data[i][1]});
      }
      
      let fileName=`${sensorName}_file.xlsx`;
      const excelBuffer: any = await workbook.xlsx.writeBuffer();
      const excelData: Blob = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      FileSaver.saveAs(excelData, fileName);

      return true;

      // workbook.xlsx.writeBuffer()
      //     .then(function(buffer) {
      //         // done buffering
      //         const data: Blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      //         FileSaver.saveAs(data, fileName);
      //     }).catch(function(err){
      //       console.log(err);
      //       return false;
      //     });
      //     return true;
    }

}