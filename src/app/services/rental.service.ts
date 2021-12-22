import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ApiUrl } from "./apiUrl";
import { RentalDetail } from "../models/entities/rentalDetail";
import { ListResponseModel } from "../models/baseModels/listResponseModel";

@Injectable({
  providedIn: 'root'
})

export class RentalService{
  private getallrentaldetailsUrl: string = ApiUrl.baseUrl + 'api/rentals/getallrentaldetails';
  constructor(private httpClient: HttpClient) {}

  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.getallrentaldetailsUrl)
  }
}
