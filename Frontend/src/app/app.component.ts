import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module'; // Importando as rotas diretamente

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule], // O RouterModule é suficiente aqui
})
export class AppComponent {
  title = 'front_WebAPI_EmprestimoConsignado';
}
