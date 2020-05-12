package ch.bbbaden.gluecksrad.db;

import ch.bbbaden.gluecksrad.model.ScoreboardEntryEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ScoreboardEntryEntityRepository extends CrudRepository<ScoreboardEntryEntity, Integer> {
    @Override
    <S extends ScoreboardEntryEntity> S save(S s);

    @Override
    <S extends ScoreboardEntryEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<ScoreboardEntryEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<ScoreboardEntryEntity> findAll();

    @Override
    Iterable<ScoreboardEntryEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(ScoreboardEntryEntity ScoreboardEntryEntity);

    @Override
    void deleteAll(Iterable<? extends ScoreboardEntryEntity> iterable);

    @Override
    void deleteAll();
}
