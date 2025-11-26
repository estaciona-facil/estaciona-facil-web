import { provideRouter, RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { VeiculosEstacionados } from './pages/admin/veiculos-estacionados/veiculos-estacionados';
import { ConsultarPlaca } from './pages/consultar-placa/consultar-placa';
import { PaginaBaseAdmin } from './pages/admin/pagina-base-admin/pagina-base-admin';
import { GerenciarEstacionamento } from './pages/admin/estacionamento/estacionamento';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'consultar', component: ConsultarPlaca },
  {
    path: '',
    component: PaginaBaseAdmin,
    children: [
      { path: 'dashboard', component: Login },
      { path: 'veiculos', component: VeiculosEstacionados },
      { path: 'estacionamento', component: GerenciarEstacionamento }
    ]
  },
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule = provideRouter(routes);