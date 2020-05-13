import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "./api.service";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private currentCategorySubject: BehaviorSubject<Category>;
  public currentCategory: Observable<Category>;

  constructor(private apiService: ApiService) {
    this.currentCategorySubject = new BehaviorSubject<Category>(JSON.parse(sessionStorage.getItem('currentCategory')));
    this.currentCategory = this.currentCategorySubject.asObservable();
  }

  getAllCategories():Observable<Category[]>{
    return  this.apiService.getAllCategories();
  }

  setCategory(category: Category){
    if(category != null) {
      sessionStorage.setItem('currentCategory', JSON.stringify(category));
      this.currentCategorySubject.next(category);
    }
  }

  resetCategory(){
    sessionStorage.removeItem('currentCategory');
    this.currentCategorySubject.next(null);
  }

  save(category:Category,hasCurrent:boolean):Observable<Category>{
  if(hasCurrent){
    this.resetCategory();
    return this.apiService.editCategory(category);
  }
    return this.apiService.addCategory(category);
  }

  deleteCategory(category: Category):Observable<Category> {
    return this.apiService.deleteCategory(category);
  }

}
