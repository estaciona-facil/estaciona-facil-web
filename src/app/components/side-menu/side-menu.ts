import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  href: string;
  icon: string; 
  disabled: boolean;
}

@Component({
  selector: 'side-menu',
  imports: [RouterLink],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  menuItems: MenuItem[] = [
    { label: 'Carros', href: '/veiculos', icon: '🚗', disabled: false },
    { label: 'Estacionamento', href: '/estacionamento', icon: '', disabled: true },
    { label: 'Planos', href: '/planos', icon: '', disabled: true }
  ];

  constructor(public router: Router) {}

  isActive(href: string): boolean {
    return this.router.url === href;
  }
}
