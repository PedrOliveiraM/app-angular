import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  standalone: true,
  imports: [FormsModule],
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
