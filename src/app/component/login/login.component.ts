import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameControl: FormControl = new FormControl('', [Validators.required]);
  passwordControl: FormControl = new FormControl('', [Validators.required]);
  isInvalidCredentials = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/tags-info']);
    }
  }

  login() {
    this.authenticationService.login(this.usernameControl.value, this.passwordControl.value).subscribe(
        (res:any) => {
          console.log(res);
            this.isInvalidCredentials = false;
            this.router.navigate(['/tags-info']);
        },
        (err) => {
          console.log(err);
            this.isInvalidCredentials = true;
        });
}

}
