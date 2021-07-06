import { HistoryService } from './../service/history.service';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryTransactionComponent } from './history-transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HistoryTransactionComponent', () => {
  let component: HistoryTransactionComponent;
  let fixture: ComponentFixture<HistoryTransactionComponent>;
  let router: Router;
  let historyService: HistoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTransactionComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    historyService = TestBed.inject(HistoryService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have method ngOnInit()', () => {
    let method = component.ngOnInit()
    expect(method).toBeUndefined();
  });

  it('should have method getAllHistoryByProductId()', () => {
    let method = component.getAllHistoryByProductId()
    expect(method).toBeUndefined();
  });

  it('should have method getPurchaseByCustomerId()', () => {
    let method = component.getPurchaseByCustomerId()
    expect(method).toBeUndefined();
  });

});
