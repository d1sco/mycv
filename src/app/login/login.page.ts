import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';
import { UtilsService } from '../utils.service';
import { Router } from '@angular/router';

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
    private utilService: UtilsService,
    private toastController: ToastController,
    private menuController: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log("Form is valid");
      this.utilService.authenticateUser(this.loginForm.value.username, this.loginForm.value.password)
        .then((user) => {
          // user.sendEmailVerification();
          this.presentToast('Login success! Please check your email for verification','top', 'success');
          this.router.navigate(['/account']);
        })
        .catch((error) => {
          console.log("Error creating user: " + error);
          this.presentToast('Login error','top');
        });
    } else {
      this.presentToast('Form is invalid','top');
    }
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom', type: 'success' | 'danger' = 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: position,
      color: type
    });

    await toast.present();
  }

  openMenu(){
    this.menuController.open('main-menu')
  }

}
