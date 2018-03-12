import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {VehiclesService} from './vehicles.service';
import {VehicleMakeRowComponent} from './vehicle-make-row/vehicle-make-row.component';
import {VehicleMakesListComponent} from './vehicle-makes-list/vehicle-makes-list.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {InlineSVGModule} from 'ng-inline-svg';

@NgModule({
  declarations: [
    AppComponent,
    VehicleMakeRowComponent,
    VehicleMakesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    InlineSVGModule
  ],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
