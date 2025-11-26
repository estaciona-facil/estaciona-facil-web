import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleInput } from '../../../components/inputs/simple-input/simple-input';
import { Estacionamento } from '../../../models/estacionamento.model';
import { ApiService } from '../../../services/api.service';


@Component({
    selector: 'app-estacionamento',
    templateUrl: './estacionamento.html',
    styleUrls: ['./estacionamento.css'],
    imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class GerenciarEstacionamento implements OnInit {
    estacionamento!: Estacionamento;
    mensagemErro?: string;

    constructor(private fb: FormBuilder, private api: ApiService) {
        
    }

    ngOnInit(): void {
        this.obterEstacionamentoPorId();
    }

    obterEstacionamentoPorId(): void {
        this.api.obterEstacionamentoPorId(this.api.estacionamentoId).subscribe({
            next: (res: Estacionamento) => {
                this.estacionamento = res;
            },
            error: () => {
                this.mensagemErro = "Estacionamento não encontrado!";
            }
        });
    }

    handleSave() {
        
    }
}
