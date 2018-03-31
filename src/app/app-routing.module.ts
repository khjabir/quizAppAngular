import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const appRoutes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: '', component: HomeComponentComponent},
    { path: '**', redirectTo: ''}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})


export class AppRoutingModule {

}
