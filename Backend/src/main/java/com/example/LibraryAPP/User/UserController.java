package com.example.LibraryAPP.User;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    ObjectMapper objectMapper;


    @GetMapping("/user/{id}")
    public User getById(@PathVariable("id") long id) {
        return userRepository.getById(id);
    }

    @GetMapping("/users")
    public ResponseEntity getAllUser() throws JsonProcessingException {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(objectMapper.writeValueAsString(users));
    }


    @PostMapping("/signup")
    public ResponseEntity signUp(@RequestBody User user) {
        List<User> userFromDb = userRepository.findByUsername(user.getUsername());

        if (!userFromDb.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
        } else {
            User savedUser = userRepository.save(user);
            return ResponseEntity.ok().build();
        }
    }
}

//
//    @PostMapping("/signin")
//    ResponseEntity<String> LoginUser(@Valid @RequestBody User logingUser) {
//        User user= userRepository.getByUserName(logingUser.getUser_name());
//        System.out.println(user.getUser_name() + user.getPassword());
//        System.out.println(logingUser.getUser_name() + logingUser.getPassword());
//        if (logingUser.getPassword().equals(user.getPassword()))
//        {
//            return ResponseEntity.ok("Password is Correct, You are Logged");
//        }
//        else {
//            return ResponseEntity.ok("Password is incorrect");
//        }
//
//    }
//
//
//    @PatchMapping("/{id}")
//    public int userUpdate(@PathVariable("id") int id, @RequestBody User updatedUser) {
//        User user = userRepository.getById(id);
//
//        if (user != null) {
//            if(updatedUser.getUser_name() != null) user.setUser_name(updatedUser.getUser_name());
//            if(updatedUser.getPassword() != null) user.setPassword(updatedUser.getPassword());
//            userRepository.update(user);
//            return 1;
//
//        } else return 1;
//    }
//
//    @DeleteMapping("/deleteUser/{id}")
//    public int update(@PathVariable("id") int id){
//        return userRepository.delete(id);
//    }
