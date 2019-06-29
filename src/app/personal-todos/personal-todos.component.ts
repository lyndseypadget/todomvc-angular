import { Component } from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'personal-todos',
  templateUrl: './personal-todos.component.html',
  styleUrls: ['./personal-todos.component.css'],
  providers: []
})
export class PersonalTodosComponent {

  todoDataService: TodoDataService = new TodoDataService('personal');
  newTodo: Todo = new Todo();

  constructor() {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  getCompleteCount() {
    return this.todoDataService.getComplete().length;
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  removeComplete() {
    this.todoDataService.removeComplete();
  }

  stopEditing(todo: Todo, editedTitle: string) {
  todo.title = editedTitle;
  todo.editing = false;
    this.todoDataService.updateTodoById(todo.id, todo);
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoDataService.remove(todo);
    }

    todo.title = editedTitle;
    this.todoDataService.updateTodoById(todo.id, todo);
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.todoDataService.todos, event.previousIndex, event.currentIndex);
    // this.todoDataService.updateStore();

    if (event.previousContainer === event.container) {
      moveItemInArray(this.todoDataService.todos, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
