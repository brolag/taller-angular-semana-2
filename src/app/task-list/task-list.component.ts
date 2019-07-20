import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  
  public newTask: any = {};
  public taskList: Array<any> = [];
  
  constructor() { }

  ngOnInit() {
    console.log('esta es la nueva lista', this.taskList);
  }

  public updateList(taskTitle: string): void {
    this.newTask = this.createTask(taskTitle, new Date());
    console.log('Se creo una nueva tarea: ', this.newTask);
    this.taskList = this.addTask(this.taskList, this.newTask);
    this.cleanForm();
  }

  private createTask(title: string, date: Date) {
    return { title, date };
  }

  private addTask(taskList, task) {
    taskList.push(task);
    return taskList;
  }
  
  private cleanForm(): void {
    this.newTask = {};
  }

}
