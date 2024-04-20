import {Routes} from "@angular/router";
import {HomeComponent} from  "./home/home.component";
import {accueilComponent} from  "./accueil/accueil.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'accueil', component : accueilComponent}
];
