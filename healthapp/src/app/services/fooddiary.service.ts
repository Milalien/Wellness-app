import { Injectable } from '@angular/core';
import { Nutrients } from '../Models/nutrients';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FooddiaryService {

  nutrients: Nutrients[] = [];
  user = this.userService.exampleUser;

  private foodUrl = 'api/FoodDiaryEntries';

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



  // HTTP methods (don't work yet) :

  getEntry(id: number) {
    const url = `${this.foodUrl}/${id}`;
    return this.Http.get<Nutrients>(url);
  }
  getEntries(): Observable<Nutrients[]> {
    return this.Http.get<Nutrients[]>(this.foodUrl);

  }

  postEntry(nutrients: Nutrients): Observable<Nutrients> {
    return this.Http.post<Nutrients>(this.foodUrl, nutrients);
  }




}
