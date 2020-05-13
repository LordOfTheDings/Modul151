import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../shared/service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../shared/model/category";
import {AuthGuard} from "../../../shared/guard/auth.guard";
import {InputValidationService} from "../../../shared/service/validation/input-validation.service";

@Component({
  selector: 'app-editcategory',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  currentCategory:Category;
  hasCurrent = false;
  categoryForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;
  allowedCharacters = new InputValidationService().getAllowedCharacters();
  validators = new InputValidationService().getValidators();

  constructor(private categoryService:CategoryService,
              private router: Router,
              private formBuilder: FormBuilder,
               guard: AuthGuard,
               route: ActivatedRoute) {
    guard.canActivate(route.snapshot, router.routerState.snapshot);
    this.categoryService.currentCategory.subscribe(value => this.currentCategory = value);
    this.hasCurrent = this.currentCategory != null;
  }

  ngOnInit(): void {
      this.categoryForm = this.formBuilder.group({
        text: [this.hasCurrent? this.currentCategory.text:'', this.validators],
      });
    }

  get f(){
    return this.categoryForm.controls;
  }

  getCategory():Category{
    let category = new Category();
    if(this.hasCurrent){
      category = this.currentCategory;
    }
    category.text = this.f.text.value;
    return category;
  }

  save(){
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }

    this.loading = true;
    this.categoryService.save(this.getCategory(),this.hasCurrent).subscribe(
      res=>{
        this.router.navigateByUrl("admin/categories");
      },
      err=>{
        alert("An error has occured while trying to edit category!");
        this.error = err;
        this.loading = false;
      }
    )
  }

}
