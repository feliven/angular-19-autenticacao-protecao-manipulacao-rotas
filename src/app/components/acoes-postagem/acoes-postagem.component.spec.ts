import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesPostagemComponent } from './acoes-postagem.component';

describe('AcoesPostagemComponent', () => {
  let component: AcoesPostagemComponent;
  let fixture: ComponentFixture<AcoesPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AcoesPostagemComponent],
    });

    fixture = TestBed.createComponent(AcoesPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
