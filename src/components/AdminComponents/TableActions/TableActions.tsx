import CreateButtonAdmin from "../CreateButton/CreateButton";
import PaginationAdmin from "../Pagination/Pagination";

const TableActions: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full sm:flex-row">
      <PaginationAdmin />
      <CreateButtonAdmin text="Crear nuevo" />
    </div>
  );
};

export default TableActions;
