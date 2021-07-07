import { PagesRoutingModule } from './pages-routing.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../shared/shared.module"
import { TemplatesModule } from '../templates/templates.module';


describe('PagesModule', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                CommonModule,
                PagesRoutingModule,
                TemplatesModule
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

  it('initialize PagesRoutingModule', () => {
    const module = TestBed.inject(PagesRoutingModule);
    expect(module).toBeTruthy();
  })

  it('initialize TemplatesModule', () => {
    const module = TestBed.inject(TemplatesModule);
    expect(module).toBeTruthy();
  })

})