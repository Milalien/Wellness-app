import { Injectable } from '@angular/core';
import { Nutrients } from '../Models/nutrients';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FooddiaryService {

  nutrients: Nutrients[] = [];
  user = this.userService.exampleUser;
  constructor(private Http: HttpClient, public userService: UserService) {

  }

  postDiaryEntry(newInput: Nutrients) {
    this.nutrients.push(newInput);
  }
  getDiaryEntries() {
    return this.nutrients;
  }
  getLastTen() {
    if (this.nutrients.length >= 10) {
      return this.nutrients.slice((this.nutrients.length - 10), this.nutrients.length);
    }
    else {
      return this.nutrients;
    }
  }
  /* Ei toimi vielä
    postData(nutrients: Nutrients): Observable<Nutrients> {
      let headers = new HttpHeaders().append('ApiKey', 'your-api-key');
      return HttpClient.post(this.url, nutrients, { headers: headers })
        .pipe(
          map(response => {
            return response as Nutrients
          })
        );
    }
  
  */

}
