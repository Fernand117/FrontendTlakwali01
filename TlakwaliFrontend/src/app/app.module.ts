import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.rutes';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasmenuComponent } from './components/categoriasmenu/categoriasmenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoscategoriaComponent } from './pages/productoscategoria/productoscategoria.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriasmenuComponent,
    NavbarComponent,
    FooterComponent,
    ProductoscategoriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
