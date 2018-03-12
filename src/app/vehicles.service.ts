///<reference path="vehicle-makes-list/vehicle-makes-list.component.ts"/>
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import {VehicleMake} from '../shared/models/vehicleMake.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {GetVehicleMakesResponse} from '../shared/models/getVehicleMakesResponse';
import {VehicleType} from '../shared/models/vehicle-type.model';

@Injectable()
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicleMakes(count: number, offset: number, search: string): Observable<Array<VehicleMake>> {
    let url = environment.api + '/makes';

    if (search) {
      url += '/' + search;
    }

    const httpOptions = {
      params: new HttpParams().set('count', count.toString())
                              .set('offset', offset.toString())
    };

    return this.http.get<GetVehicleMakesResponse>(url, httpOptions).map(
      (response) => {
        return response.results as Array<VehicleMake>;
      }
    );
  }

  getVehicleTypesForMake(makeId: number): Observable<Array<VehicleType>> {
    const url = environment.api + '/types/' + makeId;

    const httpOptions = {};

    return this.http.get<GetVehicleMakesResponse>(url, httpOptions).map(
      (response) => {
        return response.results as Array<VehicleType>;
      }
    );
  }
}
