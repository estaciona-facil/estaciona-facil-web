import { Component, inject, OnInit } from '@angular/core';
import { SimpleInput } from "../../components/inputs/simple-input/simple-input";
import { VeiculoEstacionadoInfo } from "../../components/veiculo-estacionado-info/veiculo-estacionado-info";
import { FormErro } from "../../components/forms/form-erro/form-erro";
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Estacionamento } from '../../models/estacionamento.model';
import { Registro } from '../../models/registro.model';
import { Router } from '@angular/router';

@Component({
  imports: [SimpleInput, VeiculoEstacionadoInfo, FormErro, FormsModule],
  templateUrl: './consultar-placa.html',
  styleUrl: './consultar-placa.css'
})

export class ConsultarPlaca {
    router = inject(Router);
    placa: string = '';
    erroConsultarPlaca?: string;
    loading: boolean = false;
    registro?: Registro | null;

    constructor(private api: ApiService) { }

    consultarPlaca() : void {
      this.loading = true;
      this.api.consultarPlaca(this.placa).subscribe({
        next: (res : Registro) => {
          this.registro = res;
          this.toggleLoading();
        },
        error: (err) => {
          this.erroConsultarPlaca = "Veículo não encontrado!";
          this.toggleLoading();
        }
      });
    } 

    acessoAdmin() : void {
      this.router.navigate(["login"]);
    }

    limparConsulta() : void {
      this.loading = true;
      this.placa = "";
      this.registro = undefined;
      this.loading = false;
    }

    toggleLoading() : void {
      this.loading = !this.loading;
    }
}
