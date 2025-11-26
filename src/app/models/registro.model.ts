import { EntidadeRelacionamento } from "./dominio.model";
import { Estacionamento } from "./estacionamento.model";
import { Veiculo } from "./veiculos.model";

export class Registro extends EntidadeRelacionamento{
    dataEntrada!: string;
    dataSaida?: string;
    
    veiculoId!: string;
    estacionamentoId!: string;

    veiculo!: Veiculo;
    estacionamento?: Estacionamento | null | undefined;

    constructor(DataEntrada: string, Veiculo: Veiculo, DataSaida?: string) {
        super()
        this.dataEntrada = DataEntrada;
        this.dataSaida = DataSaida;
        this.veiculo = Veiculo;
    }
}