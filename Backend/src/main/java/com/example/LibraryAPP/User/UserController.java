package com.example.LibraryAPP.User;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;



@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

        @GetMapping("/user/{id}")
        public User getById(@PathVariable("id") long id) {
        return userRepository.getById(id);
//    }

//    @GetMapping("/users")
//    public List<User> getAllUser() {
//        return userRepository.getAllInformation();
//    }

//    @PostMapping("/signup")
//    ResponseEntity<String> addUser(@Valid @RequestBody User user) {
//        List<User> allUser= userRepository.getOnlyUserName();
//        if (!userRepository.getOnlyUserName().contains(user)){
//            System.out.println("User doesn't existed");
//            userRepository.add(user);
//            return ResponseEntity.ok("User is Valid");
//        }
//        else {
//            System.out.println("User existed");
//            return ResponseEntity.ok("The given name is taken ");
//        }
//
//    }
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
}}