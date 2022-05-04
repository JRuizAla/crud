import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { coche } from 'src/app/mocks/coche';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private crudService: CrudService, private router: Router) { }
  ngOnInit(): void { 
    this.coches = this.crudService.getCoches();
  }

  coches: coche[] = [];
  user: string | null = localStorage.getItem('loggedUser');

  closeSesion():void{ // sacarlo a un servicio
    localStorage.clear();
    this.router.navigate(['']);
  }


}
//mock JSON para la tabla