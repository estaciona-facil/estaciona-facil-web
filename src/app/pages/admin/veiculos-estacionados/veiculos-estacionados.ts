import { Component, OnInit } from '@angular/core';
import { Registro } from '../../../models/registro.model';
import { ApiService } from '../../../services/api.service';
import { VeiculoCard } from "../../../components/veiculo-card/veiculo-card";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculos-estacionados',
  templateUrl: './veiculos-estacionados.html',
  styleUrls: ['./veiculos-estacionados.css'],
  imports: [VeiculoCard, FormsModule]
})
export class VeiculosEstacionados implements OnInit {
    loading!: boolean;
    errorMessage?: string;
    registros: Registro[] = [];

    constructor(private api: ApiService) { }

    buscarRegistros() : void {
        this.loading = true;
        this.api.buscarVeiculosEstacionados().subscribe({
            next: (res : Registro[]) => {
                this.registros = res;
                this.toggleLoading();
            },
            error: (err) => {
                this.errorMessage = "Não foi possível recuperar os veículos estacionados!";
                this.toggleLoading();
            }
        });
    } 

    toggleLoading() : void {
        this.loading = !this.loading;
    }

    ngOnInit(): void {
        this.buscarRegistros();
    }
}
