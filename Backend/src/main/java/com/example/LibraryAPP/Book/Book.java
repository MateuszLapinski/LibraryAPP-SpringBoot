package com.example.LibraryAPP.Book;

import com.example.LibraryAPP.User.User;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import io.micrometer.common.lang.NonNull;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.IOException;

@Entity
@Table(name = "book")
@Data
@NoArgsConstructor
public class Book {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @NonNull
    @Column(name = "title")
    private String title;

    @NonNull
    @Column(name = "author")
    private String author;

    @NonNull
    @Column(name = "isREAD")
    private String isREAD;
}

