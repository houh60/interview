import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { DilboxComponent } from './dilbox/dilbox.component';

const routes: Routes = [
    { path: '', component: AircraftListComponent },
    { path: 'aircraft', component: AircraftListComponent },
    { path: 'dilbox', component: DilboxComponent },
    { path: '**', redirectTo: '/aircraft' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
