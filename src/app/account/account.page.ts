import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilsService } from '../utils.service';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false
})
export class AccountPage implements OnInit {

  user: any
  title: string ='Account'

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(
    private menuController: MenuController,
    private utils: UtilsService
  ) { 
    
  }

  ngOnInit() {
    this.utils.userDetails.subscribe((user) => {
      console.log('User: ', user)
      this.user = user
    })
  }

  openMenu(){
    this.menuController.open('main-menu')
  }

  async onSubmit(){
    console.log('submit shiet');
  }

  async addData(){
    const db = getFirestore();
    console.log('User form: ', this.userForm.value)
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log(e)
    }
  }

}
