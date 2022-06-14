import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Car } from 'src/app/model/coche.model';
import { Marca } from 'src/app/model/marcas.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  car!: Car;
  marcas: Marca[]= [];
  marcasForm:string ='';
  colores: string[]=['Rojo','Amarillo','Azul','Verde','Morado','Blanco','Negro','Gris','Rosa','Naranja'];
  colorForm:string='';
  numberRegEx = /\-?\d*\.?\d{1,2}/;

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

  constructor(private loginService:LoginService, private router:Router, private crudService: CrudService, private route: ActivatedRoute) {
   }


  ngOnInit(): void {
    this.crudService.getCar(this.route.snapshot.params['id']).subscribe(res => {
      this.car = res
    });
      this.updateForm();
      this.getMarcas();
      console.log(this.car);
      console.log(this.marcas);
  }

  closeSesion(){ 
    this.loginService.closeSesion();
  }

  saveForm(): void{
    this.car.marca = this.marcasForm;
    this.car.modelo = this.modelo.value;
    this.car.anio = this.anio.value;
    this.car.color = this.colorForm;
    this.crudService.editCar(this.car);
    this.router.navigate(['/crud']);
    console.log(this.car)
  }

  updateForm(): void{
    this.marcasForm = (this.car.marca);
    this.modelo.patchValue(this.car.modelo);
    this.anio.patchValue(this.car.anio);
    this.colorForm = (this.car.color);
  }

  getMarcas():void{
    this.marcas = this.crudService.getMarcas();
  }
}
