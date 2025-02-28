import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ICreateButtonProps from "./types";
import { useCreateModal } from "@/context/CreateModalContext/CreateModalContext";
import { usePathname } from "next/navigation";

const CreateButton: React.FC<ICreateButtonProps> = ({ text }) => {
  const { openModal } = useCreateModal();
  const path = usePathname();
  const currentPath = path.split('/').filter(Boolean).pop();

  if(currentPath === 'users') return

  return (
    <div className="w-full h-[42px] order-1 mt-6 sm:order-2 sm:w-[167px]">
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-3 w-full h-full bg-admin-green/50 transition-all duration-200 hover:bg-admin-green/70"
      >
        <span className="text-[16px] font-bold">{text}</span>
        <FontAwesomeIcon icon={faPlus} className="w-[16px]"/>
      </button>
    </div>
  );
};

export default CreateButton;
