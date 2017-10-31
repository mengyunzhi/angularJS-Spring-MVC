package com.mengyunzhi.controller;

import com.mengyunzhi.repository.Teacher;
import com.mengyunzhi.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Teacher")
public class TeacherController {
    @Autowired
    private TeacherRepository constructorRepository;
    @GetMapping("/")
    public List<Teacher> getAll() {
        List<Teacher> constructors = (List<Teacher>) constructorRepository.findAll();
        return constructors;
    }
}
