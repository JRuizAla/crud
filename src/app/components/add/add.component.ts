import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/coche.model';
import { Marca } from 'src/app/model/marcas.model';
import { CrudService } from 'src/app/services/crud.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cars: Car[]= [];
  marcas: Marca[]= [];
  marcasForm:string ='';
  colores: string[]=['Rojo','Amarillo','Azul','Verde','Morado','Blanco','Negro','Gris','Rosa','Naranja'];
  colorForm:string='';
  numberRegEx = /\-?\d*\.?\d{1,2}/;

//form group
  modelo = new FormControl('',[
    Validators.required,
    Validators.minLength(3),
  ]);
  anio = new FormControl('',[
    Validators.minLength(4),
    Validators.maxLength(4),
    Validators.required,
    Validators.pattern(this.numberRegEx)],
  );

  constructor(private router: Router, private crudService: CrudService, private loginService:LoginService) {}

  ngOnInit(): void { this.getCars(); this.getMarcas();

  }

  closeSesion():void{
    this.loginService.closeSesion();
  }

  getCars(): void{
    this.crudService.getCars().subscribe((cars : Car[])=>{
      this.cars = cars;
  })
  }

  getMarcas():void{
    this.marcas = this.crudService.getMarcas();
  }

  addCar(newCar: Car): void{
    this.crudService.addCar(newCar as Car);
    this.cars.push(newCar);
    this.router.navigate(['/crud']);
  }

  getCarForm(): Car {
    return {id:this.cars.length+1 , marca: this.marcasForm, modelo: this.modelo.value, anio:this.anio.value, color: this.colorForm}
  }
}
