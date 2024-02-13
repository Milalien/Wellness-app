import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Nutrients } from '../Models/nutrients';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FooddiaryService } from '../services/fooddiary.service';
import { MatTable } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-fooddiary',
  templateUrl: './fooddiary.component.html',
  styleUrl: './fooddiary.component.css'
})
export class FooddiaryComponent implements OnInit {

  displayedColumns: string[] = ['Kcal', 'Protein', 'Carbs', 'Fats', 'Notes'];
  diaryContent: Nutrients[];
  NutrientForm = new FormGroup({
    Kcal: new FormControl(null, [Validators.required]),
    Protein: new FormControl(null, [Validators.required]),
    Carbs: new FormControl(null, [Validators.required]),
    Fats: new FormControl(null, [Validators.required]),
    notes: new FormControl()
  });


  constructor(private fdService: FooddiaryService) {

  }
  @ViewChild(MatTable) table: MatTable<Nutrients>;

  ngOnInit(): void {
    this.diaryContent = this.fdService.getLastTen();

  }

  get Calories() {
    return this.NutrientForm.get('Calories');
  }
  get Protein() {
    return this.NutrientForm.get('Protein');
  }
  get Carbs() {
    return this.NutrientForm.get('Carbs');
  }
  get Fats() {
    return this.NutrientForm.get('Fats');
  }
  get notes() {
    return this.NutrientForm.get('notes');
  }


  onSubmit() {
    this.fdService.postDiaryEntry(new Nutrients(this.NutrientForm.value.Kcal, this.NutrientForm.value.Protein, this.NutrientForm.value.Carbs, this.NutrientForm.value.Fats, this.NutrientForm.value.notes));
    this.diaryContent = this.fdService.getLastTen();
    this.table.renderRows();
    this.NutrientForm.reset();

  }
}
