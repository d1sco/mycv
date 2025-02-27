import { Component } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Observable } from 'rxjs';

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
  resumeLink: string = 'https://firebasestorage.googleapis.com/v0/b/steve-sites.appspot.com/o/me%2FMARCH2025_SteveFordResume.pdf?alt=media&token=49a0953a-e3eb-480a-bc7e-ca49c3d43963'
  linkedInLink: string = 'https://www.linkedin.com/in/steven-ford-91b04a138/'
  profilePicture: string = 'https://firebasestorage.googleapis.com/v0/b/steve-sites.appspot.com/o/me%2Ffull_body.jpg?alt=media&token=2773398e-3a9a-41aa-938e-b6f4995bb58f'
  
  constructor(
    private utils: UtilsService
  ) {
    
  }

}
