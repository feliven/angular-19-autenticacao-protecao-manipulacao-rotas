import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesPostagemComponent } from './acoes-postagem.component';

describe('AcoesPostagemComponent', () => {
  let component: AcoesPostagemComponent;
  let fixture: ComponentFixture<AcoesPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcoesPostagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoesPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
