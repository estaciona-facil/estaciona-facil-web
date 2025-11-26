import { Component, OnInit } from '@angular/core';
import { Header } from '../../../components/header/header';
import { RouterOutlet } from "@angular/router";
import { SideMenu } from "../../../components/side-menu/side-menu";

@Component({
  selector: 'pagina-base-admin',
  templateUrl: './pagina-base-admin.html',
  styleUrls: ['./pagina-base-admin.css'],
  imports: [Header, RouterOutlet, SideMenu]
})
export class PaginaBaseAdmin implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
