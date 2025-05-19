export interface IPackageDto {
  packageNumber: string;
  clientId: string
  receivedDate: string;
  emissionDate?: string;
  deliveryDate?: string;
  status?: "DEPOSITO" | "EN_CAMINO" | "ENTREGADO";
}
