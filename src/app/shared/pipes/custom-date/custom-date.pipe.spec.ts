import { CustomDatePipe } from './custom-date.pipe';

describe('CustomDatePipe', () => {
  const date: Date = new Date();
    const customDate: CustomDatePipe = new CustomDatePipe();
    const expectDate = '07 Juli 2021';

    it('transform date with customDate', () => {
        expect(customDate.transform(date)).toBe(expectDate)
    })

  it('create an instance', () => {
    const pipe = new CustomDatePipe();
    expect(pipe).toBeTruthy();
  });

});
