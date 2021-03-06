import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/coche.model';
import { CrudService } from 'src/app/services/crud.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  coches: Car[] = [];
  user: string | null = localStorage.getItem('loggedUser');

  constructor(private router: Router, private crudService: CrudService, private loginService: LoginService) { }
  ngOnInit(): void {
    this.crudService.getCars().subscribe((data : Car[])=>{
      console.log(data);
      this.coches = data;
  })
  }

  closeSesion():void{ 
    this.loginService.logout();
  }

  editCar(car: Car):void{
    this.router.navigate(['edit', car.id]);
  }

  deleteCar(car: Car): void {
    this.coches = this.coches.filter(h => h !== car);
    this.crudService.deleteCar(car);
  }


}
