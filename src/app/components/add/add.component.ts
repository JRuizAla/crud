import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import cochesData from 'src/app/mocks/coches.json'
import { Coche } from 'src/app/model/coche.model';
import { Marca } from 'src/app/model/marcas.model';
import { CochesService } from 'src/app/services/coches.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  coches: Coche[]= [];
  marcas: Marca[]= [];
  marcass:string ='';

  constructor(private router: Router, private cochesService: CochesService) {}

  ngOnInit(): void { this.getCoches(); this.getMarcas();

  }

  modelo = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  anio = new FormControl('',[
    Validators.required,//validacion numerica
    Validators.minLength(4),
  ]);
  color = new FormControl('',[
    Validators.required,//colores basicos con array y selector
    Validators.minLength(4),
  ]);

  closeSesion():void{
    localStorage.clear();
    this.router.navigate(['']);
  }

  private getCoches(): void{
    this.cochesService.getCoches().subscribe((coches : Coche[])=>{
      console.log(coches);
      this.coches = coches;
  })
  }

  getMarcas():void{
    this.marcas = this.cochesService.getMarcas();
  }

  addCocheHttp(): void{
    let newCoche: Coche = {id:cochesData.length+1 , marca: this.marcass, modelo: this.modelo.value, anio:this.anio.value, color: this.color.value}
    console.log(newCoche)
    this.cochesService.addCocheHttp(newCoche as Coche).subscribe(Coche => {this.coches.push(Coche);});
    this.router.navigate(['/crud']);
  }
  
}
