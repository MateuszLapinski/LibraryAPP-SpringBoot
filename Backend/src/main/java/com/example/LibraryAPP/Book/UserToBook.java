package com.example.LibraryAPP.Book;

import com.example.LibraryAPP.User.User;
import jakarta.persistence.*;

    @Entity
    @Table(name = "user_to_book")
    public class UserToBook {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name = "user_id", referencedColumnName = "id")
        private User user;

        @ManyToOne
        @JoinColumn(name = "book_id", referencedColumnName = "id")
        private Book book;

        public UserToBook(User user, Book book) {
            this.user = user;
            this.book = book;
        }

        public UserToBook() {

        }
    }
