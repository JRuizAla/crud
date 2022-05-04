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

  constructor(private CrudService: CrudService, private router: Router) { }
  ngOnInit(): void { 
    this.getCochesHTTP();
  }

  coches: coche[] = [];
  user: string | null = localStorage.getItem('loggedUser');

  closeSesion():void{
    localStorage.clear();
    this.router.navigate(['']);
  }

  getCoches(): void {
    this.coches = this.CrudService.getCoches();
    console.log(this.coches);
  }

  getCochesHTTP(): void {
    this.CrudService.getCochesHTTP();
  }
}
//mock JSON para la tabla