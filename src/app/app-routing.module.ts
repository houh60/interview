import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { DilboxComponent } from './dilbox/dilbox.component';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
