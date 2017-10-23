package com.mengyunzhi.service;

import com.mengyunzhi.repository.Constructor;
import com.mengyunzhi.repository.ConstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConstructorServiceImpl implements ConstructorService {
    @Autowired
    ConstructorRepository constructorRepository;
    @Override
    public Constructor findOneById(Long id) {
        return constructorRepository.findOne(id);
    }
}
