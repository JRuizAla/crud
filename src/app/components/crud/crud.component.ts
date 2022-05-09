import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from 'src/app/model/coche.model';
import { CochesService } from 'src/app/services/coches.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  coches: Coche[] = [];
  user: string | null = localStorage.getItem('loggedUser');

  constructor(private router: Router, private cochesService: CochesService) { }
  ngOnInit(): void {
    this.cochesService.getCoches().subscribe((data : Coche[])=>{
      console.log(data);
      this.coches = data;
  })
  }



  closeSesion():void{ // sacarlo a un servicio
    localStorage.clear();
    this.router.navigate(['']);
  }

}
