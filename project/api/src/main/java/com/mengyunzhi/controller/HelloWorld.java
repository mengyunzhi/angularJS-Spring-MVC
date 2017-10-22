package com.mengyunzhi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
    @RequestMapping("/helloWorld")
    public SayHello say() {
        SayHello sayHello = new SayHello();
        sayHello.setValue("hello world api");
        return sayHello;
    }

    static public class SayHello {
        private String value;

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }
}