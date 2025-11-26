import { Component, Input, OnInit } from '@angular/core';
import { EntidadeDescricao } from '../../models/dominio.model';
import { Estacionamento } from '../../models/estacionamento.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'card-planos-estacionamento',
  templateUrl: './card-planos-estacionamento.html',
  styleUrls: ['./card-planos-estacionamento.css'],
})
export class PlanosEstacionamento implements OnInit {
  estacionamento!: Estacionamento;

  constructor(private api: ApiService)
  {
    
  }

  ngOnInit(): void {
      this.obterEstacionamentoPorId();
  }

  obterEstacionamentoPorId() : void {
    this.api.obterEstacionamentoPorId(this.api.estacionamentoId).subscribe({
      next: (res : Estacionamento) => {
        this.estacionamento = res;
      },
      error: () => { }
    });
  }
}

