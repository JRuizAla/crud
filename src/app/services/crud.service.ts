import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";

import { Car } from 'src/app/model/coche.model';
import marcasData from 'src/app/mocks/marcas.json';
import { Marca } from 'src/app/model/marcas.model';
@Injectable({ providedIn: 'root' })
export class CrudService {

  carsCollection: AngularFirestoreCollection<Car>;
  cars: Observable<any[]>;

  SERVER_URL: string = "/api/cars";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private db: AngularFirestore) { 
    this.carsCollection = db.collection('cars');
    this.cars = db.collection('cars').valueChanges();
  }

  getCars():Observable<any[]>{
    return this.cars;
  }

  getCar(id:string){
    return this.carsCollection.doc('id').get();
  }

  addCar(car: Car){
    this.carsCollection.add(car);
  }

  deleteCar(car: Car){
    this.carsCollection.doc(`${car.id}`).delete();
  }

  editCar(car:Car){
  this.carsCollection.doc('id').update(car);
  }

  getMarcas(): Marca[]{
    return marcasData;
  }
}