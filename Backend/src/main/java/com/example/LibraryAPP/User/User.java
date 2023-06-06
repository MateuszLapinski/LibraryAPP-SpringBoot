package com.example.LibraryAPP.User;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    private String user_name;
    @NonNull
    private String password;

}
