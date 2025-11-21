import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesPostagemComponent } from './acoes-postagem.component';

describe('AcoesPostagemComponent', () => {
  let component: AcoesPostagemComponent;
  let fixture: ComponentFixture<AcoesPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcoesPostagemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcoesPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have estatisticas input signal', () => {
    expect(component.estatisticas).toBeDefined();
  });

  it('should accept estatisticas input value', () => {
    const mockEstatisticas = {
      likes: 10,
      comments: 5,
      shares: 3,
    };

    fixture.componentRef.setInput('estatisticas', mockEstatisticas);
    fixture.detectChanges();

    expect(component.estatisticas()).toEqual(mockEstatisticas);
  });

  it('should handle undefined estatisticas input', () => {
    expect(component.estatisticas()).toBeUndefined();
  });

  it('should update when estatisticas input changes', () => {
    const firstValue = { likes: 5 };
    const secondValue = { likes: 10 };

    fixture.componentRef.setInput('estatisticas', firstValue);
    fixture.detectChanges();
    expect(component.estatisticas()).toEqual(firstValue);

    fixture.componentRef.setInput('estatisticas', secondValue);
    fixture.detectChanges();
    expect(component.estatisticas()).toEqual(secondValue);
  });
});
