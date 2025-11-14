import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPostagemComponent } from './detalhes-postagem.component';

describe('DetalhesPostagemComponent', () => {
  let component: DetalhesPostagemComponent;
  let fixture: ComponentFixture<DetalhesPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesPostagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
