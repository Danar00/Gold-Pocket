import { ServiceUtilsService } from './../../../shared/services/service-utils/service-utils.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly _serviceUtils: ServiceUtilsService) { 
    
  }

  //Reactive Form = FormGroup
  // loginForm: FormGroup = new FormGroup({
  //   id: new FormControl(0),
  //   user: new FormControl(''),
  //   pass: new FormControl('')

  // });
  
  ngOnInit(): void {
    
  }
  currentVal:string = ""

  addNewLogin(user: string, pass: string): void {
    console.log(`ini user ${user}`);
    console.log(`ini pass ${pass}`);

    this._serviceUtils.storeLogin(user, pass);
    
  }

  

  





}
