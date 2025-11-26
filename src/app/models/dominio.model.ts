export class EntidadeDescricao {
    id!: Number;
    descricao!: String;

    constructor(Id: Number, Descricao: String) {
        this.id = Id;
        this.descricao = Descricao;
    }
}

export class EntidadeDominio {
    id!: string;
}

export class EntidadeRelacionamento { }