package ch.bbbaden.gluecksrad;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserEntityRepository extends CrudRepository<UserEntity, Integer> {
    @Override
    <S extends UserEntity> S save(S s);

    @Override
    <S extends UserEntity> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<UserEntity> findById(Integer integer);

    @Override
    boolean existsById(Integer integer);

    @Override
    Iterable<UserEntity> findAll();

    @Override
    Iterable<UserEntity> findAllById(Iterable<Integer> iterable);

    @Override
    long count();

    @Override
    void deleteById(Integer integer);

    @Override
    void delete(UserEntity userEntity);

    @Override
    void deleteAll(Iterable<? extends UserEntity> iterable);

    @Override
    void deleteAll();
}
