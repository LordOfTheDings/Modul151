package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.CategoryEntityRepository;
import ch.bbbaden.gluecksrad.model.CategoryEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller // This means that this class is a Controller
@RequestMapping(path="/admin/categories") // This means URL's start with /demo (after Application path)
@CrossOrigin
public class CategoryController {
    @Autowired
    private CategoryEntityRepository categoryEntityRepository;

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<CategoryEntity>getAllCategories(){
        return categoryEntityRepository.findAll();
    }

    @PostMapping (path="/delete")
    public @ResponseBody
    void deleteCategory(@Valid  @RequestBody CategoryEntity category){
         categoryEntityRepository.deleteById(category.getId());
    }

    @PostMapping(path="/add")
    public @ResponseBody
    void addCategory(@Valid @RequestBody CategoryEntity category){
        categoryEntityRepository.save(category);
    }

    @PostMapping(path="/edit")
    public @ResponseBody
    void editCategory(@Valid @RequestBody CategoryEntity category){
        deleteCategory(category);
        categoryEntityRepository.save(category);
    }

}
