import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false
})
export class AccountPage implements OnInit {

  user: any

  constructor(
    private menuController: MenuController,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.utils.userDetails.subscribe((user) => {
      console.log('User: ', user)
      this.user = user
    })
  }

  openMenu(){
    this.menuController.open('main-menu')
  }

}
