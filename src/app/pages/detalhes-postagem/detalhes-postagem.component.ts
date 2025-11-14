import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioPostagemComponent } from '../../components/usuario-postagem/usuario-postagem.component';
import { Postagem } from '../../models/post.model';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent],
})
export class DetalhesPostagemComponent {
  id!: string | null;
  post!: Postagem | undefined;

  constructor(private rotaAtual: ActivatedRoute, private router: Router) {
    this.post = this.rotaAtual.snapshot.data['post'];

    if (!this.post) {
      alert('post NÃO existe');
      this.router.navigate(['/posts']);
    }
  }

  // ngOnInit(): void {
  //   const listaPosts: Postagem[] = dados.posts;

  //   this.id = this.rotaAtual.snapshot.paramMap.get('id');

  //   const postEncontrado = listaPosts.find((post) => post.id === this.id);

  //   if (postEncontrado) {
  //     this.post = postEncontrado;
  //   } else {
  //     alert('post NÃO existe');
  //     this.router.navigate(['/posts']);
  //   }
  // }
}
