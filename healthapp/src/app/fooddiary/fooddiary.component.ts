import { Component } from '@angular/core';
import { Nutrients } from '../nutrients';

@Component({
  selector: 'app-fooddiary',
  templateUrl: './fooddiary.component.html',
  styleUrl: './fooddiary.component.css'
})
export class FooddiaryComponent {

  calories: string = "";
  protein: string = "";
  carbs: string = "";
  fat: string = "";
  notes: string = "";

  currentNutrients: Nutrients = new Nutrients();

  constructor() {

    this.currentNutrients.calories = this.calories;
    this.currentNutrients.protein = this.protein;
    this.currentNutrients.carbs = this.carbs;
    this.currentNutrients.fat = this.fat;
    this.currentNutrients.notes = this.notes;

  }


  onSubmit(e: any) {
    console.log(e.value.calories);
    console.log(e.controls['calories'].status);


  }



}
