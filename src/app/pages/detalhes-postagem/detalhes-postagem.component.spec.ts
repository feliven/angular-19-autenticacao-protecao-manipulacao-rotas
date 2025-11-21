import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalhesPostagemComponent } from './detalhes-postagem.component';
import { Postagem } from '../../models/post.model';

describe('DetalhesPostagemComponent', () => {
  let fixture: ComponentFixture<DetalhesPostagemComponent>;

  beforeAll(() => {
    // Stub window.alert for jsdom
    (global as any).alert = jest.fn();
  });

  const setup = (post?: Postagem) => {
    TestBed.configureTestingModule({
      imports: [DetalhesPostagemComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: post ? { post } : {},
            },
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(DetalhesPostagemComponent);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);
    return { component, router };
  };

  it('should create', () => {
    const mockPost = { id: '1' } as Postagem;
    const { component } = setup(mockPost);
    expect(component).toBeTruthy();
  });

  it('should set post from route data when provided', () => {
    const mockPost = { id: '10' } as Postagem;
    const { component } = setup(mockPost);
    expect(component.post).toBe(mockPost);
    expect((global as any).alert).not.toHaveBeenCalled();
  });

  it('should alert and navigate when post is missing', () => {
    const { component, router } = setup(undefined);
    expect(component.post).toBeUndefined();
    expect((global as any).alert).toHaveBeenCalledWith('post NÃO existe');
    expect(router.navigate).toHaveBeenCalledWith(['/posts']);
  });

  it('should not navigate when post exists', () => {
    const mockPost = { id: '2' } as Postagem;
    const { router } = setup(mockPost);
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should not call alert when post exists', () => {
    (global as any).alert = jest.fn(); // reset mock
    const mockPost = { id: '3' } as Postagem;
    setup(mockPost);
    expect((global as any).alert).not.toHaveBeenCalled();
  });
});
