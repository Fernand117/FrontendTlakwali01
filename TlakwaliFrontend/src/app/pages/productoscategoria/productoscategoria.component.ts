import { Component, OnInit } from '@angular/core';
import { CategoriasServicesService } from '../../services/categorias-services.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-productoscategoria',
  templateUrl: './productoscategoria.component.html',
  styleUrls: ['./productoscategoria.component.css']
})
export class ProductoscategoriaComponent implements OnInit {

  datos: any;
  id = this.route.snapshot.paramMap.get('id');
  sub: any;

  constructor(private categoriasService: CategoriasServicesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        let ide = +params['id'];
        if (this.id != null) {
          this.categoriasService.ListarProductosCategorias(Number(ide)).subscribe(
            res => {
              this.datos = res['productos'];
            }
          );
        } else {
          this.router.navigateByUrl('Categorias');
        }
      });
  }
}
