import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, Inject } from '@angular/core';
import { TagsInfoService } from 'src/app/service/tags-info.service'
import { LocalStorageService } from 'src/app/service/local-storage.service'
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { GeneralConstant } from 'src/app/constants/GeneralConstant';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { GeneralUtil } from 'src/app/utils/GeneralUtil';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AppPopupHandlerService } from 'src/app/service/app-popup-handler.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'tags-info',
  templateUrl: './tags-info.component.html',
  styleUrls: ['./tags-info.component.css']
})
export class TagsInfoComponent implements OnInit {


  displayedColumns: string[];
  sessionDisplayedColumns: string[];

  typesOfsensors = [
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
  
  displayGraph: boolean;
  tagsDataSource: MatTableDataSource<any[]>;
  sessionDataSource: MatTableDataSource<any[]>;

  tableSize: number = 5;
  paggingSize;
  pageNumber;

  sessionsTableSize: number = 3;
  sessionsPaggingSize;
  sessionsPageNumber;

  tagsInfo;
  selectedTagId;
  sessionsInfo;

  showPhGraph = false;
  showTempGraph = false;
  showForceGraph = false;
  showBarometerGraph = false;
  showXAccelerometerGraph = false;
  showYAccelerometerGraph = false;
  showZAccelerometerGraph = false;

  //final draw data to be passed to drawing components
  phData;
  tempData;
  forceData;
  barometerData;
  xAccelerometerData;
  yAccelerometerData;
  zAccelerometerData;
  //*****************************************


  noSessionsFound = true;
  selectedSessionIdsInfo = [];

  searchFilter: string = '';
  searchFilterTimeout = null;
  checkSearch;
  loadData;
  loadSessionData;
  displaySessions;
  @ViewChild(MatSort)
  private sort: MatSort;

  @ViewChild('search') searchElement: ElementRef;
  @ViewChild('select') select: MatSelect;
  allSelected=false;

  matSelectedEvent: any;

  constructor(private snackBar: MatSnackBar, private popupService: AppPopupHandlerService, public dialog: MatDialog, private tagsInfoService: TagsInfoService, private localStorageService: LocalStorageService, private router: Router, private changeDetectorRefs: ChangeDetectorRef, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

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
      ]
    
    this.loadData = true;
    this.loadSessionData = true;
    this.pageNumber = 0;
    this.sessionsPageNumber = 0;
    this.getTagsInfo();
  }

    toggleAllSelection(e) {
    if (this.allSelected) {
      this.matSelectedEvent.source.options.forEach((item: MatOption) => item.select());
    } else {
      this.matSelectedEvent.source.options.forEach((item: MatOption) => item.deselect());
    }
  }

