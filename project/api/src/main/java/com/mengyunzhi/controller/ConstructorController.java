package com.mengyunzhi.controller;

import com.mengyunzhi.repository.Constructor;
import com.mengyunzhi.repository.ConstructorRepository;
<<<<<<< HEAD
import com.mengyunzhi.service.ConstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
>>>>>>> origin/master
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Constructor")
public class ConstructorController {
    @Autowired
    private ConstructorRepository constructorRepository;

    @Autowired
    private ConstructorService constructorService;

    @GetMapping("/")
    public List<Constructor> getAll() {
        List<Constructor> constructors = (List<Constructor>) constructorRepository.findAll();
        return constructors;
    }

    @GetMapping("/{id}")
    public Constructor findOneById(@PathVariable("id") Long id) {
        Constructor constructor = constructorService.findOneById(id);
        return constructor;
    }
}
