import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss']
})
export class CreateTaskFormComponent implements OnInit {

  public newTaskTitle: string;
  @Output() taskTitle: EventEmitter<string>;

  constructor() {
    this.newTaskTitle = '';
    this.taskTitle = new EventEmitter();
  }

  ngOnInit() {
  }

  public submitForm() {
   this.taskTitle.emit(this.newTaskTitle);
  }

}
