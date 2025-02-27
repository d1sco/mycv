import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private toastController: ToastController,
    private menuController: MenuController
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit button clicked");
    console.log("Username: " + this.loginForm.value.username);
    console.log("Password: " + this.loginForm.value.password);
    if(this.loginForm.valid){
      console.log("Form is valid");
    } else {
      console.log("Form is invalid");
      this.presentToast('top');
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', type: 'success' | 'danger' = 'danger') {
    const toast = await this.toastController.create({
      message: 'Login form invalid',
      duration: 1500,
      position: position,
      color: type
    });

    await toast.present();
  }

  openMenu(){
    console.log("Menu opened");
    this.menuController.open('main-menu')
  }

}
