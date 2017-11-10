package com.mengyunzhi.controller;

import com.mengyunzhi.repository.Teacher;
import com.mengyunzhi.repository.TeacherRepository;
import com.mengyunzhi.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Teacher")
public class TeacherController {
    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private TeacherService teacherService;

    @GetMapping("/")
    public List<Teacher> getAll() {
        List<Teacher> teachers = (List<Teacher>) teacherRepository.findAll();
        return teachers;
    }

    @GetMapping("/{id}")
    public Teacher findOneById(@PathVariable("id") Long id) {
        Teacher teacher = teacherService.findOneById(id);
        return teacher;
    }

    @PostMapping("/")
    public Teacher save(@RequestBody Teacher teacher) {
        return teacherRepository.save(teacher);
    }
}
