import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../db.json';
import { Postagem } from '../../models/post.model';
import { Router } from '@angular/router';
import { CartaoPostagemComponent } from '../../components/cartao-postagem/cartao-postagem.component';

@Component({
  selector: 'app-lista-postagem',
  standalone: true,
  imports: [CommonModule, CartaoPostagemComponent],
  templateUrl: './lista-postagem.component.html',
  styleUrls: ['./lista-postagem.component.css'],
})
export class ListaPostagemComponent implements OnInit {
  posts: Postagem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.posts = data.posts;
  }

  goToPost(id: string) {
    this.router.navigate(['/posts', id]);
  }
}
