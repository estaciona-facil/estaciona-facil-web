import { Component } from '@angular/core';
import { DashboardEstacionamento } from "../../components/dashboard-estacionamento/dashboard-estacionamento";

@Component({
  selector: 'app-painel-proprietario',
  imports: [DashboardEstacionamento],
  templateUrl: './painel-proprietario.html',
  styleUrl: './painel-proprietario.css'
})
export class PainelProprietario {

}
