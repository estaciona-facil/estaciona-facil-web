import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Estacionamento } from '../../../models/estacionamento.model';
import { Registro } from '../../../models/registro.model';

@Component({
  selector: 'valor-estacionamento-info-card',
  templateUrl: './valor-estacionamento-info-card.html',
  styleUrls: ['./valor-estacionamento-info-card.css'],
  imports: [],
})
export class ValorEstacionadoCard implements OnInit {
  @Input() registro!: Registro;
  estacionamento!: Estacionamento;
  loading: boolean = false;
  mensagemErro?: string | null = null;

  @Output() voltar = new EventEmitter<void>();


  constructor(private api :ApiService) { }

  ngOnInit(): void {
    this.obterEstacionamentoPorId();
  }

  obterEstacionamentoPorId() : void {
    this.api.obterEstacionamentoPorId(this.api.estacionamentoId).subscribe({
      next: (res : Estacionamento) => {
        this.estacionamento = res;
        this.toggleLoading();
      },
      error: () => {
        this.mensagemErro = "Veículo não encontrado!";
        this.toggleLoading();
      }
    });
  } 
  
   calcularValorEstacionamento() : number {
    return parseFloat(this.estacionamento.mtrValorHora) * this.tempoEstacionadoEmHoras();
  }
  
  calcularTempoEstacionado() : number {
    const entrada = new Date(this.registro.dataEntrada);
    const saida = this.registro.dataSaida ? new Date(this.registro.dataSaida) : new Date();
    return saida.getTime() - entrada.getTime();
  }

  tempoEstacionadoEmHoras(): number {
    const ms = this.calcularTempoEstacionado();

    const totalMinutos = Math.floor(ms / 60000);
    return Math.floor(totalMinutos / 60);
  }
    
  toggleLoading() : void {
    this.loading = !this.loading;
  }
}
