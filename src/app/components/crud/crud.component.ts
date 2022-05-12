import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from 'src/app/model/coche.model';
import { CochesService } from 'src/app/services/coches.service';
import { CrudService } from 'src/app/services/crud.service';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  coches: Coche[] = [];
  user: string | null = localStorage.getItem('loggedUser');

  constructor(private router: Router, private cochesService: CochesService, private crudService: CrudService,public editComponent: EditComponent) { }
  ngOnInit(): void {
    this.cochesService.getCoches().subscribe((data : Coche[])=>{
      console.log(data);
      this.coches = data;
  })
  }

  closeSesion():void{ 
    this.crudService.closeSesion();
  }

  editCar(coche: Coche):void{
    console.log(coche);
    this.cochesService.editCoche(coche);
    this.router.navigate(['edit', coche.id]);
  }

  deleteCar(coche: Coche): void {
    this.coches = this.coches.filter(h => h !== coche);
    this.cochesService.deleteCoche(coche.id).subscribe();
  }


}
