import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { todo } from 'src/app/list-todos/list-todos.component';
import { JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http: HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<todo[]>(`${JPA_API_URL}/users/${username}/todos`);
    //console.log("Execute Hello World Bean service");
  }

  deleteTodo(username, id){
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo){
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`, todo);
  }

  retrieveEmergencyTodo(username){
    return this.http.get<todo[]>(`${JPA_API_URL}/users/${username}/todos/emergency`);
  }
}
