import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceUtilsService } from 'src/app/shared/services/service-utils/service-utils.service';
import { LoginService } from '../service/login.service';
import { FlashMessageService } from 'src/app/shared/services/flash/flash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly flash: FlashMessageService
  ) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  submitForm(): void {
    if(this.form.valid) {
      const credentials = this.form.value
      const redirectBackUrl = this.flash.get()

      this.loginService.login({
        email: credentials.username, 
        password: credentials.password
      }).subscribe((token) => {
        if (token) {
          sessionStorage.setItem('credentials', token);
          this.router.navigateByUrl(redirectBackUrl || '/')
        }
      }), (error) => {
        const message = error.error.error;
        alert(message)
      }
    }
  }

}
