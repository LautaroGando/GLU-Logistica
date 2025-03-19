export interface IPackage {
  id: string;
  packageNumber: string;
  clientName: string;
  companyName: string;
  receivedDate: string;
  emissionDate?: string;
  deliveryDate?: string;
  status: "Depósito" | "En camino" | "Entregado";
  updateStatus: () => void;
  role: "Cliente" | "Empresa";
}