import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    Validators.minLength(4),
  ]);
  modelo = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
  ]);

  closeSesion():void{
    localStorage.clear();
    this.router.navigate(['']);
  }
}
