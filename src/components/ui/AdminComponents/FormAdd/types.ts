import {
  IFormDataClients,
  IFormDataShipments,
  IFormDataWarehouse,
} from "@/data/adminData/formData/types";

export interface IFormAddProps {
  initialValues:
    | IFormDataClients
    | IFormDataWarehouse
    | IFormDataShipments
    | null;
}
