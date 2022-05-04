import { Injectable } from '@angular/core';
import { coche } from '../mocks/coche';
import cochesData from '../mocks/coches.json';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService implements InMemoryDbService {

  constructor(
    private http: HttpClient
    ) { }

  private cochesUrl = '/src/app/mocks/coches.json'; 

  createDb(){return this.getCochesHTTP();}
  
  getCoches(): coche[] {
    return cochesData;
  }

  getCochesHTTP():Observable<coche[]>{
    return this.http.get<coche[]>(this.cochesUrl)
  }

}
