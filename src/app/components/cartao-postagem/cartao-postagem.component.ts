import { Component, input } from '@angular/core';

import { Postagem } from '../../models/post.model';
import { AcoesPostagemComponent } from '../acoes-postagem/acoes-postagem.component';
import { UsuarioPostagemComponent } from '../usuario-postagem/usuario-postagem.component';

@Component({
  selector: 'app-cartao-postagem',
  imports: [AcoesPostagemComponent, UsuarioPostagemComponent],
  templateUrl: './cartao-postagem.component.html',
  styleUrl: './cartao-postagem.component.css',
})
export class CartaoPostagemComponent {
  postagem = input<Postagem>();
}
