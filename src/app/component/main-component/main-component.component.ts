import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  
  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.showPatientsInfo();
  }

  showPatientsInfo(){
    this.router.navigate(['/patients-info']);
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  logoutClick() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
