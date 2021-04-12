package com.angular.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;



@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static long idCounter = 1;
	static {
		todos.add(new Todo(idCounter++,"saloni","Learn to Dance", new Date(), false));
		todos.add(new Todo(idCounter++,"saloni","Learn about Angular", new Date(), false));
		todos.add(new Todo(idCounter++,"saloni","Learn about MicroServices", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	
	public Todo deleteByID(long id) {
		Todo todo = findById(id);
		
		if (todo == null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(idCounter++);
			todos.add(todo);
		}else {
			deleteByID(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
}
