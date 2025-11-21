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
});
