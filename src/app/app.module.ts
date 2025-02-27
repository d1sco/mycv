import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilsService } from './utils.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private utils: UtilsService
  ) {
    const firebaseConfig = environment.firebaseConfig;

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    this.utils.userAuth();
  }


}
