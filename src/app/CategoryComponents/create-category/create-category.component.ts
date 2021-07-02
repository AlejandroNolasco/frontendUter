import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private categoryService: CategoryService) { }
    

  ngOnInit(): void {
  }

  insertCategory(){
    this.categoryService.insertCategory(this.category)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.category = new Category();
      this.router.navigate(['categories/list']);
  }

}
