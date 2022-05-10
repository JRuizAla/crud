import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CochesService } from 'src/app/services/coches.service';
import { Coche } from 'src/app/model/coche.model';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  editCoche: Coche ={ id : 1 , marca:'', modelo:'', anio:0, color:''};
  constructor(private crudService:CrudService, private router:Router, private cochesService: CochesService) {
    //this.editCoche ={ id : 0 , marca:'', modelo:'', anio:0, color:''};
   }


  marca = new FormControl('',[
    Validators.required,
    Validators.minLength(3),
  ]);
  modelo = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  anio = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);
  color = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);

  closeSesion(){
    this.crudService.closeSesion();
  }

  setCoche(coche:Coche): void{
    this.router.navigate(['/edit']);
    this.editCoche = coche;
    console.log(this.editCoche);
  }

  save(): void{
    this.editCoche.marca = this.marca.value;
    this.editCoche.modelo = this.modelo.value;
    this.editCoche.anio = this.anio.value;
    this.editCoche.color = this.color.value;
    this.cochesService.editCoche(this.editCoche).subscribe(response => console.log(response));
    this.router.navigate(['/crud']);
    console.log(this.editCoche)
  }

  updateForm(): void{
    if(this.editCoche){
    this.marca.patchValue(this.editCoche.marca);
    this.modelo.patchValue(this.editCoche.modelo);
    this.anio.patchValue(this.editCoche.anio);
    this.color.patchValue(this.editCoche.color);
    }
  }

}
