import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: number = 0;
  category: Category= new Category();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private categoryService : CategoryService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.category = datos;
    }, error=>console.log(error));
  }

  updateCategory(){
    this.categoryService.updateCategory(this.id, this.category)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['categories/list']);
    }, error=>console.log(error));
    this.category = new Category();
  }

}
