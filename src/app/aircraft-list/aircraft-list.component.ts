import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aircraft } from '../aircraft.model';
import { AircraftService } from '../aircraft.service';

@Component({
    selector: 'app-aircraft-list',
    templateUrl: './aircraft-list.component.html',
    styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

    airCrafts: Aircraft[] = [];
    error: any = '';

    constructor(
        private aircraftService: AircraftService,
    ) {}

    ngOnInit(): void {
        this.aircraftService.getAircrafts()
            .subscribe({
                next: aCrafts => {
                    this.airCrafts = aCrafts
                },
                error: err => {
                    console.log('err: ', err);
                    this.error = err;
                }
            });
    }

    onClick(aircraft: Aircraft) {
        alert(`
        FOS ID: ${aircraft.fos_id}
        Registration: ${aircraft.registration}
        Type: ${aircraft.fleet_type}`
        );

    }
}
