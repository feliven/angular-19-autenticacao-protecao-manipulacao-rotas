import { Component, input } from '@angular/core';

@Component({
  selector: 'app-usuario-postagem',
  imports: [],
  templateUrl: './usuario-postagem.component.html',
  styleUrl: './usuario-postagem.component.css',
})
export class UsuarioPostagemComponent {
  usuario = input<any>();
}
