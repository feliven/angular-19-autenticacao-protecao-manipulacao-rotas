import { Component, input } from '@angular/core';

@Component({
  selector: 'app-acoes-postagem',
  imports: [],
  templateUrl: './acoes-postagem.component.html',
  styleUrl: './acoes-postagem.component.css',
})
export class AcoesPostagemComponent {
  estatisticas = input<any>();
}
