package de.neuefische.backend.service;

import de.neuefische.backend.module.ToDo;
import de.neuefische.backend.repo.ToDoRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Data
@RequiredArgsConstructor
public class ToDoService {

    private final ToDoRepo toDoRepo;

    public List<ToDo> getAllToDos() {
        return toDoRepo.getAllToDos();
    }

//    public ToDo getToDoById(String id){
//        Optional<ToDo> searchedToDo = toDoRepo.getToDoById(id);
//        if(searchedToDo.isPresent()){
//            return toDoRepo.getToDoById(id).get();
//        }
//        throw new IllegalArgumentException("No todo found by such an id:" + id);
//    }

    public ToDo addToDo(ToDo toDo) {
        return toDoRepo.addToDo(toDo);
    }

    public ToDo editToDo(String id, ToDo toDo) {
        return toDoRepo.editToDo(id, toDo);
    }

    public boolean deleteToDo(String id) {
        return toDoRepo.deleteToDo(id);
    }
}
