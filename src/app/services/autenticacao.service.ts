import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private estaAutenticado = signal<boolean>(false);

  constructor() {}

  login() {
    this.estaAutenticado.set(true);
  }

  logout() {
    this.estaAutenticado.set(false);
  }

  getStatusAutenticacao() {
    return this.estaAutenticado;
  }
}
