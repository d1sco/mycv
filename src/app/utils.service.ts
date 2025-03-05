import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userDetails: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  authCardTitle: string = 'This signup is to showcase skills like responsive design and state management.';
  authCardSubtitle: string = 'Google Cloud charges more than I can afford to pay to demo Multi-factor Authentication and SAML.';
  constructor(
    private http
    : HttpClient,
    private toastController: ToastController
  ) { }

  githubRepos(): Observable<any> {
    return this.http.get('https://api.github.com/users/d1sco/repos');
  }

  createUser(email: string, password: string): Promise<any> {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  }

  authenticateUser(email: string, password: string): Promise<any> {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
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

  logout() {
    const auth = getAuth();
    auth.signOut().then(() => {
      // Sign-out successful.
      this.isUserLoggedIn.next(false);
      this.userDetails.next(null);
    }).catch((error) => {
      // An error happened.
    });
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom', type: 'success' | 'danger' = 'danger'): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: position,
      color: type
    });

    await toast.present();
  }
}
