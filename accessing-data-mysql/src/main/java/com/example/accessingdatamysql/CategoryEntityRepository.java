package com.example.accessingdatamysql;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CategoryEntityRepository extends CrudRepository<CategoryEntity, Integer> {
    @Override
    <S extends CategoryEntity> S save(S s);

    @Override
    <S extends CategoryEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<CategoryEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<CategoryEntity> findAll();

    @Override
    Iterable<CategoryEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(CategoryEntity userEntity);

    @Override
    void deleteAll(Iterable<? extends CategoryEntity> iterable);

    @Override
    void deleteAll();
}
