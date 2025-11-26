import { EntidadeDescricao } from "./dominio.model";
import { Marca } from "./marca.model";

export class Modelo extends EntidadeDescricao {
    marcaId?: Number | null;
    marca?: Marca | undefined | null;

    constructor(id: Number, descricao: String, marcaId: Number | null = null, marca: Marca | null = null) {
        super(id, descricao);
        this.marca = marca;
        this.marcaId = marcaId;
    }
}