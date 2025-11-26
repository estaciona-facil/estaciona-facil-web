import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlanosEstacionamento } from "../planos-estacionamento/card-planos-estacionamento";
import { TempoEstacionadoCard } from "./tempo-estacionado-card/tempo-estacionado-card";
import { Registro } from '../../models/registro.model';
import { EstacionadoInfoCard } from "./tolerancia-estacionamento-info-card/estacionamento-info-card";
import { FormsModule } from '@angular/forms';
import { ValorEstacionadoCard } from "./valor-estacionamento-info-card/valor-estacionamento-info-card";


@Component({
  selector: 'veiculo-estacionado-info',
  templateUrl: './veiculo-estacionado-info.html',
  styleUrls: ['./veiculo-estacionado-info.css'],
  imports: [PlanosEstacionamento, TempoEstacionadoCard, EstacionadoInfoCard, FormsModule, ValorEstacionadoCard],
})
export class VeiculoEstacionadoInfo {
  @Input() registro!: Registro;
  @Output() voltar = new EventEmitter<void>();

  constructor() {}

  efetuarPagamento() {
    setTimeout(() => {
      alert('Pagamento realizado com sucesso!');
    }, 2000);
  }

  limpar() {
    this.voltar.emit();
  }
}
