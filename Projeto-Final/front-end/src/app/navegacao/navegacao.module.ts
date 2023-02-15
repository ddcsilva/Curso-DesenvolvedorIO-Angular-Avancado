import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.componment';
import { RodapeComponent } from './rodape/rodape.componment';
import { PrincipalComponent } from './principal/principal.componment';
import { MenuComponent } from './menu/menu.componment';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PrincipalComponent,
    MenuComponent,
    RodapeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    PrincipalComponent,
    MenuComponent,
    RodapeComponent,
    PaginaNaoEncontradaComponent
  ]
})
export class NavegacaoModule {

}
