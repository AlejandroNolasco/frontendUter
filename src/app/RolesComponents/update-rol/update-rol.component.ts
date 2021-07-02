import { Component, OnInit } from '@angular/core';
import { RolService } from '../../services/rol.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Rol } from '../../models/rol';

@Component({
  selector: 'app-update-rol',
  templateUrl: './update-rol.component.html',
  styleUrls: ['./update-rol.component.css']
})
export class UpdateRolComponent implements OnInit {

  id: number = 0;
  rol: Rol= new Rol();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private rolService : RolService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rolService.getRolById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.rol = datos;
    }, error=>console.log(error));
  }

  updateRol(){
    this.rolService.updateRol(this.id, this.rol)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['roles/list']);
    }, error=>console.log(error));
    this.rol = new Rol();
  }

}
