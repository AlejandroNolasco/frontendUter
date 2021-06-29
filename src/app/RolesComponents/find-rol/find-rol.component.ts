import { Component, OnInit } from '@angular/core';
import { Rol } from '../../models/rol';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-find-rol',
  templateUrl: './find-rol.component.html',
  styleUrls: ['./find-rol.component.css']
})
export class FindRolComponent implements OnInit {

  id: number = 0;
  rol: Rol = new Rol();
  name: string = '';
  roles: Rol[]=[];

  constructor(private rolService: RolService) { }

  ngOnInit(): void {
  }

  searchRolByName(){
    this.rolService.getRolByName(this.name)
    .subscribe(roles =>this.roles=roles);
  }

}
