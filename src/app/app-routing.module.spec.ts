import { fakeAsync, tick } from "@angular/core/testing";

describe('AsyncTest', async () => {

    it('asynchronous test example - setTimeout', () => {
        let test: boolean = false;
        setTimeout(() => {
            console.log('running assertions');
            test = true;
            // expect(true).toBeTruthy();

        }, 1000);
        expect(true).toBe(true);
        // akan fail karena test bersifat async tetapi belum menerapkan fakeAsync
    });

    // fakeAsync & tick => sebuah fungsi utk perjalanan waktu
    // tick ini sama seperti setTimeOut (unit test) -> mock setTimeOut
    // yg mana tick ini pasti ada fakeAsync()
    // tick ini gk boleh kurang dari setTimeOut, tapi bisa lebih 
    it('asynchronous example - setTimeout with fakeAsync', fakeAsync(() => {
        let test: boolean = false;
        setTimeout(() => {
            console.log('running assertions setTimeOut with fakeAsync');
            test = true;
        }, 1000);
        expect(test).toBe(false);
        tick(500);
        expect(test).toBe(false);
        tick(500);
        expect(test).toBe(true);
    }));
})
