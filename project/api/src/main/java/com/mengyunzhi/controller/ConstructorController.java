package com.mengyunzhi.controller;

import com.mengyunzhi.repository.Constructor;
import com.mengyunzhi.repository.ConstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Constructor")
public class ConstructorController {
    @Autowired
    private ConstructorRepository constructorRepository;
    @GetMapping("/")
    public List<Constructor> getAll() {
        List<Constructor> constructors = (List<Constructor>) constructorRepository.findAll();
        return constructors;
    }
}
