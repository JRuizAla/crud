import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import cochesData from 'src/app/mocks/coches.json'
import { Coche } from 'src/app/model/coche.model';
import { Marca } from 'src/app/model/marcas.model';
import { CochesService } from 'src/app/services/coches.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  coches: Coche[]= [];
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

  constructor(private router: Router, private cochesService: CochesService, private loginService:LoginService) {}

  ngOnInit(): void { this.getCoches(); this.getMarcas();

  }

  closeSesion():void{
    this.loginService.closeSesion();
  }

  getCoches(): void{
    this.cochesService.getCoches().subscribe((coches : Coche[])=>{
      console.log(coches);
      this.coches = coches;
  })
  }

  getMarcas():void{
    this.marcas = this.cochesService.getMarcas();
  }

  addCocheHttp(): void{
    let newCoche: Coche = {id:cochesData.length+1 , marca: this.marcasForm, modelo: this.modelo.value, anio:this.anio.value, color: this.colorForm}
    console.log(newCoche)
    this.cochesService.addCocheHttp(newCoche as Coche).subscribe(Coche => {this.coches.push(Coche);});
    this.router.navigate(['/crud']);
  }
  
}
