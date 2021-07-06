import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesComponent } from './templates.component';


describe('TemplateComponent()',() => {
  let fixture: ComponentFixture<TemplatesComponent>
  let component: TemplatesComponent;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [TemplatesComponent]
      });

      fixture = TestBed.createComponent(TemplatesComponent);
      component = fixture.componentInstance;
  });

  it('should create', () => {
      expect(component).toBeDefined();
  });

  //nativeElement
  it('should have <app-header>', () => {
      const templateElement: HTMLElement = fixture.nativeElement;
      const appHeader = templateElement.querySelector('app-header');
      expect(appHeader).toBeTruthy();
  })

})

