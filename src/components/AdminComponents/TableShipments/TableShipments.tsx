import { Filter } from "@/components/ui/AdminComponents/Filter/Filter";
import Pagination from "@/components/ui/AdminComponents/Pagination/Pagination";
import { Table } from "@/components/ui/AdminComponents/Table/Table";
import { tableData } from "@/data/adminData/tableData/tableData";
import { ButtonAdd } from "@/components/ui/AdminComponents/ButtonAdd/ButtonAdd";
import { Modal } from "@/enum/Modal";

export const TableShipments = () => {
  return (
    <div className="w-full flex flex-col gap-5 p-3">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <Filter filter={[]} filterId="" />
        <Pagination />
      </div>
      <div className="w-full overflow-auto">
        <Table tableHeadData={tableData[2].tableHeadData} tableBodyData={tableData[2].tableBodyData} />
      </div>
      <div className="w-full flex justify-end">
        <ButtonAdd label="Añadir órden" modalType={Modal.SHIPMENT} />
      </div>
    </div>
  );
};
