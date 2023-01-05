import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class TagsInfoService {
  private remoteUrl: string;

  private phData;
  private tempData;
  private forceData;
  private barometerData;
  private xAccelerometerData;
  private yAccelerometerData;
  private zAccelerometerData;
  
  
  constructor(private envService: EnvironmentService, private http: HttpClient, private authService: AuthenticationService) {
    this.remoteUrl = this.envService.getServerEndPoint();
  }

  getRequestOptions(): { headers: HttpHeaders } {
    var requestOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getUserToken()
      })
    };
    return requestOptions;
  }

  public setterPhData(phData){
    this.phData = phData;
  }

  public getterPhData(){
    return this.phData
  }

  public setterTempData(tempData){
    this.tempData = tempData;
  }

  public getterTempData(){
    return this.tempData
  }

  public setterForceData(forceData){
    this.forceData = forceData;
  }

  public getterForceData(){
    return this.forceData
  }

  public setterBarometerData(barometerData){
    this.barometerData = barometerData;
  }

  public getterBarometerData(){
    return this.barometerData
  }

  public setterXAccelerometerData(xAccelerometerData){
    this.xAccelerometerData = xAccelerometerData;
  }

  public getterXAccelerometerData(){
    return this.xAccelerometerData
  }

  public setterYAccelerometerData(yAccelerometerData){
    this.yAccelerometerData = yAccelerometerData;
  }

  public getterYAccelerometerData(){
    return this.yAccelerometerData
  }

  public setterZAccelerometerData(zAccelerometerData){
    this.zAccelerometerData = zAccelerometerData;
  }

  public getterZAccelerometerData(){
    return this.zAccelerometerData
  }


  public getTagsInfo(tagsInfo): Observable<any> {
    const params = new HttpParams()
                  .set('page', tagsInfo.pageNumber)
                  .set('size', tagsInfo.pageSize)
                  .set('searchText', tagsInfo.filter);
                  
                  var requestOptions = {
                    params,
                    headers: new HttpHeaders({
                      "Authorization": "Bearer " + this.authService.getUserToken()
                    })
                  };
    return this.http.get(this.remoteUrl + '/tag', requestOptions);
  }

 public deleteTagSessions(sessionsInfoObj): Observable<any> {
    const sessionIdsObj = {
      sessionIds: sessionsInfoObj.sessionIds
    };
    return this.http.post<any>(this.remoteUrl + `/tag/${sessionsInfoObj.tagId}/sessions`, sessionIdsObj, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getUserToken()
      }),
      observe: 'response'
    });
}

public getSessionsInfo(sessionsInfo): Observable<any> {
    const params = new HttpParams()
                  .set('page', sessionsInfo.pageNumber)
                  .set('size', sessionsInfo.pageSize);

                  var requestOptions = {
                    params,
                    headers: new HttpHeaders({
                      "Authorization": "Bearer " + this.authService.getUserToken()
                    })
                  };
    return this.http.get(this.remoteUrl + `/tag/${sessionsInfo.tagId}/sessions`, requestOptions);
}

  setDeviceSessionNote(saveNoteObj): Observable<any> {
    let noteText = { note: saveNoteObj.noteText};

    return this.http.post<any>(this.remoteUrl + `/session/${saveNoteObj.sessionId}/notes`, noteText, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getUserToken()
      }),
      observe: 'response'
    });
  }

  public getPhData(sessionsId): Observable<any> {
    return this.http.get(this.remoteUrl + `/session/${sessionsId.sessionId}/ph`, this.getRequestOptions());
  }

  public getTempData(sessionsId): Observable<any> {
    return this.http.get(this.remoteUrl + `/session/${sessionsId.sessionId}/temperature`, this.getRequestOptions());
  }

  public getForceData(sessionsId): Observable<any> {
    return this.http.get(this.remoteUrl + `/session/${sessionsId.sessionId}/force`, this.getRequestOptions());
  }

  public getBarometerData(sessionsId): Observable<any> {
    return this.http.get(this.remoteUrl + `/session/${sessionsId.sessionId}/pressure`, this.getRequestOptions());
  }

  public getXAccelerometerData(sessionsId): Observable<any> {
    return this.http.get(this.remoteUrl + `/session/${sessionsId.sessionId}/accelerometerX`, this.getRequestOptions());
  }

  public getYAccelerometerData(sessionsId): Observable<any> {
    return this.http.get(this.remoteUrl + `/session/${sessionsId.sessionId}/accelerometerY`, this.getRequestOptions());
  }

  public getZAccelerometerData(sessionsId): Observable<any> {
    return this.http.get(this.remoteUrl + `/session/${sessionsId.sessionId}/accelerometerZ`, this.getRequestOptions());
  }
  
}
