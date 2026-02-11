import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    console.log('before login ' + this.isUserLoggedIn());
    if (username === 'amar' && password === 'amar123') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after login ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

isUserLoggedIn(): boolean {
  const user = sessionStorage.getItem('authenticatedUser');
  return user !== null;
}

logout() {
  sessionStorage.removeItem('authenticatedUser'); 
}
}
