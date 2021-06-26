import { retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  login(credentials: {email: string, password: string}): Observable<string> {
    return this.http.post('https://reqres.in/api/login', credentials)
      .pipe(
        retry(3),
        map((response: any) =>  response.token)
      );
  }

}
