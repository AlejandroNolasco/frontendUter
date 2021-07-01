import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import{Router} from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-list-rol',
  templateUrl: './list-rol.component.html',
  styleUrls: ['./list-rol.component.css']
})
export class ListRolComponent implements OnInit {

  name: string='';
  roles: Rol[]=[];

  constructor(private router: Router, private rolService: RolService) { }

  ngOnInit(): void {
    this.loadDataRoles();
  }

  loadDataRoles(){
    this.rolService.getRolList()
    .subscribe(roles=>this.roles=roles);
  }

  deleteRol(rol: Rol){
    this.rolService.deleteRol(rol.id)
    .subscribe(data=>{this.loadDataRoles();})
  }

  updateRol(rol: Rol){
    this.router.navigate(['roles/update', rol.id]);
  }
  searchRolByName(){
    if(this.name.length!=0){
      this.rolService.getRolByName(this.name)
      .subscribe(roles=>this.roles=roles);
    }
    else
      this.loadDataRoles();
  }
}

