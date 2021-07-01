import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-find-category',
  templateUrl: './find-category.component.html',
  styleUrls: ['./find-category.component.css']
})
export class FindCategoryComponent implements OnInit {

  id: number = 0;
  category: Category = new Category();
  name: string = '';
  description: string = '';
  categories: Category[]=[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  searchCategoryByName(){
    this.categoryService.getCategoryByName(this.name)
    .subscribe(categories =>this.categories=categories);
  }

}
