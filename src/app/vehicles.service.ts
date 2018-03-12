import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import {VehicleMake} from '../shared/models/vehicle-make.model';
import {Observable} from 'rxjs/Observable';
import {VehiclesServiceResponse} from '../shared/models/vehicles-service-response.model';
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

    return this.http.get<VehiclesServiceResponse>(url, httpOptions).map(
      (response) => {
        return response.results as Array<VehicleMake>;
      }
    );
  }

  getVehicleTypesForMake(makeId: number): Observable<Array<VehicleType>> {
    const url = environment.api + '/types/' + makeId;

    const httpOptions = {};

    return this.http.get<VehiclesServiceResponse>(url, httpOptions).map(
      (response) => {
        return response.results as Array<VehicleType>;
      }
    );
  }
}
