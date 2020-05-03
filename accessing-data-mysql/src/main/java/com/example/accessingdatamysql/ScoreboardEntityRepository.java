package com.example.accessingdatamysql;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ScoreboardEntityRepository extends CrudRepository<ScoreboardEntity, Integer> {
    @Override
    <S extends ScoreboardEntity> S save(S s);

    @Override
    <S extends ScoreboardEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<ScoreboardEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<ScoreboardEntity> findAll();

    @Override
    Iterable<ScoreboardEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(ScoreboardEntity scoreboardEntity);

    @Override
    void deleteAll(Iterable<? extends ScoreboardEntity> iterable);

    @Override
    void deleteAll();
}
