import { BsButtonDirective } from './bs-button.directive';

describe('BsButtonDirective', () => {
  it('should create an instance', () => {
    const directive = new BsButtonDirective();
    expect(directive).toBeTruthy();
  });

  it('should have get buttonStyle()', () => {
    const directive = new BsButtonDirective();
    let mock = directive.buttonStyle
    expect(mock).toBeTruthy();
  });

  it('should have get applyStyle()', () => {
    const directive = new BsButtonDirective();
    let mock = directive.applyStyles
    expect(mock).toBeTruthy();
  });


});
