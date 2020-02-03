import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductosModule {
  id: number;
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
  idcategoria: number;
  constructor() {}
}
