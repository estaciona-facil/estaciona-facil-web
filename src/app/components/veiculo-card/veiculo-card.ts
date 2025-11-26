import {ChangeDetectionStrategy, Component, Input, input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Veiculo } from '../../models/veiculos.model';
import { Registro } from '../../models/registro.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-veiculo-card',
  templateUrl: './veiculo-card.html',
  styleUrl: './veiculo-card.css',
  imports: [MatCardModule, MatButtonModule, MatIconModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class VeiculoCard implements OnInit {

  @Input({ required: true }) registro!: Registro;
  veiculo!: Veiculo;
  
  ngOnInit(): void {
    this.veiculo = this.registro.veiculo;
  }

  moreInformation(veidulo: Veiculo) {
  }

  totalDeCobrancas() :number {
    return 0;
  }

  calcularTempoEstacionado() : number {
    const entrada = new Date(this.registro.dataEntrada);
    const saida = this.registro.dataSaida ? new Date(this.registro.dataSaida) : new Date();
    return saida.getTime() - entrada.getTime();
  }

  tempoEstacionadoFormatado(): string {
    const ms = this.calcularTempoEstacionado();

    const totalMinutos = Math.floor(ms / 60000);
    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;

    if (horas > 0) {
      return `${horas}h ${minutos}min`;
    }

    return `${minutos}min`;
  }
}