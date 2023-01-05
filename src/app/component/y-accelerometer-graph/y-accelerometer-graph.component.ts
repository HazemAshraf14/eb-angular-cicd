import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { SeriesOptionsType } from 'highcharts/highstock';
import { ExcelService } from '../../service/excel.service';
import { TagsInfoService } from 'src/app/service/tags-info.service'

@Component({
  selector: 'y-accelerometer-graph',
  templateUrl: './y-accelerometer-graph.component.html',
  styleUrls: ['./y-accelerometer-graph.component.css']
})
export class YAccelerometerGraphComponent implements OnInit {

  public options;

  @Input('yAccelerometerData') yAccelerometerData;

  public exportText = 'Export CSV';

  public exportBtnClass = 'export-button-style';
 
  public constructor(private excelService: ExcelService, private tagsInfoService: TagsInfoService) {

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
        // events: {
        //     click: function() {
        //         alert('Clicked button');
        //     }
        // }
    },{
        type: 'minute',
        count: 15,
        text: '15m'
    },{
        type: 'minute',
        count: 30,
        text: '30m'
    },{
      type: 'hour',
      count: 1,
      text: '1h'
    },{
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

  ngOnInit(): void {

    let chart = Highcharts.stockChart('yAccelerometerContainer', this.options);
    chart.showLoading('retrieving data from server...');

    chart.setTitle({text: 'Accelerometer - y'});
      let data = [];
      let date = Date.now();
    for (let i = 0; i < 1000000; i++) {
        let val = Math.random() * 5000;
        date += 60000;
        data.push([date, val]);
    }

    let drawData = this.tagsInfoService.getterYAccelerometerData();
    chart.series[0].setData(drawData, true, true);
    chart.hideLoading();
  
  }

  exportCSV(){

    this.exportText = 'Downloading...';
    this.exportBtnClass = 'export-button-downloading-style';
    let exportbtnElement = document.getElementById('exportYAccelerometerBtn') as HTMLInputElement | null;
    exportbtnElement.disabled = true;
    setTimeout(async ()=>{
    let isDownloaded = await this.excelService.generateExcel(this.tagsInfoService.getterYAccelerometerData(), 'Accelerometer-Y');
    console.log(isDownloaded);
    if(isDownloaded){
      this.exportText = 'Export CSV';
      this.exportBtnClass = 'export-button-style';
      exportbtnElement.disabled = false;
    } 
   },200);

  }

}
