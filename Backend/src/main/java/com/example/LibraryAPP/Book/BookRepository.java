package com.example.LibraryAPP.Book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    @Query(value="SELECT books.id, title, author, isREAD, user_id FROM LibraryAPP.books JOIN users ON books.userID=users.id WHERE books.userID=?",nativeQuery = true)
    List<Book> findByUserId(int user_id);

    @Query(value = "SELECT books.id, title, author, isREAD, userID, users.username FROM LibraryAPP.books JOIN users ON books.userID=users.id WHERE users.username=?",nativeQuery = true)
    List<Book> findByUserUsername(@Param("username") String username);
    Optional<Book> findByTitle(String title);

   @Query(value="SELECT * FROM LibraryAPP.books WHERE author LIKE CONCAT('%', :userInput, '%') OR title LIKE CONCAT('%', :userInput, '%')", nativeQuery = true)
   List<Book> filterBooks(@Param ("userInput") String userInput);


    @Query(value="Delete FROM books where books.id=?1", nativeQuery = true)
    void deleteBook(@Param("id") int id);
}
