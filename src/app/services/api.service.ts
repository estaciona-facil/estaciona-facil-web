import { HttpClient } from "@angular/common/http";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { isBrowser, PlatformService } from "../utils/browser.utils";
import { env } from "../env/env";
import { UserService } from "./user.service";
import { Estacionamento } from "../models/estacionamento.model";
import { Observable, tap } from "rxjs";
import { Registro } from "../models/registro.model";

@Injectable({ providedIn: 'root' })
export class ApiService {
    private http = inject(HttpClient);
    private platform = new PlatformService(inject(PLATFORM_ID));
    private baseUrl = env.apiUrl;
    public estacionamentoId: string = "019ac140-c1e2-78ed-95eb-fabfb872472c";

    constructor(private userService: UserService) { }

    private setItem(key: string, value: string) {
        if (isBrowser(this.platform.isBrowser())) sessionStorage.setItem(key, value);
    }

    private getItem(key: string): string | null {
        return isBrowser(this.platform.isBrowser()) ? sessionStorage.getItem(key) : null;
    }

    private clear() {
        if (isBrowser(this.platform.isBrowser())) sessionStorage.clear();
    }

    consultarPlaca(placa: string): Observable<Registro> {
        var retorno = this.http.get<Registro>(`${this.baseUrl}/Registro/${placa}`).pipe();
        return retorno;
    }

    buscarVeiculosEstacionados(): Observable<Registro[]> {
        var retorno = this.http.get<Registro[]>(`${this.baseUrl}/Registro/veiculos-estacionados`).pipe();
        return retorno;
    }

    obterEstacionamentoPorId(estacionamentoId: string): Observable<Estacionamento> {
        var retorno = this.http.get<Estacionamento>(`${this.baseUrl}/Estacionamento/${estacionamentoId}`).pipe();
        return retorno;
    }
}
