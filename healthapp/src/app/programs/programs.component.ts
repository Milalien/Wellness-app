import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise, Program } from '../Models/exercise';
import { ProgramService } from '../services/program.service';


interface exType {
  value: String,
  viewVal: String
}

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  programs: Program[];

  exerciseForm: FormGroup;
  name: String;
  newProgram: Exercise[] = [];
  newProg: Program;
  eType: String[] = [];
  exTypes: exType[] = [
    { value: "rxw", viewVal: "Reps x Weight" },
    { value: "time", viewVal: "Time" }
  ]

  form = this.fb.group({
    name: new FormControl('', Validators.required),
    exerciseType: new FormControl('', Validators.required),
    exerciseName: new FormControl('', Validators.required),
    sets: new FormControl(0, Validators.required),
    reps: new FormControl(null),
    weight: new FormControl(null),
    time: new FormControl(null),
    program: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private progService: ProgramService) {

  }

  ngOnInit(): void {
    this.programs = this.progService.getPrograms();


  }
  get program() {
    return this.form.controls["program"] as FormArray;
  }

  addExercise() {

    this.exerciseForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      sets: new FormControl(0, Validators.required),
      reps: new FormControl(null),
      weight: new FormControl(null),
      time: new FormControl(null)
    });
    this.program.push(this.exerciseForm);

  }


  deleteExercise(exerciseIndex: number) {
    this.program.removeAt(exerciseIndex);

  }

  onSubmit() {
    for (let i = 0; i < this.program.length; i++) {
      this.newProgram.push(new Exercise(this.exerciseForm.value.type, this.exerciseForm.value.name, this.exerciseForm.value.sets, this.exerciseForm.value.reps, this.exerciseForm.value.weight, this.exerciseForm.value.time))
    }
    this.newProg = new Program(this.form.value.name, this.newProgram);
    this.progService.postProgram(this.newProg);
    this.form.reset();

  }
}
