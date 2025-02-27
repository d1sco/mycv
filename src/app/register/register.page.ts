import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { UtilsService } from '../utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

   signupForm: FormGroup = new FormGroup({
      username: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    });
  

  constructor(
    private menuController: MenuController,
    private router: Router,
    private utils: UtilsService
  ) { }

  ngOnInit() {
  }


  openMenu(){
    this.menuController.open('main-menu')
  }

  onSubmit(){
    if(this.signupForm.valid){
      console.log("Form is valid");
      this.utils.createUser(this.signupForm.value.username, this.signupForm.value.password)
        .then((user) => {
          // user.sendEmailVerification();
          this.utils.presentToast('Signup success! Please check your email for verification','top', 'success');
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

}
