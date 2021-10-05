package de.neuefische.backend.repo;

import de.neuefische.backend.module.ToDo;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@Data
@RequiredArgsConstructor
public class ToDoRepo {

    private List<ToDo> toDos = new ArrayList<>();

    public List<ToDo> getAllToDos() {
        return toDos;
    }

    public ToDo addToDo(ToDo toDo) {
        if (toDo.getId() == null) {
            String uuid = UUID.randomUUID().toString();
            ToDo newToDo = new ToDo(uuid, toDo.getDescription(), toDo.getStatus());
            toDos.add(newToDo);
            return newToDo;
        } else {
            ToDo newToDo = new ToDo(toDo.getId(), toDo.getDescription(), toDo.getStatus());
            toDos.add(newToDo);
            return newToDo;
        }
    }

    public Optional<ToDo> getToDoById(String id) {
        for (ToDo toDo : toDos) {
            if (toDo.getId().equals(id)) {
                return Optional.of(toDo);
            }
        }
        return Optional.empty();
    }

    public String getUUID(int element) {
        for (int i = 0; i < toDos.size(); i++) {
            if (i == element) {
                return toDos.get(i).getId();
            }
        }
        throw new IllegalArgumentException("No such todo found.");
    }

    public ToDo editToDo(String id, ToDo toDo) {
        Optional<ToDo> searchedToDo = getToDoById(id);
        if (searchedToDo.isPresent()) {
            searchedToDo.get().setStatus(toDo.getStatus());
            return searchedToDo.get();
        }
        throw new IllegalArgumentException("No todo found by such an id: " + id);
    }

    public boolean deleteToDo(String id) {
        Optional<ToDo> searchedToDo = getToDoById(id);
        if (searchedToDo.isPresent()) {
            toDos.remove(searchedToDo.get());
            return true;
        }
//        throw new IllegalArgumentException("No todo found by such an id: " + id);
        return false;
    }

    public void clear() {
        toDos.clear();
    }

}
