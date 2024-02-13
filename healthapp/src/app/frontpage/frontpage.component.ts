import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todoitem } from '../Models/todoitem';
import { TodoService } from '../services/todo.service';



@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent implements OnInit {

  user: User = this.userService.exampleUser;
  todos: Todoitem[] = [];
  todoForm: FormGroup;

  form = this.fb.group({
    name: new FormControl(''),
    completed: new FormControl(false),
    todoFormArray: this.fb.array([])
  });

  constructor(public userService: UserService, private router: Router, private fb: FormBuilder, private tdService: TodoService) {
  }
  get todoFormArray() {
    return this.form.controls["todoFormArray"] as FormArray;
  }
  ngOnInit(): void {
    this.todos = this.tdService.GetTodo();

    if (this.user.latestMood == "good") {
      document.getElementById("moodCard").style.backgroundColor = "lightgreen";

    }
    if (this.user.latestMood == "average") {
      document.getElementById("moodCard").style.backgroundColor = "gold";

    }
    if (this.user.latestMood == "poor") {
      document.getElementById("moodCard").style.backgroundColor = "crimson";

    }

  }
  GoodMood() {
    this.user.latestMood = "good";
    document.getElementById("moodCard").style.backgroundColor = "lightgreen";
  }
  AvMood() {
    this.user.latestMood = "average";
    document.getElementById("moodCard").style.backgroundColor = "gold";
  }
  PoorMood() {
    this.user.latestMood = "poor";
    document.getElementById("moodCard").style.backgroundColor = "crimson";
  }

  Update() {
    this.router.navigate(['updateinfo'])
  }
  newTodo() {

    this.todoForm = new FormGroup({
      name: new FormControl("", Validators.required),
      completed: new FormControl(false)
    });
    this.todoFormArray.push(this.todoForm);
  }

  done(name: String) {
    this.tdService.deleteTodo(name);
  }
  get name() {
    return this.form.get('name');
  }
  postTodo() {

    this.tdService.postTodo(new Todoitem(this.todoForm.value.name));

    this.todoFormArray.removeAt(0);
  }
}
