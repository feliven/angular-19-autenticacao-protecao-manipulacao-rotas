import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../db.json';
import { Postagem } from '../../models/post.model';

@Component({
  selector: 'app-lista-postagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-postagem.component.html',
  styleUrls: ['./lista-postagem.component.css'],
})
export class ListaPostagemComponent implements OnInit {
  posts: Postagem[] = [];

  ngOnInit() {
    this.posts = data.posts;
  }
}
