import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginService } from '../service/login.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    loginService = TestBed.inject(LoginService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have method submitForm() id form valid', () => {
    component.form = new FormGroup({
      email: new FormControl('danarhikmah@student.ub.ac.id', [Validators.required]),
      password: new FormControl('password', [Validators.required]),
    });
    let mock = component.submitForm()
    expect(mock).toBeUndefined();
  });

  it('should have method submitForm() id form invalid', () => {
    let mock = component.submitForm()
    expect(mock).toBeUndefined();
  });

  it('should have method ngOnInit() id form invalid', () => {
    let mock = component.ngOnInit()
    expect(mock).toBeUndefined();
  });
});
