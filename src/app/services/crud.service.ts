import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, CollectionReference
} from '@angular/fire/firestore';

import { Car } from 'src/app/model/coche.model';
import marcasData from 'src/app/mocks/marcas.json';
import { Marca } from 'src/app/model/marcas.model';
@Injectable({ providedIn: 'root' })
export class CrudService {

  carsCollection: CollectionReference = collection(this.firestore, 'cars');
  cars: Observable<Car[]>;

  SERVER_URL: string = "/cars";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private firestore: Firestore) {
    this.cars = this.getCars();
  }

  getCars():Observable<Car[]>{
      return collectionData(this.carsCollection, { idField: 'id' }) as Observable<Car[]>;
  }

  getCar(id: string) {
    const carsRef = doc(this.firestore, `${this.SERVER_URL}/${id}`);
    return docData(carsRef, { idField: 'id' }) as Observable<Car>;
  }

  addCar(car: Car){
    return addDoc(this.carsCollection, car);
  }

  deleteCar(car: Car){
    const carDocRef = doc(this.firestore, `${this.SERVER_URL}/${car.id}`);
    return deleteDoc(carDocRef);
  }

  editCar(car:Car){
  const carDocRef = doc(this.firestore, `${this.SERVER_URL}/${car.id}`);
  return setDoc(carDocRef, car);
  }

  getMarcas(): Marca[]{
    return marcasData;
  }
}