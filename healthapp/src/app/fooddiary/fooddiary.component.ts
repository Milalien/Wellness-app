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

    this.currentNutrients.calories2 = this.calories;
    this.currentNutrients.protein2 = this.protein;
    this.currentNutrients.carbs2 = this.carbs;
    this.currentNutrients.fat2 = this.fat;
    this.currentNutrients.notes2 = this.notes;

  }


  onSubmit(e: any) {
    console.log(e.value.calories);
    console.log(e.controls['calories'].status);


  }



}
