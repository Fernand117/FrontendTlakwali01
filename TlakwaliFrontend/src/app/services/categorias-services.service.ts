import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServicesService {

  private url = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  ListarCategorias(){
    return this.http.get(`${this.url}/categorias`);
  }

  ListarProductosCategorias(id: number){
    return this.http.get(`${this.url}/categorias/productos/${id}`);
  }
}
