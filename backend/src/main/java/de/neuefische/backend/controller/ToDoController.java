package de.neuefische.backend.controller;


import de.neuefische.backend.module.ToDo;
import de.neuefische.backend.service.ToDoService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todo")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDoController {

    private final ToDoService toDoService;

    @GetMapping
    public List<ToDo> getAllToDos(){
        return toDoService.getAllToDos();
    }

    @PostMapping
    public ToDo addToDo(@RequestBody ToDo toDo){
        return toDoService.addToDo(toDo);
    }

    @PutMapping("{id}")
    public ToDo editToDo(@PathVariable String id, String status){
        return toDoService.editToDo(id, status);
    }

    @DeleteMapping("{id}")
    public void deleteToDo(@PathVariable String id){
        toDoService.deleteToDo(id);
    }

}
