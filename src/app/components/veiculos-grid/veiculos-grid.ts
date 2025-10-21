import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Veiculo, VeiculoCard } from '../veiculo-card/veiculo-card';

@Component({
  selector: 'app-veiculos-grid',
  imports: [MatGridListModule, VeiculoCard],
  templateUrl: './veiculos-grid.html',
  styleUrl: './veiculos-grid.css'
})
export class VeiculosGrid {
  veiculos: Veiculo[] = [
    {Id: 1, Marca: "Toyota", Modelo: "Corolla", Cobrancas: [{Valor: 75.0}]},
    {Id: 2, Marca: "Ford", Modelo: "Fiesta", Cobrancas: [{Valor: 10.0}]},
    {Id: 3, Marca: "Honda", Modelo: "City", Cobrancas: [{Valor: 15.0}]},
    {Id: 4, Marca: "Honda", Modelo: "Civic", Cobrancas: []}
  ]
}
