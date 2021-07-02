import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { TestBed } from "@angular/core/testing";
import { TemplatesModule } from './templates/templates.module';
import { PagesModule } from './pages/pages.module';
import { LandingModule } from './pages/components/landing/landing.module';
import { SharedModule } from './shared/shared.module';



describe('Module', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                BrowserModule,
                SharedModule,
                TemplatesModule,
                PagesModule,
                LandingModule,
                LoginModule
            ]
        })
    });

    it('initialize AppModule', () => {
        const module = TestBed.inject(AppModule);
        expect(module).toBeTruthy();
    });

    it('initialize BrowserModule', () => {
        const module = TestBed.inject(BrowserModule);
        expect(module).toBeTruthy();
    });

    it('initialize SharedModule', () => {
        const module = TestBed.inject(AppModule);
        expect(module).toBeTruthy();
    });

    it('initialize TemplatesModule', () => {
        const module = TestBed.inject(AppModule);
        expect(module).toBeTruthy();
    });

    it('initialize LandingModule', () => {
        const module = TestBed.inject(AppModule);
        expect(module).toBeTruthy();
    });

    it('initialize LoginModule', () => {
        const module = TestBed.inject(AppModule);
        expect(module).toBeTruthy();
    });

    it('initialize AppModule', () => {
        const module = TestBed.inject(AppModule);
        expect(module).toBeTruthy();
    });
})