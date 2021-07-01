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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  submitForm(): void {
    if(this.form.valid) {
      const credentials = this.form.value
      const redirectBackUrl = this.flash.get()

      this.loginService.login({
        email: credentials.email, 
        password: credentials.password
      }).subscribe((data) => {
        if (data.status) {
          sessionStorage.setItem('credentials', JSON.stringify(data));
          sessionStorage.setItem('user-id', JSON.stringify(data.id));

          this.router.navigateByUrl(redirectBackUrl || '/')
          console.log(data);
          
        } else {
          const message = "Email atau Password anda salah"
          alert(message)
          
        }
      }), (error) => {
        console.log(error);
        const message = error.error.error;
        alert(message)
      }
    }
  }

}
