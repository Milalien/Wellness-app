import { Injectable } from '@angular/core';
import { Nutrients } from '../nutrients';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooddiaryService {

  nutrients: Nutrients[] = [];
  exampleNutrients: Nutrients;
  newNutrients: Nutrients;
  calories = "1";
  prottein = "1";
  carbs = "1";
  fat = "1";
  notes = "yabadaba";
  url


  constructor(private Http: HttpClient) {

    this.exampleNutrients = new Nutrients(this.calories, this.prottein, this.carbs, this.fat, this.notes);
    this.nutrients.push(this.exampleNutrients);
    this.newNutrients = new Nutrients("", "", "", "", "");
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
