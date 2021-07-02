import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  name: string='';
  categories: Category[]=[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadDataCategories();
  }

  loadDataCategories(){
    this.categoryService.getCategoryList()
    .subscribe(categories=>this.categories=categories);
  }

  deleteCategory(category: Category){
    this.categoryService.deleteCategory(category.id)
    .subscribe(data=>{this.loadDataCategories();})
  }

  updateCategory(category: Category){
    this.router.navigate(['categories/update', category.id]);
  }
  searchCategoryByName(){
    if(this.name.length!=0){
      this.categoryService.getCategoryByName(this.name)
      .subscribe(categories=>this.categories=categories);
    }
    else
      this.loadDataCategories();
  }
}

