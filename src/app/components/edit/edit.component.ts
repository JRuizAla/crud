import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CochesService } from 'src/app/services/coches.service';
import { Coche } from 'src/app/model/coche.model';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public coche!: Coche;

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

  constructor(private crudService:CrudService, private router:Router, private cochesService: CochesService, private route: ActivatedRoute) {
   }


  ngOnInit(): void {
    this.cochesService.getCoche(this.route.snapshot.params['id']).subscribe( (coche: Coche) => {
      this.coche = coche;
      this.updateForm();
      console.log(this.coche);
    });
  }




  closeSesion(){
    this.crudService.closeSesion();
  }

  save(): void{
    this.coche.marca = this.marca.value;
    this.coche.modelo = this.modelo.value;
    this.coche.anio = this.anio.value;
    this.coche.color = this.color.value;
    this.cochesService.editCoche(this.coche).subscribe(response => console.log(response));
    this.router.navigate(['/crud']);
    console.log(this.coche)
  }

  updateForm(): void{
    this.marca.patchValue(this.coche.marca);
    this.modelo.patchValue(this.coche.modelo);
    this.anio.patchValue(this.coche.anio);
    this.color.patchValue(this.coche.color);
  }

}
