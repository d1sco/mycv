import { Component } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  repos: Observable<any[]> = this.utils.githubRepos();

  title: string = 'Steve Ford | Software Developer'
  name: string = 'Hi, my name is Steve.'
  job: string = 'I am a software developer.'
  resumeLink: string = 'https://firebasestorage.googleapis.com/v0/b/steve-sites.appspot.com/o/me%2FApril2025_SteveFordResume_v2.pdf?alt=media&token=687e226d-d0a3-4c57-b0b8-2698eeb7afee'
  linkedInLink: string = 'https://www.linkedin.com/in/steven-ford-91b04a138/'
  profilePicture: string = 'https://firebasestorage.googleapis.com/v0/b/steve-sites.appspot.com/o/me%2Ffull_body.jpg?alt=media&token=2773398e-3a9a-41aa-938e-b6f4995bb58f'
  
  constructor(
    private utils: UtilsService,
    private menuController: MenuController
  ) {
    
  }

  openMenu(): void{
    this.menuController.open('main-menu')
  }

}
