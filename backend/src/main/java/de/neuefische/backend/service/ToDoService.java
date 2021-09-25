package de.neuefische.backend.service;

import de.neuefische.backend.module.ToDo;
import de.neuefische.backend.repo.ToDoRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDoService {

    private final ToDoRepo toDoRepo;

    public List<ToDo> getAllToDos(){
        return toDoRepo.getAllToDos();
    }

    public ToDo addToDo(ToDo toDo){
        return toDoRepo.addToDo(toDo);
    }

    public ToDo editToDo(String id, String status){
        return toDoRepo.editToDo(id, status);
    }

    public void deleteToDo(String id){
        toDoRepo.deleteToDo(id);
    }
}
