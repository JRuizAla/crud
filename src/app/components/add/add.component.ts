import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import cochesData from 'src/app/mocks/coches.json'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
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

  closeSesion():void{
    localStorage.clear();
    this.router.navigate(['']);
  }

  addCoche(): void{
    cochesData.push({id:cochesData.length+1 , marca: this.marca.value, modelo: this.modelo.value, anio:this.anio.value, color: this.color.value});
    this.router.navigate(['/crud']);
  }
  
}
