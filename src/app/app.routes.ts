import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'C:/Users/lenovo/WebstormProjects/untitled3/src/app/accueil';

const routes: Routes = [
  { path: 'C:/Users/lenovo/WebstormProjects/untitled3/src/app/accueil/accueil.component.html', component: AccueilComponent }, // Page d'accueil
  // Autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
