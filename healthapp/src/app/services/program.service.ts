import { Injectable } from '@angular/core';
import { Exercise, Program } from '../Models/exercise';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  exampleProgram: Program;
  programs: Program[];
  Ex1 = new Exercise("time", "running", 1, 0, 0, 30);
  Ex2 = new Exercise("rxw", "Squat", 3, 10, 100);
  programUrl: string = "xx";

  constructor(private Http: HttpClient) {
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

  getProgram1() {
    return this.Http.get<Program>(this.programUrl);
  }

  postProgram1(exampleProgram: Program): Observable<Program> {
    return this.Http.post<Program>(this.programUrl, this.programs).pipe();
  }

}
