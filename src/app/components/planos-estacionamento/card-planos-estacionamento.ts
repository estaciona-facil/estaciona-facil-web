import { Component, Input } from '@angular/core';
import { EntidadeDescricao } from '../../models/dominio.model';

@Component({
  selector: 'card-planos-estacionamento',
  templateUrl: './card-planos-estacionamento.html',
  styleUrls: ['./card-planos-estacionamento.css'],
})
export class PlanosEstacionamento {
  @Input() planos: PlanoEstacionamento[] = Planos;
}

export class TipoPlanoEstacionamento extends EntidadeDescricao {
  constructor(id: Number, descricao: String) {
    super(id, descricao);
  }
}

export class PlanoEstacionamento {
    Id!: Number;
    MtrValor!: Number;
    TipoPlanoEstacionamento!: TipoPlanoEstacionamento

    constructor(
      id: Number, 
      mtrValor: Number, 
      tipoPlanoEstacionamento: TipoPlanoEstacionamento)
    {
        this.Id = id;
        this.MtrValor = mtrValor;
        this.TipoPlanoEstacionamento = tipoPlanoEstacionamento;
    }
}

const TiposPlanoEstacionamento: Array<TipoPlanoEstacionamento> = [
  new TipoPlanoEstacionamento(0, "Por minuto"),
  new TipoPlanoEstacionamento(1, "Por 15 minutos"),
  new TipoPlanoEstacionamento(2, "Por hora"),
];

const Planos: Array<PlanoEstacionamento> = [
  new PlanoEstacionamento(0, 5, TiposPlanoEstacionamento[0]),
  new PlanoEstacionamento(1, 10, TiposPlanoEstacionamento[1]),
  new PlanoEstacionamento(2, 15, TiposPlanoEstacionamento[2]),
]