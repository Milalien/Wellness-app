import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {

  exerciseForm: FormGroup = new FormGroup({
    exerciseList: new FormArray([])
  });

  getExerciseFIelds(): FormGroup {
    return new FormGroup({
      exerciseName: new FormControl(''),
      exerciseType: new FormControl(''),
      exerciseReps: new FormControl(''),
    });
  }

  exerciseListArray() {
    return this.exerciseForm.get('exerciseList') as FormArray;
  }

  addExercise() {
    this.exerciseListArray().push(this.getExerciseFIelds());
  }

  removeExercise(i: number) {
    this.exerciseListArray().removeAt(i);
  }

  getFormData() {
    console.log(this.exerciseForm.value);
  }


}
