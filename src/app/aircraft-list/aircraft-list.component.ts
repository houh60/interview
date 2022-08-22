import { HttpParams } from '@angular/common/http';
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
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.aircraftService.getAircrafts()
            .subscribe(aCrafts => {
                this.airCrafts = aCrafts
            }, err => {
                console.log('err: ', err);
                this.error = err;
            });
    }

    onClick(aircraft: Aircraft) {
        // this.router.navigate(['dilbox'], { relativeTo: this.route });
        alert(`
        FOS ID: ${aircraft.fos_id}
        Registration: ${aircraft.registration}
        Type: ${aircraft.fleet_type}`
        );

    }
}
