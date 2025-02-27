import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilsService } from '../utils.service';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false
})
export class AccountPage implements OnInit {

  user: any

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

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
