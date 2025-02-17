export interface Cliente {
  Id?: number;
  Nome: string;
  CPF:string;
  Email: string;
  Ativo: boolean;
  DataDeCriacao: string;
  DataDeAlteracao?: string;
  TipoEmprestimo?: string;
  StatusEmprestimo?: string;
  ValorEmprestimo?: number;
  QtdParcelas?: number;
  ValorParcela?: number;
  DataContratacao?: number;
}
