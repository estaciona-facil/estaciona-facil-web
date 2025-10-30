import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { PainelProprietario } from './pages/painel-proprietario/painel-proprietario';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'cadastro',
        component: Cadastro
    },
    {
        path: 'proprietario/dashboard',
        component: PainelProprietario
    }
];
