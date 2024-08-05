import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css',
})
export class CreateThoughtComponent {
  thought = {
    id: '1',
    conteudo: 'learning english',
    autoria: 'fisk',
    modelo: 'modelo2',
  };

  createThought() {
    alert('hello');
  }
}
