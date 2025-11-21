import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncontradoComponent } from './nao-encontrado.component';

describe('NaoEncontradoComponent', () => {
  let component: NaoEncontradoComponent;
  let fixture: ComponentFixture<NaoEncontradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NaoEncontradoComponent],
    });

    fixture = TestBed.createComponent(NaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an instance of NaoEncontradoComponent', () => {
    expect(component instanceof NaoEncontradoComponent).toBe(true);
  });

  it('host element should use the component selector tag', () => {
    const tagName = fixture.nativeElement.tagName;
    expect(tagName).toBe('APP-NAO-ENCONTRADO');
  });

  it('calling detectChanges multiple times should not throw', () => {
    expect(() => {
      fixture.detectChanges();
      fixture.detectChanges();
    }).not.toThrow();
  });

  it('can create another instance via TestBed', () => {
    const anotherFixture = TestBed.createComponent(NaoEncontradoComponent);
    const anotherComponent = anotherFixture.componentInstance;
    expect(anotherComponent).toBeInstanceOf(NaoEncontradoComponent);
    anotherFixture.detectChanges();
    expect(anotherFixture.nativeElement).toBeTruthy();
  });
});
