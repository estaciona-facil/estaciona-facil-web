import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

export type Cobranca = {
  Valor: number
}

export type Veiculo = {
  Id: number,
  Marca: string,
  Modelo: string,
  Cobrancas: Cobranca[],
}

@Component({
  selector: 'app-veiculo-card',
  templateUrl: './veiculo-card.html',
  styleUrl: './veiculo-card.css',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VeiculoCard {

  @Input({ required: true }) veiculo!: Veiculo;
  
  moreInformation() {
    console.log("teste")
  }

  totalDeCobrancas() :number {
    return this.veiculo.Cobrancas.reduce((total, item) => { return total + item.Valor; }, 0);
  }
}