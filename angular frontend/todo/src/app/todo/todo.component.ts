import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number;
  to: todo;

  constructor( private todoservice: TodoDataService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.to = new todo(this.id,'',new Date(), false);

  
    if (this.id != -1){
      //console.log(this.id)
      this.todoservice.retrieveTodo('saloni', this.id).subscribe(
      data => this.to = data
      )
    }
    
    
  }

  saveTodo(){
    if (this.id == -1){
    this.todoservice.createTodo('saloni', this.to)
      .subscribe (
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }

      )
    }
    else {
      this.todoservice.updateTodo('saloni',this.id, this.to)
      .subscribe (
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }

      )
    }
    
  }

}
