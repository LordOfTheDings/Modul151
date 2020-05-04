package ch.bbbaden.gluecksrad;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AnswerEntityRepository extends CrudRepository<AnswerEntity, Integer> {
    @Override
    <S extends AnswerEntity> S save(S s);

    @Override
    <S extends AnswerEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<AnswerEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<AnswerEntity> findAll();

    @Override
    Iterable<AnswerEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(AnswerEntity userEntity);

    @Override
    void deleteAll(Iterable<? extends AnswerEntity> iterable);

    @Override
    void deleteAll();
}
