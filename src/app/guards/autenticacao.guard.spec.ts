import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { autenticacaoGuard } from './autenticacao.guard';
import { AutenticacaoService } from '../services/autenticacao.service';

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
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1);
    });

    it('calls navigate each time when repeatedly unauthenticated', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      const first = callGuard();
      const second = callGuard();
      expect(first).toBe(false);
      expect(second).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledTimes(2);
      expect(mockRouter.navigate).toHaveBeenNthCalledWith(1, ['/registro']);
      expect(mockRouter.navigate).toHaveBeenNthCalledWith(2, ['/registro']);
    });

    it('does not accumulate extra navigate calls after switching to authenticated', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      callGuard(); // navigate once
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      callGuard(); // no new navigate
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      callGuard(); // still no new navigate
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1);
    });

    it('invokes auth status check exactly once per guard execution', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      callGuard();
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      callGuard();
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      callGuard();
      expect(mockAuth.getStatusAutenticacao).toHaveBeenCalledTimes(3);
    });

    it('propagates errors thrown by navigate when unauthenticated', () => {
      const error = new Error('Navigation failed');
      mockRouter.navigate.mockImplementation(() => {
        throw error;
      });
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      expect(() => callGuard()).toThrow(error);
      expect(mockRouter.navigate).toHaveBeenCalledTimes(1);
    });

    it('returns correct boolean mirroring auth service result (true)', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      expect(callGuard()).toBe(true);
    });

    it('returns correct boolean mirroring auth service result (false)', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      expect(callGuard()).toBe(false);
    });

    it('does not call navigate when already authenticated across multiple calls', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      callGuard();
      callGuard();
      callGuard();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('navigate is called with exact route array format', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      callGuard();
      expect(mockRouter.navigate.mock.calls[0][0]).toEqual(['/registro']);
    });

    it('supports mixed sequence and counts navigate only for false states', () => {
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      callGuard(); // no navigate
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      callGuard(); // navigate 1
      mockAuth.getStatusAutenticacao.mockReturnValue(false);
      callGuard(); // navigate 2
      mockAuth.getStatusAutenticacao.mockReturnValue(true);
      callGuard(); // still navigate 2
      expect(mockRouter.navigate).toHaveBeenCalledTimes(2);
    });
  });
});
