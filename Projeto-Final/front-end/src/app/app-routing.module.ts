import { PaginaNaoEncontradaComponent } from './navegacao/pagina-nao-encontrada/pagina-nao-encontrada.componment';
import { PrincipalComponent } from './navegacao/principal/principal.componment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  {
    path: 'conta',
    loadChildren: () =>
    import('./conta/conta.module').then((m) => m.ContaModule),
  },
  { path: 'nao-encontrado', component: PaginaNaoEncontradaComponent },
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
