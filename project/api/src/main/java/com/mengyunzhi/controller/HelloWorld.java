package com.mengyunzhi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
    @RequestMapping("/helloWorld")
    public String say() {
        return "Hello World! -- API";
    }
}