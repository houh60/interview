import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aircraft } from './aircraft.model';

@Injectable({
    providedIn: 'root'
})
export class AircraftService {

    airCrafts?: Aircraft[];

    url: string = './assets/aircraftslist.json';
    constructor(private http: HttpClient) {}

    getAircrafts() {
        return this.http.get<Aircraft[]>(this.url);
    }
}
