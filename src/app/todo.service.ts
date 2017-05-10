import { Injectable } from '@angular/core';

import { TodoItem } from './TodoItem';
import { TODOS } from './mock-todo';

@Injectable()
export class TodoService {
  getTodos(): Promise<TodoItem[]> {
    return Promise.resolve(TODOS);
  }
}
