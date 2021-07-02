import { CommonModule } from "@angular/common";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "./../shared/shared.module";

describe('Template Module()', () => {

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