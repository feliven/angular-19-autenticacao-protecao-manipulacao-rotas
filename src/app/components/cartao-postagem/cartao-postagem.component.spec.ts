import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoPostagemComponent } from './cartao-postagem.component';
import {
  Usuario,
  Estatisticas,
  Postagem,
  DadosPostagem,
} from '../../models/post.model';

describe('CartaoPostagemComponent', () => {
  let component: CartaoPostagemComponent;
  let fixture: ComponentFixture<CartaoPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartaoPostagemComponent],
    });

    fixture = TestBed.createComponent(CartaoPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have postagem input signal defined', () => {
    expect(component.postagem).toBeDefined();
  });

  it('should accept Postagem input', () => {
    const mockPostagem: Postagem = {
      id: '1',
      titulo: 'Test Title',
      descricao: 'Test Description',
      imagem: 'test.jpg',
      usuario: {
        nome: 'Jane Doe',
        avatar: 'jane.jpg',
      },
      estatisticas: {
        codigo: 456,
        compartilhamentos: 20,
        comentarios: 15,
      },
    };

    fixture.componentRef.setInput('postagem', mockPostagem);
    fixture.detectChanges();

    expect(component.postagem()).toEqual(mockPostagem);
  });

  it('should handle undefined postagem input', () => {
    expect(component.postagem()).toBeUndefined();
  });

  it('should render child components', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-usuario-postagem')).toBeTruthy();
    expect(compiled.querySelector('app-acoes-postagem')).toBeTruthy();
  });
});
