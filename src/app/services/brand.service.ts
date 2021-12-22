import { Brand } from './../models/entities/brand';
import { ListResponseModel } from './../models/baseModels/listResponseModel';
import { Observable, retry } from 'rxjs';
import { ApiUrl } from './apiUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class BrandService{
  private getallUrl = ApiUrl.baseUrl + 'api/brands/getall'
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.getallUrl)
  }
}
