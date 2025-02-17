import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/Cliente';
import { Response } from '../../models/Response'; // Supondo que a interface esteja nesse caminho

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clientes: Cliente[] = [];
  clientesGeral: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.GetClientes().subscribe((data: Response<Cliente[]>) => {
      const dados = data.dados;
      dados.map((item) => {
        item.DataDeCriacao = new Date(item.DataDeCriacao!).toLocaleDateString('pt-BR');
        item.DataDeAlteracao = new Date(item.DataDeAlteracao!).toLocaleDateString('pt-BR');
      });
      console.log(dados);
      this.clientesGeral = dados;
      this.clientes = dados;
    });
  }
}
