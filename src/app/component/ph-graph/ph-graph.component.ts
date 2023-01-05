import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { SeriesOptionsType } from 'highcharts/highstock';
import { ExcelService } from '../../service/excel.service';
import { TagsInfoService } from 'src/app/service/tags-info.service'

@Component({
  selector: 'ph-graph',
  templateUrl: './ph-graph.component.html',
  styleUrls: ['./ph-graph.component.css']
})
export class PhGraphComponent implements OnInit {

  public options;

  @Input('phData') phData;

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

    let chart = Highcharts.stockChart('phContainer', this.options);
    chart.showLoading('retrieving data from server...');

    chart.setTitle({text: 'ph'});
    let data = [];

    let date = Date.now();
    for (let i = 0; i < 800000; i++) {
        let val = Math.random() * 5000;
        date += 60000;
        data.push([date, val]);
    }
    let drawData = this.tagsInfoService.getterPhData();
    chart.series[0].setData(drawData, true, true);
    chart.hideLoading();
  }

  exportCSV(){
    this.exportText = 'Downloading...';
    this.exportBtnClass = 'export-button-downloading-style';
    let exportbtnElement = document.getElementById('exportPhBtn') as HTMLInputElement | null;
    exportbtnElement.disabled = true;
    setTimeout(async ()=>{
    let isDownloaded = await this.excelService.generateExcel(this.tagsInfoService.getterPhData(), 'Ph');
    console.log(isDownloaded);
    if(isDownloaded){
      this.exportText = 'Export CSV';
      this.exportBtnClass = 'export-button-style';
      exportbtnElement.disabled = false;
    } 
   },200);

  }

}