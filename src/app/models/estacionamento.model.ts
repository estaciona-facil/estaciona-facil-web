import { EntidadeDominio } from "./dominio.model";

export class Estacionamento extends EntidadeDominio {
    nome!: string;
    endereco!: Endereco; 
    minutosTolerancia?: string; 
    mtrValorHora!: string; 

    constructor(
        Nome: string, 
        Endereco: Endereco, 
        MinutosTolerancia: string, 
        MtrValorHora: string
    ) {
        super();
        this.nome = Nome;
        this.endereco = Endereco;
        this.minutosTolerancia = MinutosTolerancia;
        this.mtrValorHora = MtrValorHora;
    }
 }

 export class Endereco extends EntidadeDominio {
    cep?: string;
    cidade?: string;
    bairro?: string;
    logradouro?: string;
    numero?: number;
    complemento?: string;

    constructor(
        Cep?: string,
        Cidade?: string,
        Bairro?: string,
        Logradouro?: string,
        Numero?: number,
        Complemento?: string,
    ) {
        super();
        this.cep = Cep;
        this.cidade = Cidade;
        this.bairro = Bairro;
        this.logradouro = Logradouro;
        this.numero = Numero;
        this.complemento = Complemento;
    }
 }