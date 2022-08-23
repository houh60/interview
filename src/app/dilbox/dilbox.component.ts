import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aircraft } from '../aircraft.model';

@Component({
    selector: 'app-dilbox',
    templateUrl: './dilbox.component.html',
    styleUrls: ['./dilbox.component.css']
})
export class DilboxComponent implements OnInit {

    show = true;
    aircraft?: Aircraft;
    @Output() close = new EventEmitter<boolean>();
    @Input() error: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(param => {
            this.aircraft = param as Aircraft;
        })
    }

    onClose() {
        this.show = false;
        this.close.emit(this.show);
    }

}
