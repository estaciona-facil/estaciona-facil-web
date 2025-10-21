import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VeiculosGrid } from "./components/veiculos-grid/veiculos-grid";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VeiculosGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estaciona-facil-web');
}
