package de.neuefische.backend.controller;

import de.neuefische.backend.module.ToDo;
import de.neuefische.backend.repo.ToDoRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;
import java.util.UUID;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ToDoControllerTest {


    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ToDoRepo toDoRepo;

    @BeforeEach
    public void clear() {
        toDoRepo.clear();
    }

    @Test
    public void testListToDoShouldReturnAllToDos() {

        //GIVEN
        String url = "http://localhost:" + port + "/api/todo";
        String uuid = UUID.randomUUID().toString();

        toDoRepo.addToDo(new ToDo(uuid, "firstToDo", "OPEN"));
        toDoRepo.addToDo(new ToDo(uuid, "secondToDo", "IN_PROGRESS"));
        toDoRepo.addToDo(new ToDo(uuid, "thirdToDo", "DONE"));

        //WHEN
        ResponseEntity<ToDo[]> response = restTemplate.getForEntity(url, ToDo[].class);
        System.out.println(toDoRepo.getUUID(0));
        System.out.println(toDoRepo.getUUID(1));
        System.out.println(toDoRepo.getUUID(2));

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new ToDo(toDoRepo.getUUID(0), "firstToDo", "OPEN"),
                new ToDo(toDoRepo.getUUID(1), "secondToDo", "IN_PROGRESS"),
                new ToDo(toDoRepo.getUUID(2), "thirdToDo", "DONE")
        ));
//        assertThat(response.getBody(),arrayContainingInAnyOrder(toDoRepo));

    }

    @Test
    public void testAddToDo() {

        //GIVEN
        String url = "http://localhost:" + port + "/api/todo";
        String uuid = UUID.randomUUID().toString();

        //WHEN
        ResponseEntity<ToDo> response = restTemplate.postForEntity(url, new ToDo(uuid, "firstToDo", "OPEN"), ToDo.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        System.out.println(toDoRepo.getUUID(0));
        assertThat(response.getBody(), is(
                new ToDo(toDoRepo.getUUID(0), "firstToDo", "OPEN")
        ));
    }

    @Test
    public void testEditToDo() {

        //GIVEN
        String url = "http://localhost:" + port + "/api/todo/";
        String uuid = UUID.randomUUID().toString();
        toDoRepo.addToDo(new ToDo(uuid, "firstToDo", "OPEN"));

        //WHEN
        HttpEntity<ToDo> request = new HttpEntity<>(new ToDo(toDoRepo.getUUID(0), "firstToDo", "IN_PROGRESS"));
        ResponseEntity<ToDo> response = restTemplate.exchange(
                url + toDoRepo.getUUID(0).toString(),
                HttpMethod.PUT,
                request,
                ToDo.class
        );

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody().getStatus(), is("IN_PROGRESS"));

    }

    @Test
    public void testDeleteToDo() {

        //GIVEN
        String url = "http://localhost:" + port + "/api/todo/";
        String uuid = UUID.randomUUID().toString();
        toDoRepo.addToDo(new ToDo(uuid, "firstToDo", "OPEN"));
        String deletedId = toDoRepo.getUUID(0);

        //WHEN
        restTemplate.delete(
                url + toDoRepo.getUUID(0).toString()
        );

        //THEN
        assertThat(toDoRepo.getToDoById(deletedId), is(Optional.empty()));

    }

}