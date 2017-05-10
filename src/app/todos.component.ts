import { Component, OnInit } from '@angular/core';

import { TodoItem } from './TodoItem';

import { TodoService } from './todo.service';

@Component({
  selector: 'my-todos',
  styleUrls: ['./todos.component.css'],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  title = 'My TodoList';
  todo: TodoItem = {
    id: 1,
    label: "test de todo",
    description: 'ceci est un test'
  };
  todos: TodoItem[];
  selectedTodo: TodoItem;
  constructor(private todoService: TodoService){ };
  getTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  };
  ngOnInit(): void {
    this.getTodos();
  };
  onSelect(todo: TodoItem): void {
    this.selectedTodo = todo;
  }
}
