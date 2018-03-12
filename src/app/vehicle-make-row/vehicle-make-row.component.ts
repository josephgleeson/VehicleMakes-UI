import {Component, Input, OnInit} from '@angular/core';
import {VehicleMake} from '../../shared/models/vehicle-make.model';
import {VehiclesService} from '../vehicles.service';
import {VehicleType} from '../../shared/models/vehicle-type.model';

@Component({
  selector: 'app-vehicle-make-row',
  templateUrl: './vehicle-make-row.component.html',
  styleUrls: ['./vehicle-make-row.component.less']
})
export class VehicleMakeRowComponent implements OnInit {
  @Input() vehicleMake: VehicleMake;
  vehicleTypes: Array<VehicleType>;
  expanded: boolean;

  constructor(private vehiclesService: VehiclesService) {
    this.vehicleTypes = [];
    this.expanded = false;
  }

  ngOnInit() {  }

  toggleDetails() {
    this.expanded = !this.expanded;

    if (this.vehicleTypes.length === 0) {
      this.vehiclesService.getVehicleTypesForMake(this.vehicleMake.Make_ID).subscribe(
        result => {
          this.vehicleTypes = result;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
