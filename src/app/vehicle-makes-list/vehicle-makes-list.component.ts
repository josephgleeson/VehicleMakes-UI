import {Component, OnInit} from '@angular/core';
import {VehiclesService} from '../vehicles.service';
import {VehicleMake} from '../../shared/models/vehicleMake.model';

@Component({
  selector: 'app-vehicle-makes-list',
  templateUrl: './vehicle-makes-list.component.html',
  styleUrls: ['./vehicle-makes-list.component.less']
})
export class VehicleMakesListComponent implements OnInit {
  makes: Array<VehicleMake>;
  search: string;
  count: number;
  offset: number;
  loading: boolean;
  error: boolean;
  errorText: string;

  constructor(private vehiclesService: VehiclesService) {
    this.count = 20;
    this.offset = 0;
    this.error = false;
    this.loadData();
  }

  ngOnInit() {}

  loadData(): void {
    this.loading = true;
    this.error = false;
    this.offset = 0;

    this.vehiclesService.getVehicleMakes(this.count, this.offset, this.search).subscribe(
      result => {
        this.makes = result;
        this.loading = false;
      },
      error => {
        this.makes = [];
        this.error = true;
        this.errorText = error.status === 404 ? 'No vehicle makes match the search criteria.' :
                                                'An unexpected error has occurred.  Please try again later';
        this.loading = false;
        console.log(error);
      }
    );
  }

  loadMore(): void {
    this.offset += this.count;
    this.vehiclesService.getVehicleMakes(this.count, this.offset, this.search).subscribe(
      result => {
        this.error = false;
        this.makes = this.makes.concat(result);
      },
      error => {
        this.error = true;
        this.errorText = error.error;
        console.log(error);
      }
    );
  }
}
