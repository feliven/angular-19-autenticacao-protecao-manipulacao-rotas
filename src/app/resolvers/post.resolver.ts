import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import * as dados from '../db.json';
import { Postagem } from '../models/post.model';

// no momento em que o resolver é chamado, ainda não entramos na rota,
// então não podemos utilizar o tipo ActivatedRoute

export const postResolver: ResolveFn<Postagem | undefined> = (
  route: ActivatedRouteSnapshot
) => {
  const id = route.paramMap.get('id');
  const posts: Postagem[] = dados.posts;

  return posts.find((post) => post.id === id);
};
