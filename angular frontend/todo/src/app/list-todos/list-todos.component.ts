import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class todo{
  constructor(
    public id : number,
    public description : string,
    public targetDate : Date,
    public done : boolean
  )
  {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos: todo[]
  message : string
  notification = ''
  // todos = [
  //   new todo(1,"Learn to Dance", false, new Date()),
  //   new todo(2,"Learn Angular FrontEnd Technology", false, new Date()),
  //   new todo(3,"Get Internship for Fall",false, new Date()),
  //   new todo(4,"Visit India",false, new Date())      
  // ]


  constructor( 
    private todoService: TodoDataService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();  
    this.getNotification();  
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('saloni').subscribe(
      response => {
        //console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('saloni',id).subscribe(
      response =>{
        //console.log(response);
        this.message = `Delete of Todo ${id} Successfull`;
        this.ngOnInit();
      }
    )
  }

  updateTodo(id){
    //console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);

  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

  getNotification(){
    this.todoService.retrieveEmergencyTodo('saloni').subscribe(
      response => {
        //console.log(response);
        if (response.length != 0){
          this.notification = 'Hurry!!!! Todos - '
          response.forEach(element => {
            this.notification += element.description +', ';
          }
          
          );
          this.notification = this.notification.substring(0,this.notification.length -2);
          this.notification = this.notification + ' TargetDate is Arriving Soon!'
        }
        else {
          this.notification = '';
        }
        
      }

    )

  }
}
