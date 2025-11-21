import { TestBed } from '@angular/core/testing';

import { AutenticacaoService } from './autenticacao.service';

describe('AutenticacaoService', () => {
  let service: AutenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false initially', () => {
    expect(service.getStatusAutenticacao()).toBe(false);
  });

  it('should return true after login', () => {
    service.login();
    expect(service.getStatusAutenticacao()).toBe(true);
  });

  it('should return false after logout', () => {
    service.login();
    service.logout();
    expect(service.getStatusAutenticacao()).toBe(false);
  });

  it('login should be idempotent', () => {
    service.login();
    service.login();
    expect(service.getStatusAutenticacao()).toBe(true);
  });

  it('should correctly toggle multiple times', () => {
    service.login();
    service.logout();
    service.login();
    service.logout();
    expect(service.getStatusAutenticacao()).toBe(false);
  });
});
