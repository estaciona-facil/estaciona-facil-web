import { EntidadeDominio } from "./dominio.model";
import { Modelo } from "./modelo.model";

export class Veiculo extends EntidadeDominio {
    placa!: string;
    modeloId?: String | null;
    modelo?: Modelo | null;

    constructor(
      placa: string, 
      modelo: Modelo | null
    ) {
        super();
        this.placa = placa;
        this.modelo = modelo;
    }
}