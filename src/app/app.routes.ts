import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CostoRegistroComponent } from '../pages/costo-registro/costo-registro.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'costo-registro', 
  component: CostoRegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }