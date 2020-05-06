package ch.bbbaden.gluecksrad.db;

import ch.bbbaden.gluecksrad.model.ScoreboardentryEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ScoreboardentryEntityRepository extends CrudRepository<ScoreboardentryEntity, Integer> {
    @Override
    <S extends ScoreboardentryEntity> S save(S s);

    @Override
    <S extends ScoreboardentryEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<ScoreboardentryEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<ScoreboardentryEntity> findAll();

    @Override
    Iterable<ScoreboardentryEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(ScoreboardentryEntity userEntity);

    @Override
    void deleteAll(Iterable<? extends ScoreboardentryEntity> iterable);

    @Override
    void deleteAll();
}
