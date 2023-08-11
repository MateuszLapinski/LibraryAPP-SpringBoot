package com.example.LibraryAPP.Book;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
    ObjectMapper objectMapper;
    public static final Logger logger= Logger.getLogger(BookController.class.getName());
    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/allbooks")
    public ResponseEntity getBooks() throws JsonProcessingException {
           List <Book> books= bookRepository.findAll();
        return ResponseEntity.ok(objectMapper.writeValueAsString(books));
    }

    @GetMapping("/yourbooks/{user_id}")
    public ResponseEntity getAllBooks(@PathVariable("user_id") int user_id) throws JsonProcessingException {
        List<Book> books= bookRepository.findByUserId(user_id);
        return ResponseEntity.ok(objectMapper.writeValueAsString(books));
    }

    @CrossOrigin(origins = {"http://localhost:3000"})
    @PostMapping("/addbooks")
    public ResponseEntity addBook(@RequestBody Book book){
        Optional<Book> bookFromDB= bookRepository.findByTitle(book.getTitle());
        if(bookFromDB.isPresent()){
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
        }
        Book savedBook = bookRepository.save(book);
        return ResponseEntity.ok(savedBook);
    }

    //DODANIE KODÓW BŁĘDÓW
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