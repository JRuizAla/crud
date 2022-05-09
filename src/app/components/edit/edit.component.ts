import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CochesService } from 'src/app/services/coches.service';
import { Coche } from 'src/app/model/coche.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editCoche: Coche | undefined = undefined;
  constructor(private crudService:CrudService, private router:Router, private cochesService: CochesService) { }

  ngOnInit(): void {
    /*this.cochesService.editCoche(cohesss: Coche).subscribe((data : Coche)=>{
      console.log(data);
      this.editCoche = data;
  })*/
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

  save(){
    this.router.navigate(['/crud']);
  }
}
