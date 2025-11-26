import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { VeiculoCard } from '../veiculo-card/veiculo-card';
import { Veiculo } from '../../models/veiculos.model';

@Component({
  selector: 'app-veiculos-grid',
  imports: [MatGridListModule, VeiculoCard],
  templateUrl: './veiculos-grid.html',
  styleUrl: './veiculos-grid.css'
})
export class VeiculosGrid {
  veiculos: Veiculo[] = []
}
