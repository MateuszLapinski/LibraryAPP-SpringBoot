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

    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/user/{id}")
    public int getIdByUsername(@PathVariable("id") String username) {
        List<User> userFromDb = userRepository.findByUsername(username);

        return userFromDb.get(0).getId();
    }

    @CrossOrigin(origins = {"http://localhost:3000/"})
    @GetMapping("/searchuser/{username}")
    public ResponseEntity searchUser(@PathVariable String username) {
        List<User> userFromDb = userRepository.findByUsername(username);

        if (!userFromDb.isEmpty()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
        }
    }

    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/users")
    public ResponseEntity getAllUser() throws JsonProcessingException {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(objectMapper.writeValueAsString(users));
    }

    @CrossOrigin(origins = {"http://localhost:3000"})
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

    @CrossOrigin(origins = {"http://localhost:3000"})
    @PatchMapping("/changepassword")
    public ResponseEntity<String> changePassword(@RequestBody User updatedUser) {
        List<User> userFromDB = userRepository.findByUsername(updatedUser.getUsername());

        if (!userFromDB.isEmpty()) {
            User user = userFromDB.get(0);

            if (!user.getPassword().equals(updatedUser.getPassword())) {
                user.setPassword(updatedUser.getPassword());
                userRepository.save(user);
                return ResponseEntity.ok("Password changed successfully");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("New password must be different from the old password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    //
    @CrossOrigin(origins = {"http://localhost:3000"})
    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody User loginUser) {
        String username = loginUser.getUsername();
        String password = loginUser.getPassword();

        List<User> listUserDB = userRepository.findByUsername(username);

        if (listUserDB.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        User userfromDB = listUserDB.get(0);
        if (userfromDB.getPassword().equals(password)) {
            return ResponseEntity.ok("Password is Correct, You are Logged");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect password");
        }
    }
}




//
//


//    @DeleteMapping("/deleteUser/{id}")
//    public int update(@PathVariable("id") int id){
//        return userRepository.delete(id);
//    }
