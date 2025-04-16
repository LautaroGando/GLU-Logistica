export interface IPackageDto {
  packageNumber: string;
  companyName?: string;
  clientName: string;
  receivedDate: string;
  emissionDate?: string;
  deliveryDate?: string;
  status?: "DEPOSITO" | "EN_CAMINO" | "ENTREGADO";
}
