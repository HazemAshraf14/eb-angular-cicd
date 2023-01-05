import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { EnvironmentService } from './environment.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly TOKEN_KEY: string = "align_auth_token";
  // private readonly ROLE: string = "i_pill_role";
  private remoteUrl: string;

  constructor(private http: HttpClient, private envService: EnvironmentService, private cookieService: CookieService) {
    this.remoteUrl = this.envService.getServerEndPoint();
  }

  login(username: string, password: string): Observable<any> {
    return new Observable<any>((obs) => {
      this.http.post('https://align-server.twi-cloud-services.com/user/login', { 'username': username, 'password': password }, {observe: "response"}).subscribe(
        (res: any) => {
          console.log(res);
          if (res.body.code == 200) {
            console.log('http status is 200');
            console.log('res body -> ' + res.body);
            this.cookieService.set(this.TOKEN_KEY, res.body.token, undefined,undefined,undefined,undefined,"Strict");
            // this.cookieService.set(this.ROLE, res.role, undefined,undefined,undefined,undefined,"Strict");
            obs.next();
          } else if (res.body.code == 208) {
            console.log(res);
            obs.error(res);
          }
        },
        (err: any) => {
          obs.error(err);
        },
        () => {
          obs.complete();
        });
    });
  }
 

  logout() {
    // remove cookie
    this.cookieService.delete(this.TOKEN_KEY);
  }

  public isLoggedIn(): boolean {
    return this.cookieService.check(this.TOKEN_KEY);
  }

  public getUserToken() {
    var token = this.cookieService.get(this.TOKEN_KEY);
    return token;
  }

  // public getRole() {
  //   var role = this.cookieService.get(this.ROLE);
  //   return role;
  // }

}





