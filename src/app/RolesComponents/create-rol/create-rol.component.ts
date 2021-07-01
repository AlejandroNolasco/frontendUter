import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from '../../services/rol.service';
@Component({
  selector: 'app-create-rol',
  templateUrl: './create-rol.component.html',
  styleUrls: ['./create-rol.component.css']
})
export class CreateRolComponent implements OnInit {

  rol: Rol = new Rol();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private rolService: RolService) { }
    

  ngOnInit(): void {
  }

  insertRol(){
    this.rolService.insertRol(this.rol)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.rol = new Rol();
      this.router.navigate(['roles/list']);
  }

}
