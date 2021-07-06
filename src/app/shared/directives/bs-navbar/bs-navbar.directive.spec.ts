import { BsNavbarDirective, BsNavbarTextDirective } from './bs-navbar.directive';

describe('BsNavbarDirective', () => {
  it('should create an instance', () => {
    const directive = new BsNavbarDirective();
    expect(directive).toBeTruthy();
  });

  it('should have get defaultStyle()', () => {
    const directive = new BsNavbarDirective();
    let mock = directive.defaultStyle
    expect(mock).toBeTruthy();
  });

  it('should have get applyStyle()', () => {
    const directive = new BsNavbarDirective();
    let mock = directive.applyStyles
    expect(mock).toBeTruthy();
  });

  it('should have get windowScrol()', () => {
    const directive = new BsNavbarDirective();
    let mock = directive.onWindowScroll
    expect(mock).toBeTruthy();
  });
});

describe('BsNavbarTextDirective', () => {
  it('should create an instance', () => {
    const directive = new BsNavbarTextDirective();
    expect(directive).toBeTruthy();
  });

  it('should have get defaultTextStyle()', () => {
    const directive = new BsNavbarTextDirective();
    let mock = directive.defaultTextStyle
    expect(mock).toBeTruthy();
  });

  it('should have get applyStyle()', () => {
    const directive = new BsNavbarTextDirective();
    let mock = directive.applyStyles
    expect(mock).toBeTruthy();
  });

  it('should have get windowScrol()', () => {
    const directive = new BsNavbarTextDirective();
    let mock = directive.onWindowScroll
    expect(mock).toBeTruthy();
  });


});