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

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private utils: UtilsService,
    private toastController: ToastController,
    private menuController: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log("Form is valid");
      this.utils.authenticateUser(this.loginForm.value.username, this.loginForm.value.password)
        .then((user) => {
          // user.sendEmailVerification();
          this.utils.presentToast('Login success! Please check your email for verification','top', 'success');
          this.router.navigate(['/account']);
        })
        .catch((error) => {
          console.log("Error creating user: " + error);
          this.utils.presentToast('Login error','top');
        });
    } else {
      this.utils.presentToast('Form is invalid','top');
    }
  }

  

  openMenu(){
    this.menuController.open('main-menu')
  }

}
