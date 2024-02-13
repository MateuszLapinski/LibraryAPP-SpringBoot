package com.example.LibraryAPP.Book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    @Query(value="SELECT books.id, title, author, isREAD FROM LibraryAPP.book JOIN user ON book.userID=user.id WHERE book.userID=?",nativeQuery = true)
    List<Book> findByUserId(int user_id);

    @Query(value = "SELECT book.id, book.title, book.author, book.isREAD FROM libraryapp.user_to_book JOIN book ON user_to_book.book_id=book.id JOIN user ON user_to_book.user_id=user.id WHERE user.username=?",nativeQuery = true)
    List<Book> findByUserUsername(@Param("username") String username);

    Optional<Book> findByTitle(String title);

   @Query(value="SELECT * FROM LibraryAPP.book WHERE author LIKE CONCAT('%', :userInput, '%') OR title LIKE CONCAT('%', :userInput, '%')", nativeQuery = true)
   List<Book> filterBooks(@Param ("userInput") String userInput);


    @Query(value="Delete FROM book where book.id=?", nativeQuery = true)
    void deleteBook(@Param("id") int id);
}
