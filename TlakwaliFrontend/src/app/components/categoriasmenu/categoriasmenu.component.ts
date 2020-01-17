import { Component, OnInit } from '@angular/core';
import { CategoriasModule } from '../../models/categorias/categorias.module';
import { CategoriasServicesService } from '../../services/categorias-services.service';

@Component({
  selector: 'app-categoriasmenu',
  templateUrl: './categoriasmenu.component.html',
  styleUrls: ['./categoriasmenu.component.css']
})
export class CategoriasmenuComponent implements OnInit {

  datos: any;

  constructor(private catservice: CategoriasServicesService) { }

  ngOnInit() {
    this.catservice.ListarCategorias().subscribe(
      res => {
        this.datos = res['categorias'];
      }
    );
  }
}
