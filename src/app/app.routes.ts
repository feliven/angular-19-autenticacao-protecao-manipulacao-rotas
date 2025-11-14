import { Routes } from '@angular/router';

import { autenticacaoGuard } from './guards/autenticacao.guard';

export const routes: Routes = [
  {
    path: 'registro',
    loadComponent: () =>
      import('./pages/registro/registro.component').then(
        (componente) => componente.RegistroComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/layout/layout.component').then(
        (componente) => componente.LayoutComponent
      ),
    canActivate: [autenticacaoGuard],
    canActivateChild: [autenticacaoGuard],

    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./pages/lista-postagem/lista-postagem.module').then(
            (modulo) => modulo.ListaPostagemModule
          ),
      },
      {
        // Utilizamos dois pontos :id para indicar que é um parâmetro na URL
        path: 'posts/:id',
        loadComponent: () =>
          import('./pages/detalhes-postagem/detalhes-postagem.component').then(
            (componente) => componente.DetalhesPostagemComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/nao-encontrado/nao-encontrado.component').then(
        (componente) => componente.NaoEncontradoComponent
      ),
  },
];
