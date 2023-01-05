import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { SeriesOptionsType } from 'highcharts/highstock';
import { ExcelService } from '../../service/excel.service';
import { TagsInfoService } from 'src/app/service/tags-info.service'

@Component({
  selector: 'temp-graph',
  templateUrl: './temp-graph.component.html',
  styleUrls: ['./temp-graph.component.css']
})
export class TempGraphComponent implements OnInit {

  public options;

  @Input('tempData') tempData;

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

    let chart = Highcharts.stockChart('tempContainer', this.options);
    chart.showLoading('retrieving data from server...');

    chart.setTitle({text: 'Temperature'});
    let data = [];
    let date = Date.now();
    for (let i = 0; i < 1000000; i++) {
        let val = Math.random() * 5000;
        date += 60000;
        data.push([date, val]);
    }
    let drawData = this.tagsInfoService.getterTempData();
    chart.series[0].setData(drawData, true, true);
    chart.hideLoading();

  }
  
  exportCSV(){

    this.exportText = 'Downloading...';
    this.exportBtnClass = 'export-button-downloading-style';
    let exportbtnElement = document.getElementById('exportTempBtn') as HTMLInputElement | null;
    exportbtnElement.disabled = true;
    setTimeout(async ()=>{
    let isDownloaded = await this.excelService.generateExcel(this.tagsInfoService.getterTempData(), 'Temperature');
    console.log(isDownloaded);
    if(isDownloaded){
      this.exportText = 'Export CSV';
      this.exportBtnClass = 'export-button-style';
      exportbtnElement.disabled = false;
    } 
   },200);

    
  }

}
