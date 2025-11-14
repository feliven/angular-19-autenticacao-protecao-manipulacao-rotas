import { Component } from '@angular/core';
import { RegistroComponent } from './paginas/registro/registro.component';

@Component({
  selector: 'app-root',
  imports: [RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '4460-angular';
}
