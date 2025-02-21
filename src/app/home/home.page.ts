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
  
  constructor(
    private utils: UtilsService
  ) {
    
  }

}
