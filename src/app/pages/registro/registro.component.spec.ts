import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegistroComponent],
    });

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('RegistroComponent (extended tests)', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegistroComponent],
    });

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
  });

  it('should initialize the form with empty values and validators', () => {
    const form = component.registroForm;
    expect(form).toBeTruthy();
    expect(form.controls['name']).toBeTruthy();
    expect(form.controls['email']).toBeTruthy();
    expect(form.controls['password']).toBeTruthy();

    expect(form.value).toEqual({ name: '', email: '', password: '' });
  });

  it('should mark the form invalid when empty and validators should work', () => {
    const form = component.registroForm;
    expect(form.invalid).toBe(true);

    // email validator
    form.controls['email'].setValue('not-an-email');
    expect(form.controls['email'].invalid).toBe(true);
    expect(form.controls['email'].errors).toBeTruthy();
    expect(form.controls['email'].errors!['email']).toBeTruthy();

    // password minlength validator
    form.controls['password'].setValue('123');
    expect(form.controls['password'].invalid).toBe(true);
    expect(form.controls['password'].errors).toBeTruthy();
    expect(form.controls['password'].errors!['minlength']).toBeTruthy();
  });

  it('should not call login or navigate when form is invalid on submit', () => {
    const mockAuthService = { login: jest.fn() };
    const mockRouter = { navigate: jest.fn() };

    // replace private properties (allowed for testing)
    (component as any).autenticacaoService = mockAuthService;
    (component as any).router = mockRouter;

    // ensure form is invalid (default empty)
    expect(component.registroForm.invalid).toBe(true);

    component.onSubmit();

    expect(mockAuthService.login).not.toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should call autenticacaoService.login and router.navigate when form is valid on submit', () => {
    const mockAuthService = { login: jest.fn() };
    const mockRouter = { navigate: jest.fn() };

    (component as any).autenticacaoService = mockAuthService;
    (component as any).router = mockRouter;

    // set valid values
    component.registroForm.controls['name'].setValue('Test User');
    component.registroForm.controls['email'].setValue('test@example.com');
    component.registroForm.controls['password'].setValue('securePassword');

    expect(component.registroForm.valid).toBe(true);

    component.onSubmit();

    expect(mockAuthService.login).toHaveBeenCalledTimes(1);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/posts']);
  });
});
