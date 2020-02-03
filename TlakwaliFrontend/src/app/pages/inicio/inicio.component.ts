import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  datos: any;

  constructor(private prodservice: ProductosService) { }

  ngOnInit() {
    this.prodservice.ListarProductos().subscribe(
      res => {
        this.datos = res['productos'];
      }
    );
  }

}
