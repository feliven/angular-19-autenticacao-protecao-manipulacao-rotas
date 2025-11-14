import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AutenticacaoService } from '../services/autenticacao.service';

export const autenticacaoGuard: CanActivateFn = () => {
  const autenticacaoService = inject(AutenticacaoService);
  const router = inject(Router);
  // O inject é utilizado porque, ao manipular as classes das nossas páginas e componentes para aplicar algum método,
  // utilizávamos o construtor para injetar dependências. Quando lidamos com funcionalidades, como no caso do AuthGuard,
  // podemos utilizar o inject para injetar essas dependências.

  if (!autenticacaoService.getStatusAutenticacao()) {
    router.navigate(['/registro']);
    return false;
  }

  return true;
};
