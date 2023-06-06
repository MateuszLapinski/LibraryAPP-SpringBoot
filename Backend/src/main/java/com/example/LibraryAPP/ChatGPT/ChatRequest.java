package com.example.LibraryAPP.ChatGPT;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class ChatRequest {
        private String model;
        private List<com.example.LibraryAPP.ChatGPT.Message> messages;
        private int n;
        private double temperature;


        public ChatRequest(String model, String prompt){
            this.model=model;
            this.messages= new ArrayList<>();
            this.messages.add(new com.example.LibraryAPP.ChatGPT.Message("user", prompt));
        }

    }
