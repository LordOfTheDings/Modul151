package ch.bbbaden.gluecksrad.db;

import ch.bbbaden.gluecksrad.model.QuestionEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface QuestionEntityRepository extends CrudRepository<QuestionEntity, Integer> {
    @Override
    <S extends QuestionEntity> S save(S s);

    @Override
    <S extends QuestionEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<QuestionEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<QuestionEntity> findAll();

    @Override
    Iterable<QuestionEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(QuestionEntity userEntity);

    @Override
    void deleteAll(Iterable<? extends QuestionEntity> iterable);

    @Override
    void deleteAll();
}
