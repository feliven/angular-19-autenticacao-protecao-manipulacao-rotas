import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoPostagemComponent } from './cartao-postagem.component';

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
});
