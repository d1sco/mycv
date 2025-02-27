import { Component } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})

export class AppComponent {

  isAuthenticated: boolean = false;

  constructor(
    private utils: UtilsService
  ) {
    this.utils.isUserLoggedIn.subscribe((isUserLoggedIn) => {
      this.isAuthenticated = isUserLoggedIn;
    }
    )
  }

  logout(){
    this.utils.logout();
  }
}
