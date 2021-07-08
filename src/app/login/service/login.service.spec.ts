import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    injector = getTestBed();
    loginService = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('should be created login', () => {
    expect(loginService.login).toBeTruthy();
  });

  describe('#Login', () => {
    it('should return an Observable<any>', () => {
      const mock = [
        {
          "id": "8a68e4d478f8d7340178f8da705c0000",
          "username": "melia",
          "email": "danarhikmah@student.ub.ac.id",
          "status": true
        }
      ];

      const credentials = 
        {
          email: "danarhikmah@student.ub.ac.id",
          password: "password"
        }
        loginService
          .login(credentials)
          .subscribe((response: any) => {
            console.log('response from login.spec', response);
            expect(response).toEqual(mock);
          });

        const request = httpMock.expectOne(
          `http://localhost:8080/login`
        );
        request.flush(mock);
        expect(request.request.method).toBe('POST');
    });

  });
  
});
