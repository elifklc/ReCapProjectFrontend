import { Color } from './../models/entities/color';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/baseModels/listResponseModel';
import { ApiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})

export class CarService{
  private getallUrl = ApiUrl.baseUrl + 'api/color/getall';
  constructor(private httpClient: HttpClient) {}

  getAllColor(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.getallUrl)
  }
}
