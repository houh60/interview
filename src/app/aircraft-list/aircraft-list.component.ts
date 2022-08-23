import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aircraft } from '../aircraft.model';
import { AircraftService } from '../aircraft.service';

@Component({
    selector: 'app-aircraft-list',
    templateUrl: './aircraft-list.component.html',
    styleUrls: ['./aircraft-list.component.css']
})
export class AircraftListComponent implements OnInit {

    airCrafts: Aircraft[] = [];
    error: any;
    show = false;

    constructor(
        private aircraftService: AircraftService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.aircraftService.getAircrafts()
            .subscribe({
                next: aCrafts => {
                    this.airCrafts = aCrafts
                },
                error: err => {
                    this.show = true;
                    this.error = err;
                }
            });
    }

    onClick(aircraft: Aircraft) {
        this.show = true;
        this.router.navigate(['/dilbox'], { queryParams: aircraft });
    }

    onClose(event: any) {
        this.show = event;
    }
}
