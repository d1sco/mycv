import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userDetails: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http
    : HttpClient
  ) { }

  githubRepos(): Observable<any> {
    return this.http.get('https://api.github.com/users/d1sco/repos');
  }

  createUser(email: string, password: string): Promise<any> {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  }

  userAuth() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('USER FOUND')
        this.isUserLoggedIn.next(true);
        let userProfile = {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified,
        }
        this.userDetails.next(userProfile);
        // ...
      } else {
        // User is signed out
        // ...
        console.log('USER NOT FOUND')
      }
    });
  }

}
