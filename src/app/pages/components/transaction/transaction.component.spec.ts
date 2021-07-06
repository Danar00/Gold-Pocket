import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TransactionService } from './service/transaction.service';
import { TransactionComponent } from './transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;
  let router: Router;
  let transactionService: TransactionService;
  let idPocket: "4028808d7913850e01791385f0430000";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    transactionService = TestBed.inject(TransactionService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have method submitForm() id form valid', () => {
    component.formPocket = new FormGroup({
      pocketName: new FormControl('Tabungan Lebaran', [Validators.required])
    });
    let mock = component.submitForm()
    expect(mock).toBeUndefined();
  });

  it('should have method submitForm() id form invalid', () => {
    let mock = component.submitForm()
    expect(mock).toBeUndefined();
  });

  it('should have method formUpdate() id form valid', () => {
    component.formUpdatePocket = new FormGroup({
      pocketUpdateName: new FormControl('Tabungan Kuliah', [Validators.required])
    });
    let mock = component.updateForm()
    expect(mock).toBeUndefined();
  });

  it('should have method formUpdate() id form invalid', () => {
    let mock = component.updateForm();
    expect(mock).toBeUndefined();
  });

  it('should have method formTransactionBuy() id form valid', () => {
    component.formUpdatePocket = new FormGroup({
      gramPurchase: new FormControl('', [Validators.required]),
      idPocket: new FormControl('', [Validators.required])
    });
    let mock = component.purchaseBuy()
    expect(mock).toBeUndefined();
  });

  it('should have method formTransactionBuy() id form invalid', () => {
    let mock = component.purchaseBuy()
    expect(mock).toBeUndefined();
  });

  it('should have method ngOnInit()', () => {
    let method = component.ngOnInit()
    expect(method).toBeUndefined();
  });

  it('should have method getAllPocketById()', () => {
    let method = component.getAllPocketById();
    expect(method).toBeUndefined();
  });

  it('should have method getAllProductById()', () => {
    let method = component.getAllProductById();
    expect(method).toBeUndefined();
  });

  it('should have method submitForm()', () => {
    let method = component.submitForm();
    expect(method).toBeUndefined();
  });

  it('should have method updateForm()', () => {
    let method = component.updateForm();
    expect(method).toBeUndefined();
  });

  it('should have method deletePocket()', () => {
    let method = component.deletePocketById(idPocket);
    expect(method).toBeUndefined();
  });

  it('should have method purchaseBuy()', () => {
    let method = component.purchaseBuy();
    expect(method).toBeUndefined();
  });
  
});

