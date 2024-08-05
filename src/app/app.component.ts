import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CreateThoughtComponent } from "./components/thought/create-thought/create-thought.component";
import { ListThoughtsComponent } from "./components/thought/list-thoughts/list-thoughts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CreateThoughtComponent, ListThoughtsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-project';
}
