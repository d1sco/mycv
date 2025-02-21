import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http
    : HttpClient
  ) { }

  githubRepos(): Observable<any> {
    return this.http.get('https://api.github.com/users/d1sco/repos');
  }
}
