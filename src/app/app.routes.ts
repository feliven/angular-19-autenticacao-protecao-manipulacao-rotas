import { Routes } from '@angular/router';

import { RegistroComponent } from './pages/registro/registro.component';
import { ListaPostagemComponent } from './pages/lista-postagem/lista-postagem.component';
import { autenticacaoGuard } from './guards/autenticacao.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { DetalhesPostagemComponent } from './pages/detalhes-postagem/detalhes-postagem.component';

export const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  // {
  //   path: 'posts',
  //   canActivate: [autenticacaoGuard],
  //   component: ListaPostagemComponent,
  // },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [autenticacaoGuard],
    children: [
      { path: 'posts', component: ListaPostagemComponent },
      { path: 'posts/:id', component: DetalhesPostagemComponent },
      // Utilizamos dois pontos :id para indicar que é um parâmetro na URL
    ],
  },
];
