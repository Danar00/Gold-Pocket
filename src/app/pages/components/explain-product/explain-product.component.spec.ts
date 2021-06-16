import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainProductComponent } from './explain-product.component';

describe('ExplainProductComponent', () => {
  let component: ExplainProductComponent;
  let fixture: ComponentFixture<ExplainProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
