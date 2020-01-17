import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoscategoriaComponent } from './pages/productoscategoria/productoscategoria.component';
import { CategoriasmenuComponent } from './components/categoriasmenu/categoriasmenu.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: Component},
  {path: 'Inicio', component: InicioComponent},
  {path: 'ProductosCategorias/:id', component: ProductoscategoriaComponent},
  {path: 'Categorias', component: CategoriasmenuComponent},
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
