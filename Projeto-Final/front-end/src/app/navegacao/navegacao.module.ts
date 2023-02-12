import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PrincipalComponent } from "./principal/principal.component";
import { MenuComponent } from "./menu/menu.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    MenuComponent,
    PrincipalComponent,
    RodapeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    MenuComponent,
    PrincipalComponent,
    RodapeComponent,
    PaginaNaoEncontradaComponent
  ]
})
export class NavegacaoModule {

}
