import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ApiUrl } from "./apiUrl";
import { ListResponseModel } from "../models/baseModels/listResponseModel";
import { Car } from "../models/entities/car";
import { CarDetail } from "../models/entities/carDetail";

@Injectable({
  providedIn: 'root'
})

export class CarService{
  private apiGetAllUrl = ApiUrl.baseUrl + 'api/Car/getall';
  private apiGetCarDetailsUrl = ApiUrl.baseUrl + 'api/cars/getcardetails'

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiGetAllUrl)
  }
  getCarDetails(): Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiGetCarDetailsUrl)
  }
}
