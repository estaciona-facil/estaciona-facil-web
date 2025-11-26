import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Estacionamento } from '../../../models/estacionamento.model';

@Component({
  selector: 'estacionamento-info-card',
  templateUrl: './estacionamento-info-card.html',
  styleUrls: ['./estacionamento-info-card.css'],
  imports: [],
})
export class EstacionadoInfoCard implements OnInit {
  @Input() estacionamentoId!: string;
  estacionamento!: Estacionamento;
  loading: boolean = false;
  mensagemErro?: string | null = null;

  @Output() voltar = new EventEmitter<void>();


  constructor(private api :ApiService) { }

  ngOnInit(): void {
    this.obterEstacionamentoPorId();
  }

  obterEstacionamentoPorId() : void {
    this.api.obterEstacionamentoPorId(this.estacionamentoId).subscribe({
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
  
    
  toggleLoading() : void {
    this.loading = !this.loading;
  }
}
