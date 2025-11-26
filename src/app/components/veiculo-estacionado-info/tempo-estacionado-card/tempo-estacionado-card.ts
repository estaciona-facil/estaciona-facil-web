import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Registro } from '../../../models/registro.model';

@Component({
  selector: 'tempo-estacionado-card',
  templateUrl: './tempo-estacionado-card.html',
  styleUrls: ['./tempo-estacionado-card.css'],
  imports: [DatePipe],
})
export class TempoEstacionadoCard {
  @Input() registro!: Registro;

  @Output() voltar = new EventEmitter<void>();

  constructor() { }

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
