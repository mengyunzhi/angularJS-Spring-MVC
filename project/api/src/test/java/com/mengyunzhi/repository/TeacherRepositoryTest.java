package com.mengyunzhi.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
@RunWith(SpringRunner.class)
public class TeacherRepositoryTest {

    @Autowired
    private TeacherRepository constructorRepository;

    @Test
    public void findAllTest() {
        List<Teacher> constructors = (List<Teacher>) constructorRepository.findAll();
        assertThat(constructors.size()).isEqualTo(2);
    }

}