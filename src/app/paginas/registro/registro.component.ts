import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) {
    this.registroForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.autenticacaoService.login();
      this.router.navigate(['/posts']);
    }
  }
}
