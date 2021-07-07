import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginRoutingModule } from '../login/login-routing.module';

describe('pages-routing', async() => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
                PagesRoutingModule,
                HttpClientModule,
                LoginRoutingModule
            ],
            declarations: [
                PagesComponent,
                AppComponent
            ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        });

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture = TestBed.createComponent(PagesComponent);
        router.initialNavigation;
    });

    it('asynchronous test example - setTimeout', () => {
        let test: boolean = false;
        setTimeout(() => {
            console.log('running assertions');
            test = true;
            expect(true).toBeTruthy();

        }, 1000);
        expect(true).toBe(true);
        // akan fail karena test bersifat async tetapi belum menerapkan fakeAsync
    });

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