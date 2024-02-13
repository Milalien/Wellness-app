import { Injectable } from '@angular/core';
import { Exercise, Program } from '../Models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  exampleProgram: Program;
  programs: Program[];
  Ex1 = new Exercise("time", "running", 1, 0, 0, 30);
  Ex2 = new Exercise("rxw", "Squat", 3, 10, 100);

  constructor() {
    this.exampleProgram = new Program("Example program", [this.Ex1, this.Ex2]);
    this.programs = [this.exampleProgram]
  }

  postProgram(prog: Program) {
    this.programs.push(prog);
  }

  getProgram(name: String): Program {
    return this.programs.find((p) => p.name === name);

  }

  getPrograms(): Program[] {
    return this.programs;
  }

  deleteProgram(name: String) {
    this.programs.splice(this.programs.findIndex(p => p.name === name), 1);
  }
}
