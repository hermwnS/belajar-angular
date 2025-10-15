import { Component, signal } from '@angular/core';
import { Storage } from "./storage/storage";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Storage, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('belajar-angular');
}
