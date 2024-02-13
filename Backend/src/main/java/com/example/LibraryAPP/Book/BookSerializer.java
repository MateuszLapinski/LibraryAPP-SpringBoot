package com.example.LibraryAPP.Book;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;

public class BookSerializer extends StdSerializer<Book> {
    public BookSerializer() {
        this(null);
    }

    public BookSerializer(Class<Book> t) {
        super(t);
    }

    @Override
    public void serialize(Book book, JsonGenerator jgen, SerializerProvider provider) throws IOException {
        jgen.writeStartObject();
        jgen.writeStringField("title", book.getTitle());
        jgen.writeStringField("author", book.getAuthor());
        jgen.writeEndObject();
    }
}