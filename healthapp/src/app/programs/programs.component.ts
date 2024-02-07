import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../exercise';

interface exType {
  value: String,
  viewVal: String
}

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
  exerciseForm: FormGroup;
  newProgram: Exercise[];
  newExercise: Exercise;
  eType: String;
  exTypes: exType[] = [
    { value: "rxw", viewVal: "Reps x Weight" },
    { value: "time", viewVal: "Time" }
  ]

  form = this.fb.group({
    exerciseType: new FormControl('', Validators.required),
    exerciseName: new FormControl("", Validators.required),
    sets: new FormControl(Validators.required),
    reps: new FormControl(),
    weight: new FormControl(),
    time: new FormControl(),
    program: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {

  }

  get program() {
    return this.form.controls["program"] as FormArray;
  }

  addExercise() {
    this.eType = "";
    this.exerciseForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      sets: new FormControl(Validators.required),
      reps: new FormControl(),
      weight: new FormControl(),
      time: new FormControl()
    })
    this.program.push(this.exerciseForm);
  }

  deleteExercise(exerciseIndex: number) {
    this.program.removeAt(exerciseIndex);
  }
}
