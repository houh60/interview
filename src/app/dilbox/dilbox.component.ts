import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dilbox',
    templateUrl: './dilbox.component.html',
    styleUrls: ['./dilbox.component.css']
})
export class DilboxComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(param => {
            console.log('param: ', param);
        })
    }

}
