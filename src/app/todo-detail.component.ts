import { Component, Input } from '@angular/core';

import {TodoItem } from './TodoItem';

@Component({
  selector: 'todo-detail',
  styleUrls: ['./todo-detail.component.css'],
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent {
  @Input() todo: TodoItem;
}
