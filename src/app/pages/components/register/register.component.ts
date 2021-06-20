import { ServiceUtilsService } from './../../../shared/services/service-utils/service-utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private readonly _serviceUtils: ServiceUtilsService) { }

  ngOnInit(): void {
  }

  addNewUser(email: string, user: string, pass: string): void {
    console.log(`ini email: ${email}`);
    console.log(`ini email: ${user}`);
    console.log(`ini email: ${pass}`);

    this._serviceUtils.storeRegister(email, user, pass)
    
  }

}
