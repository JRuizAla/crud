import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Car } from 'src/app/model/coche.model';
import marcasData from 'src/app/mocks/marcas.json';
import { Marca } from 'src/app/model/marcas.model';
@Injectable({ providedIn: 'root' })
export class CrudService {

  SERVER_URL: string = "/api/cars";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.SERVER_URL)
      .pipe(
        tap(_ => console.log('fetched cars'))
      );
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.SERVER_URL}/${id}`;
    return this.http.get<Car>(url).pipe(
      tap(_ => console.log(`fetched Car id=${id}`)),
    );
  }

  addCarHttp(newCar: Car): Observable<Car> {
    return this.http.post<Car>(this.SERVER_URL, newCar, this.httpOptions).pipe(
      tap((newCar: Car) => console.log(`added Car w/ id=${newCar.id}`)),
    );
  }

  editCar(car: Car): Observable<any> {
    console.log(car)
    return this.http.put(`${this.SERVER_URL}/${car.id}`, car, this.httpOptions)
  }

  deleteCar(id: number): Observable<Car> {
    const url = `${this.SERVER_URL}/${id}`;
  
    return this.http.delete<Car>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Car id=${id}`))
    );
  }

  getMarcas(): Marca[]{
    return marcasData;
  }
}