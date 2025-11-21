jest.mock(
  '../../db.json',
  () => ({
    posts: [
      { id: '1', titulo: 'Post 1', texto: 'Conteúdo 1' },
      { id: '2', titulo: 'Post 2', texto: 'Conteúdo 2' },
    ],
  }),
  { virtual: true }
);

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ListaPostagemComponent } from './lista-postagem.component';
import { CartaoPostagemComponent } from '../../components/cartao-postagem/cartao-postagem.component';
import * as mockedDados from '../../db.json';

describe('ListaPostagemComponent', () => {
  let component: ListaPostagemComponent;
  let fixture: ComponentFixture<ListaPostagemComponent>;
  let routerMock: { navigate: jest.Mock };

  beforeEach(() => {
    routerMock = { navigate: jest.fn() };
    TestBed.configureTestingModule({
      imports: [ListaPostagemComponent, CartaoPostagemComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    });
    fixture = TestBed.createComponent(ListaPostagemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should populate posts from db.json on init', () => {
    fixture.detectChanges();
    expect(component.posts).toEqual((mockedDados as any).posts);
    expect(component.posts.length).toBe(2);
  });

  it('should keep the same array reference from mocked dados', () => {
    fixture.detectChanges();
    expect(component.posts).toBe((mockedDados as any).posts);
  });

  it('goToPost should navigate to the correct route with given id', () => {
    fixture.detectChanges();
    component.goToPost('1');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/posts', '1']);
  });

  it('goToPost should call router.navigate each time it is invoked', () => {
    fixture.detectChanges();
    component.goToPost('1');
    component.goToPost('2');
    expect(routerMock.navigate).toHaveBeenCalledTimes(2);
    expect(routerMock.navigate).toHaveBeenNthCalledWith(1, ['/posts', '1']);
    expect(routerMock.navigate).toHaveBeenNthCalledWith(2, ['/posts', '2']);
  });

  it('should not call navigate before any goToPost invocation', () => {
    fixture.detectChanges();
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should navigate even with an unknown id value', () => {
    fixture.detectChanges();
    component.goToPost('999');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/posts', '999']);
  });

  it('should have each post with required keys', () => {
    fixture.detectChanges();
    for (const p of component.posts) {
      expect(p).toHaveProperty('id');
      expect(p).toHaveProperty('titulo');
      expect(p).toHaveProperty('texto');
    }
  });

  it('ngOnInit can be safely called again (idempotent assignment)', () => {
    fixture.detectChanges();
    const firstRef = component.posts;
    component.ngOnInit();
    expect(component.posts).toBe(firstRef);
    expect(component.posts.length).toBe(2);
  });

  it('should expose a standalone dummy CartaoPostagemComponent', () => {
    const compModule = require('../../components/cartao-postagem/cartao-postagem.component');
    expect(compModule.CartaoPostagemComponent.ɵcmp).toBeDefined();
  });

  it('router.navigate is called with a two-element array', () => {
    fixture.detectChanges();
    component.goToPost('1');
    const arg = routerMock.navigate.mock.calls[0][0];
    expect(Array.isArray(arg)).toBe(true);
    expect(arg.length).toBe(2);
  });

  it('posts array remains unchanged after multiple goToPost calls', () => {
    fixture.detectChanges();
    const snapshot = JSON.stringify(component.posts);
    component.goToPost('1');
    component.goToPost('2');
    expect(JSON.stringify(component.posts)).toBe(snapshot);
  });
});
