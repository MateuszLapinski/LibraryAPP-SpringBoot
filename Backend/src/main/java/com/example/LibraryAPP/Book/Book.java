package com.example.LibraryAPP.Book;

import com.example.LibraryAPP.User.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="books")
@Data
@NoArgsConstructor
@ToString
public class Book {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    @NonNull
    @Column(name="title")
    private String title;
    @NonNull
    @Column(name="author")
    private String author;

    @NonNull
    @Column(name="isREAD")
    private String isREAD;
//    @ManyToOne
//    private User user;
}
