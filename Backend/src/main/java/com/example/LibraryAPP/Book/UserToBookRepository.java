package com.example.LibraryAPP.Book;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserToBookRepository extends JpaRepository<UserToBook, Long> {
}
