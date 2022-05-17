import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/coche.model';
import { CrudService } from 'src/app/services/crud.service';
import { LoginService } from 'src/app/services/login.service';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  coches: Car[] = [];
  user: string | null = localStorage.getItem('loggedUser');

  constructor(private router: Router, private crudService: CrudService, private loginService: LoginService,public editComponent: EditComponent) { }
  ngOnInit(): void {
    this.crudService.getCars().subscribe((data : Car[])=>{
      console.log(data);
      this.coches = data;
  })
  }

  closeSesion():void{ 
    this.loginService.closeSesion();
  }

  editCar(car: Car):void{
    console.log(car);
    this.crudService.editCar(car);
    this.router.navigate(['edit', car.id]);
  }

  deleteCar(car: Car): void {
    this.coches = this.coches.filter(h => h !== car);
    this.crudService.deleteCar(car.id).subscribe();
  }


}
