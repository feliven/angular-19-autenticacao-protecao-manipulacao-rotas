import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { postResolver } from './post.resolver';
import { Postagem } from '../models/post.model';
import * as dados from '../db.json';

function createRouteSnapshot(id?: string): ActivatedRouteSnapshot {
  return {
    paramMap: {
      get: (key: string) => (key === 'id' ? id ?? null : null),
      // minimal implementations for interface compatibility
      has: () => true,
      getAll: () => [],
      keys: [],
    },
  } as unknown as ActivatedRouteSnapshot;
}

describe('postResolver', () => {
  const executeResolver: ResolveFn<Postagem | undefined> = (
    ...resolverParameters
  ) => TestBed.runInInjectionContext(() => postResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be defined', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('should resolve an existing post by id', () => {
    const existingId: string | undefined = (dados as any).posts?.[0]?.id;
    if (!existingId) {
      pending('No posts available in db.json to test existing id.');
      return;
    }
    const route = createRouteSnapshot(existingId);
    const result = executeResolver(route, {} as any);
    // Narrow the type for the assertion to avoid TS complaining about RedirectCommand union
    const resolved = result as Postagem | undefined;
    expect(resolved).toBeTruthy();
    expect(resolved?.id).toBe(existingId);
  });

  it('should return the exact object reference from the posts array', () => {
    const posts = (dados as any).posts as Postagem[] | undefined;
    if (!posts || posts.length === 0) {
      pending('No posts available in db.json to test reference equality.');
      return;
    }
    const existingId = posts[0].id;
    const route = createRouteSnapshot(existingId);
    const result = executeResolver(route, {} as any) as Postagem | undefined;
    // If resolver returns the item from the array, they should be the same reference
    expect(result).toBe(posts.find((p) => p.id === existingId));
  });

  it('should return undefined for non-existent id', () => {
    const route = createRouteSnapshot('___nonexistent___');
    const result = executeResolver(route, {} as any) as Postagem | undefined;
    expect(result).toBeUndefined();
  });

  it('should return undefined when id param is missing', () => {
    const route = createRouteSnapshot(undefined);
    const result = executeResolver(route, {} as any) as Postagem | undefined;
    expect(result).toBeUndefined();
  });

  it('should not mutate original posts array', () => {
    const original = JSON.stringify((dados as any).posts);
    executeResolver(createRouteSnapshot('irrelevant'), {} as any);
    expect(JSON.stringify((dados as any).posts)).toBe(original);
  });
});
