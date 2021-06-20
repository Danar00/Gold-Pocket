import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUtilsService {

  storeLogin(username: string, password: string): string {
    const user = {username, password}

    sessionStorage.setItem('person', JSON.stringify(user));
    console.log(sessionStorage.getItem('person'))

    return `${sessionStorage.getItem('person')}` 
  }

  storeRegister(email: string, username: string, password: string): string {
    const newUser = {email, username, password}

    sessionStorage.setItem('newPerson', JSON.stringify(newUser))
    console.log(sessionStorage.getItem('newPerson'));

    return `${sessionStorage.getItem('newPerson')}` 

  }
}
