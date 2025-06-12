import {
  ITableClients,
  ITablePayments,
  ITableShipments,
  ITableWarehouse,
} from "@/data/adminData/tableData/types";

export interface ITableProps {
  tableHeadData: string[];
  tableBodyData:
    | ITableClients[]
    | ITableWarehouse[]
    | ITableShipments[]
    | ITablePayments[];
}
