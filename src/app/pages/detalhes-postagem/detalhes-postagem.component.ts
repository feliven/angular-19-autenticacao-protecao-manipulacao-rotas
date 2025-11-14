import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../db.json';

import { UsuarioPostagemComponent } from '../../components/usuario-postagem/usuario-postagem.component';
import { Postagem } from '../../models/post.model';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent],
})
export class DetalhesPostagemComponent {
  post!: Postagem;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const foundPost = data.posts.find((p) => p.id === id);
    if (foundPost) {
      this.post = foundPost;
    }
  }
}
