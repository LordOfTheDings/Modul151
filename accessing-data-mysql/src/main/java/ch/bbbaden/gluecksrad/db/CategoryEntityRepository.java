package ch.bbbaden.gluecksrad.db;

import ch.bbbaden.gluecksrad.model.CategoryEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import java.util.Optional;

public interface CategoryEntityRepository extends CrudRepository<CategoryEntity, Integer> {

    <S extends CategoryEntity> S removeById(Integer s);

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
