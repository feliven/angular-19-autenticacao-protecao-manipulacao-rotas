import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPostagemComponent } from './detalhes-postagem.component';
import { provideRouter } from '@angular/router';

describe('DetalhesPostagemComponent', () => {
  let component: DetalhesPostagemComponent;
  let fixture: ComponentFixture<DetalhesPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetalhesPostagemComponent],
      providers: [provideRouter([])],
    });

    fixture = TestBed.createComponent(DetalhesPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
