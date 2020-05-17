import { Component, OnInit } from '@angular/core';
import {Category} from "../../shared/model/category";
import {CategoryService} from "../../shared/service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGuard} from "../../shared/guard/auth.guard";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category[];
  constructor(private categoryService:CategoryService,
               private router:Router,
                guard: AuthGuard,
                route:ActivatedRoute) {
    guard.canActivate(route.snapshot, router.routerState.snapshot);
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      res=>{
        this.categories = res;
      },
      err=>{
        alert("An error has occured while trying to get categories!");
      }
    )
  }

  addNewCategory() {
    this.categoryService.resetCategory();
    this.router.navigateByUrl("/admin/categories/edit");
  }

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category).subscribe(
      res=>{
        location.reload();
      },
      error => {
        alert("Please remove any references to this category, before deleting!");
      }
    );
  }

  editCategory(category: Category) {
    this.categoryService.setCategory(category);
    this.router.navigateByUrl("admin/categories/edit");
  }
}
