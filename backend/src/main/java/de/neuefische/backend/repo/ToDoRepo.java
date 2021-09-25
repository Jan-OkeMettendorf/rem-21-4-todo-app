package de.neuefische.backend.repo;

import de.neuefische.backend.module.ToDo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDoRepo {

    private List<ToDo> toDos = new ArrayList<>();

    public List<ToDo> getAllToDos(){
        return toDos;
    }

    public ToDo addToDo(ToDo toDo){
        toDos.add(toDo);
        return toDo;
    }

    public Optional<ToDo> findById(String id){
        for (ToDo toDo : toDos) {
            if(toDo.getId() == id){
                return Optional.of(toDo);
            }
        }
        return Optional.empty();
    }

    public ToDo editToDo(String id, String status){
        Optional<ToDo> searchedToDo = findById(id);
        if(searchedToDo.isPresent()){
            searchedToDo.get().setStatus(status);
            return searchedToDo.get();
        }
        throw new IllegalArgumentException("No todo found by such an id: " + id);
    }

    public void deleteToDo(String id){
        toDos.remove(id);
    }

}
