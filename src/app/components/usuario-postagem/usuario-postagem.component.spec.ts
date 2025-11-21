import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPostagemComponent } from './usuario-postagem.component';

describe('UsuarioPostagemComponent', () => {
  let component: UsuarioPostagemComponent;
  let fixture: ComponentFixture<UsuarioPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsuarioPostagemComponent],
    });

    fixture = TestBed.createComponent(UsuarioPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render usuario section when no usuario input is set', () => {
    const host: HTMLElement = fixture.nativeElement;
    expect(host.querySelector('.usuario-postagem')).toBeNull();
  });

  it('should render usuario avatar and name when usuario input is provided', () => {
    const mockUsuario = { nome: 'Alice', avatar: 'alice.png' };
    fixture.componentRef.setInput('usuario', mockUsuario);
    fixture.detectChanges();

    const host: HTMLElement = fixture.nativeElement;
    const container = host.querySelector('.usuario-postagem');
    expect(container).not.toBeNull();

    const img = container!.querySelector('img');
    const span = container!.querySelector('span');

    expect(img).not.toBeNull();
    expect(img!.getAttribute('src')).toBe(mockUsuario.avatar);
    expect(img!.getAttribute('alt')).toBe(mockUsuario.nome);
    expect(span).not.toBeNull();
    expect(span!.textContent?.trim()).toBe(mockUsuario.nome);
  });

  it('should update rendered usuario when input changes', () => {
    const first = { nome: 'Bob', avatar: 'bob.png' };
    const second = { nome: 'Carol', avatar: 'carol.jpg' };

    fixture.componentRef.setInput('usuario', first);
    fixture.detectChanges();
    let host: HTMLElement = fixture.nativeElement;
    let span = host.querySelector('.usuario-postagem span');
    let img = host.querySelector('.usuario-postagem img');
    expect(span!.textContent?.trim()).toBe(first.nome);
    expect(img!.getAttribute('src')).toBe(first.avatar);

    fixture.componentRef.setInput('usuario', second);
    fixture.detectChanges();
    host = fixture.nativeElement;
    span = host.querySelector('.usuario-postagem span');
    img = host.querySelector('.usuario-postagem img');
    expect(span!.textContent?.trim()).toBe(second.nome);
    expect(img!.getAttribute('src')).toBe(second.avatar);
  });

  it('should remove usuario section when input becomes undefined', () => {
    const mockUsuario = { nome: 'Dave', avatar: 'dave.png' };
    fixture.componentRef.setInput('usuario', mockUsuario);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.usuario-postagem')
    ).not.toBeNull();

    fixture.componentRef.setInput('usuario', undefined);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.usuario-postagem')).toBeNull();
  });
});
