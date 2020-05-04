package ch.bbbaden.gluecksrad;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SentenceEntityRepository extends CrudRepository<SentenceEntity, Integer> {
    @Override
    <S extends SentenceEntity> S save(S s);

    @Override
    <S extends SentenceEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<SentenceEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<SentenceEntity> findAll();

    @Override
    Iterable<SentenceEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(SentenceEntity userEntity);

    @Override
    void deleteAll(Iterable<? extends SentenceEntity> iterable);

    @Override
    void deleteAll();
}
