package com.example.LibraryAPP.Book;

import com.example.LibraryAPP.User.User;
import com.example.LibraryAPP.User.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ObjectMapper objectMapper;
    public static final Logger logger= Logger.getLogger(BookController.class.getName());
    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/allbooks")
    public ResponseEntity getBooks() throws JsonProcessingException {
           List <Book> books= bookRepository.findAll();
        return ResponseEntity.ok(objectMapper.writeValueAsString(books));
    }


    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/yourbooks/{username}")
    public ResponseEntity getAllBooks(@PathVariable("username") String username) throws JsonProcessingException {
        List<Book> books= bookRepository.findByUserUsername(username);
        return ResponseEntity.ok(objectMapper.writeValueAsString(books));
    }

    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/filterbooks/{userInput}")
    public ResponseEntity filterBooks(@PathVariable("userInput") String userInput) throws JsonProcessingException{
        List<Book> books=bookRepository.filterBooks(userInput);
        ObjectMapper mapper = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addSerializer(Book.class, new BookSerializer());
        mapper.registerModule(module);

        return ResponseEntity.ok(mapper.writeValueAsString(books));
    }
    @CrossOrigin(origins = {"http://localhost:3000"})
    @PostMapping("/addbooks/{username}")
    public ResponseEntity addBook(@RequestBody Book book, @PathVariable("username") String username) throws JsonProcessingException{
        List<User> user= userRepository.findByUsername(username);
        Optional<Book> bookFromDB= bookRepository.findByTitle(book.getTitle());
        if(!user.isEmpty()){
            if(!bookFromDB.isPresent()){
                book.setUser(user.get(0));
                Book savedBook = bookRepository.save(book);
                return ResponseEntity.ok().build();
            }else {
                return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
            }
        }else
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }


    @PutMapping("/updatebook/{id}")
    public int update(@PathVariable("id") long id, @RequestBody Book updatedBook) {
        Book book = bookRepository.getById(id);

        if (book != null) {
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            bookRepository.save(book);

            return 1;
        } else {
            return -1;
        }
    }

    @DeleteMapping("/deleteBooks/{id}")
    public void update(@PathVariable("id") int id){
        bookRepository.deleteBook(id);
    }
}