import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThoughtCardComponent } from '../thought-card/thought-card.component';
import { NgFor, NgIf } from '@angular/common';
import { Thought } from '../thought';

@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [RouterLink, ThoughtCardComponent, NgFor, NgIf],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css',
})
export class ListThoughtsComponent {
  listThought: Thought[] = [];
}
