package de.neuefische.backend.controller;


import de.neuefische.backend.module.ToDo;
import de.neuefische.backend.service.ToDoService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("api/todo")
@Data
@RequiredArgsConstructor
public class ToDoController {

    private final ToDoService toDoService;

    @GetMapping("api/todo")
    public List<ToDo> getAllToDos() {
        System.out.println("GetAll");
        return toDoService.getAllToDos();
    }

//    @GetMapping("api/todo/{id}")
//    public ToDo getToDoById(@PathVariable String id){
//        System.out.println("GetID");
//        return toDoService.getToDoById(id);
//    }

    @PostMapping("api/todo")
    public ToDo addToDo(@RequestBody ToDo toDo) {
        System.out.println("PostNew");
        return toDoService.addToDo(toDo);
    }

    @PutMapping("api/todo/{id}")
    public ToDo editToDo(@PathVariable String id, @RequestBody ToDo toDo) {
        System.out.println("EditCurrent");
//        System.out.println(getAllToDos());
        return toDoService.editToDo(id, toDo);
    }

    @DeleteMapping("api/todo/{id}")
    public boolean deleteToDo(@PathVariable String id) {
        System.out.println("DeleteId");
        return toDoService.deleteToDo(id);
    }
}
