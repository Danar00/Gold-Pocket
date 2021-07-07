import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomDatePipe } from "src/app/shared/pipes/custom-date/custom-date.pipe";
import { SharedModule } from "src/app/shared/shared.module";
import { HeaderComponent } from "./header.component";

describe('HeaderComponent()',() => {
    let fixture: ComponentFixture<HeaderComponent>
    let component: HeaderComponent;

    const date: Date = new Date();
    const customDate: CustomDatePipe = new CustomDatePipe();
    const expectDate = '07 Juli 2021';

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [SharedModule]
        });

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('transform date with customDate', () => {
        expect(customDate.transform(date)).toBe(expectDate)
    })

    it('create an instance', () => {
        const pipe = new CustomDatePipe();
        expect(pipe).toBeTruthy();
    });

})
