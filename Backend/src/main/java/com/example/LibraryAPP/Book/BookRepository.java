package com.example.LibraryAPP.Book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    @Query(value="SELECT books.id, title, author, user_id, user_name FROM LibraryAPP.books JOIN users ON user_id=users.id WHERE user_id=?1",nativeQuery = true)
    List<Book> findByUserId(int user_id);

    Optional<Book> findByTitle(String title);

    @Query(value="Delete FROM books where books.id=?1", nativeQuery = true)
    void deleteBook(@Param("id") int id);
}
