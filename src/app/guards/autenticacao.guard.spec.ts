import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autenticacaoGuard } from './autenticacao.guard';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from 'express';

describe('autenticacaoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => autenticacaoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
  describe('autenticacaoGuard behavior', () => {
    let mockAuth: { getStatusAutenticacao: jest.Mock };
    let mockRouter: { navigate: jest.Mock };

    const callGuard = () => executeGuard({} as any, {} as any);

    beforeEach(() => {
      mockAuth = { getStatusAutenticacao: jest.fn() };
      mockRouter = { navigate: jest.fn() };
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [
          { provide: AutenticacaoService, useValue: mockAuth },
          { provide: Router, useValue: mockRouter },
        ],
      });
    });

    it('returns true and does not navigate when authenticated', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      const result = callGuard();
      expect(result).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('returns false and navigates to /registro when not authenticated', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      const result = callGuard();
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/registro']);
    });

    it('handles consecutive calls with changing auth state', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      const first = callGuard();
      expect(first).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1);

      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      const second = callGuard();
      expect(second).toBe(true);
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1); // still only the first call
    });
  });
});
