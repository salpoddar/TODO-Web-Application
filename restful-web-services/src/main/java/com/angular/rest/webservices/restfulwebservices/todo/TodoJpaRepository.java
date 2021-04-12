package com.angular.rest.webservices.restfulwebservices.todo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
		List<Todo> findByUsername(String username);
		List<Todo> findByTargetDateBetween(Date date1, Date date2);
}