   optionClick() {
    let newStatus = true;
    this.matSelectedEvent.source.options.forEach((item: MatOption) => {
      if (!item.selected && item.value != 0) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
    if(this.allSelected){
      this.matSelectedEvent.source.options.forEach((item: MatOption) => item.select());
    } else {
      this.matSelectedEvent.source.options.forEach((item: MatOption) => {
        if(item.value == 0){
          item.deselect();
        }
      });
    }
  }

  checkSelection(e, session){
    if(e.value.includes(0)){
      this.allSelected = true;
    }else{
      this.allSelected = false;
    } 
    session.sensors = e.value;
    this.matSelectedEvent = e;
  }

  showGraph(e, session){
    console.log('UTC offset' + new Date().getTimezoneOffset() * 60000);

    this.showPhGraph = false;
    this.showTempGraph = false;
    this.showForceGraph = false;
    this.showBarometerGraph = false;
    this.showXAccelerometerGraph = false;
    this.showYAccelerometerGraph = false;
    this.showZAccelerometerGraph = false;

    this.loadData = true;
    // loop on session.sensors and based on the sensor key call the appropiate service 

    for (let i = 0; i < session.sensors.length; i++) {
      if(session.sensors[i] == 1){
        // call ph service
        this.tagsInfoService.getPhData({
        sessionId: session.sessionId
        }).subscribe((phInfoObj) => {
          let phInfo = [];
          let startSessionTime = phInfoObj.startSessionStartTimestamp;
          // convert start session time from UTC to the current timezone
          startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
          const rate = phInfoObj.rate;
          let startSessionAccumlative = startSessionTime;
          phInfoObj.ph.forEach((phValue)=>{
            phInfo.push([startSessionAccumlative, phValue]);
            startSessionAccumlative += rate;
          });
          this.phData = phInfo;
          this.tagsInfoService.setterPhData(this.phData);
          this.showPhGraph = true;
          this.loadData = false;
        }, (err) => {
          console.log(err);
        });
        this.changeDetectorRefs.detectChanges();
      }
      else if(session.sensors[i] == 2){
        // call temp
        this.tagsInfoService.getTempData({
          sessionId: session.sessionId
          }).subscribe((tempInfoObj) => {
            let tempInfo = [];
            let startSessionTime = tempInfoObj.startSessionStartTimestamp;
            // convert start session time from UTC to the current timezone
            startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
            const rate = tempInfoObj.rate;
            let startSessionAccumlative = startSessionTime;
            tempInfoObj.temperature.forEach((temperatureValue)=>{
              tempInfo.push([startSessionAccumlative, temperatureValue]);
              startSessionAccumlative += rate;
            });
            this.tempData = tempInfo;
            this.tagsInfoService.setterTempData(this.tempData);
            this.showTempGraph = true;
            this.loadData = false;
          }, (err) => {
            console.log(err);
          });
          this.changeDetectorRefs.detectChanges();
      }
      else if(session.sensors[i] == 3){
        // call force
        this.tagsInfoService.getForceData({
          sessionId: session.sessionId
          }).subscribe((forceInfoObj) => {
            let forceInfo = [];
            let startSessionTime = forceInfoObj.startSessionStartTimestamp;
            // convert start session time from UTC to the current timezone
            startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
            const rate = forceInfoObj.rate;
            let startSessionAccumlative = startSessionTime;
            forceInfoObj.force.forEach((forceValue)=>{
              forceInfo.push([startSessionAccumlative, forceValue]);
              startSessionAccumlative += rate;
            });
            this.forceData = forceInfo;
            this.tagsInfoService.setterForceData(this.forceData);
            this.showForceGraph = true;
            this.loadData = false;
          }, (err) => {
            console.log(err);
          });
      }
      else if(session.sensors[i] == 4){
        // call barometer
        this.tagsInfoService.getBarometerData({
          sessionId: session.sessionId
          }).subscribe((barometerInfoObj) => {
            let barometerInfo = [];
            let startSessionTime = barometerInfoObj.startSessionStartTimestamp;
            // convert start session time from UTC to the current timezone
            startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
            const rate = barometerInfoObj.rate;
            let startSessionAccumlative = startSessionTime;
            barometerInfoObj.pressure.forEach((pressureValue)=>{
              barometerInfo.push([startSessionAccumlative, pressureValue]);
              startSessionAccumlative += rate;
            });
            this.barometerData = barometerInfo;
            this.tagsInfoService.setterBarometerData(this.barometerData);
            this.showBarometerGraph = true;
            this.loadData = false;
          }, (err) => {
            console.log(err);
          });
      }
      else if(session.sensors[i] == 5){
        // call accelerometer
        let start = Date.now();
        this.tagsInfoService.getXAccelerometerData({
          sessionId: session.sessionId
          }).subscribe((accelerometerInfoObj) => {
            let xAcceleromterInfo = [];
            let startSessionTime = accelerometerInfoObj.startSessionStartTimestamp;
            // convert start session time from UTC to the current timezone
            startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
            const rate = accelerometerInfoObj.rate;
            let startSessionAccumlative = startSessionTime;
            accelerometerInfoObj.x.forEach((xValue)=>{
              xAcceleromterInfo.push([startSessionAccumlative, xValue]);
              startSessionAccumlative += rate;
            });
            this.xAccelerometerData = xAcceleromterInfo;
            this.tagsInfoService.setterXAccelerometerData(this.xAccelerometerData);
            this.showXAccelerometerGraph = true;

            this.loadData = false;

          }, (err) => {
            console.log(err);
          });

        
          this.tagsInfoService.getYAccelerometerData({
            sessionId: session.sessionId
            }).subscribe((accelerometerInfoObj) => {
              let yAcceleromterInfo = [];
              let startSessionTime = accelerometerInfoObj.startSessionStartTimestamp;
              // convert start session time from UTC to the current timezone
              startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
              const rate = accelerometerInfoObj.rate;
              let startSessionAccumlative = startSessionTime;
              accelerometerInfoObj.y.forEach((yValue)=>{
                yAcceleromterInfo.push([startSessionAccumlative, yValue]);
                startSessionAccumlative += rate;
              });
  
              this.yAccelerometerData = yAcceleromterInfo;
              this.tagsInfoService.setterYAccelerometerData(this.yAccelerometerData);
              this.showYAccelerometerGraph = true;
  
              // this.loadData = false;
  
            }, (err) => {
              console.log(err);
            });  

            this.tagsInfoService.getZAccelerometerData({
              sessionId: session.sessionId
              }).subscribe((accelerometerInfoObj) => {
                let zAcceleromterInfo = [];
                let startSessionTime = accelerometerInfoObj.startSessionStartTimestamp;
                // convert start session time from UTC to the current timezone
                startSessionTime = startSessionTime - (new Date().getTimezoneOffset() * 60000);
                const rate = accelerometerInfoObj.rate;
                let startSessionAccumlative = startSessionTime;
                accelerometerInfoObj.z.forEach((zValue)=>{
                  zAcceleromterInfo.push([startSessionAccumlative, zValue]);
                  startSessionAccumlative += rate;
                });

                this.zAccelerometerData = zAcceleromterInfo;
                this.tagsInfoService.setterZAccelerometerData(this.zAccelerometerData);
                this.showZAccelerometerGraph = true;
    
                // this.loadData = false;
    
              }, (err) => {
                console.log(err);
              });  

      }
    }

    this.displayGraph = true;

  }

  openNoteDialog(event, session): void {
    event.stopPropagation();
    let dialogRef = this.popupService.openConfirmationDialog(session);

    dialogRef.afterClosed().subscribe(status => {
      if (status == "YES") {
        this.getSessionsInfo(this.selectedTagId);
        this.openSnackbar('Note edited successfully.');
    }
  });
  }

 showNote(event: any, sessionId: number, info: string) {
  event.preventDefault();
  event.stopPropagation();

  if(info == null) info = '';
  var newNoteVal = prompt('Note text:', info);

  if (newNoteVal != null) {
    let saveNoteObj = {
      sessionId: sessionId,
      noteText: newNoteVal
    };
    this.tagsInfoService.setDeviceSessionNote(saveNoteObj).subscribe(
      (data) => {
        if (data.status == 201) {
          this.getSessionsInfo(this.selectedTagId);
          alert('Note edited successfully.');
        }
      },
      (err) => {
        console.log(err)
      }
    );
  }

}

deleteSessions(event){
  console.log(this.selectedTagId);
  event.stopPropagation();
  let msg = `Are you sure to delete all sessions data related to this tag with id: ${this.selectedTagId} ?`;
  let dialogRef = this.popupService.openDeleteConfirmationDialog(msg, 'Delete');
  dialogRef.afterClosed().subscribe(status => {
    if (status == "YES") {
      this.loadData = true;
      const sessionsInfoObj = {
        tagId: this.selectedTagId,
        sessionIds: this.selectedSessionIdsInfo
      }
      
    this.tagsInfoService.deleteTagSessions(sessionsInfoObj).subscribe((response) => {
      if (response.status == 204) {
        this.getSessionsInfo(this.selectedTagId);
        this.openSnackbar('Sessions deleted successfully.');
      }
      else if(response.status == 404){
        this.loadData = false;
        this.openSnackbar('Tag Id is not exist!'); 
      }
    }, (err) => {
      this.loadData = false;
      console.log(err);
    });
  }
});
}


  resetPatientsInfo() {
    this.loadData = true;
    this.pageNumber = 0;
    this.getTagsInfo();
  }

  showSession(e, tagInfo){
    e.stopPropagation();
    this.loadData = true;
    this.selectedTagId = tagInfo.id;
    this.getSessionsInfo(tagInfo.id);
    this.displaySessions = true;
  }

  getTagsInfo() {
    this.reloadSpinnerTimeout();

    this.tagsInfoService.getTagsInfo({
      filter: this.searchFilter,
      pageNumber: this.pageNumber,
      pageSize: this.tableSize
    }).subscribe((tagsInfoObj) => {
      this.loadData = false;
      this.tagsInfo = tagsInfoObj.tagsInfo;
      this.paggingSize = tagsInfoObj.totalRecordCount;
      this.tagsDataSource = new MatTableDataSource(this.tagsInfo);
      this.tagsDataSource.sort = this.sort;

    }, (err) => {
      console.log(err);
    })
    this.changeDetectorRefs.detectChanges();
  }


  getSessionsInfo(tagId) {
    this.reloadSessionsSpinnerTimeout();

    this.tagsInfoService.getSessionsInfo({
      tagId: tagId,
      pageNumber: this.sessionsPageNumber,
      pageSize: this.sessionsTableSize
    }).subscribe((sessionsInfoObj) => {
      this.loadData = false;

      if(sessionsInfoObj.totalRecordCount == 0) {
        this.noSessionsFound = true;
      }
      else{
        this.noSessionsFound = false;
        for (let i = 0; i < sessionsInfoObj.sessions.length; i++) {
          this.selectedSessionIdsInfo.push(sessionsInfoObj.sessions[i].sessionId);
        }
      }
      this.sessionsInfo = sessionsInfoObj.sessions;
      this.sessionsPaggingSize = sessionsInfoObj.totalRecordCount;
      this.sessionDataSource = new MatTableDataSource(this.sessionsInfo);
      this.sessionDataSource.sort = this.sort;

    }, (err) => {
      console.log(err);
    })
    this.changeDetectorRefs.detectChanges();
  }


  getPatientHistory(event, patientInfo) {
    event.stopPropagation();
    this.localStorageService.saveData("patientInfo",patientInfo);
    this.router.navigate(['/patient-history']);
  }

  changePage(event) {
    this.loadData = true;
    this.pageNumber = event.pageIndex;
    this.getTagsInfo();
  }

  sessionsChangePage(event) {
    this.loadData = true;
    this.sessionsPageNumber = event.pageIndex;
    this.getSessionsInfo(this.selectedTagId);
  }


  applyFilter(filterValue: string, event: any) {

    this.searchFilter = filterValue.trim();
    this.searchFilter = this.searchFilter.charAt(0).toLowerCase() + this.searchFilter.slice(1);
    clearTimeout(this.searchFilterTimeout);

    if (event.keyCode === 13) {
      this.pageNumber = 0;
      this.getTagsInfo();
    }
    else {
      this.searchFilterTimeout = setTimeout(() => {
        this.pageNumber = 0;
        this.getTagsInfo();
      }, 1000);
    }
  }

  reloadSpinnerTimeout(){
    setTimeout(() => {
      this.loadData = false;
    }, 10000);
  }

  reloadSessionsSpinnerTimeout(){
    setTimeout(() => {
      this.loadSessionData = false;
    }, 10000);
  }

  getDateWithTimeZone(strDate: string) {
    return GeneralUtil.getDateWithTimeZone(strDate);
  }


  private openSnackbar(message: string): any {
    this.snackBar.open(message, "", {
      duration: 3000,
      horizontalPosition: "left"
    });
  }
  
}
