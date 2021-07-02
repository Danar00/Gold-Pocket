import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../../../shared/shared.module"


describe('TransactionModule', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                CommonModule,
            ]
        })
      })

  it('initialize SharedModule', () => {
    const module = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  })

  it('initialize CommonModule', () => {
    const module = TestBed.inject(CommonModule);
    expect(module).toBeTruthy();
  })

})