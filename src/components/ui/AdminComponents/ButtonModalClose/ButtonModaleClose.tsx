import { useAdminStore } from "@/store/adminStore/useAdminStore";

export const ButtonModaleClose = () => {
  const { closeModal } = useAdminStore();

  return (
    <button
      onClick={closeModal}
      type="button"
      className="w-[250px] h-[40px] bg-tcExtra text-pcSecondary mx-auto rounded-sm transition-all duration-300 hover:bg-tcExtra/80"
    >
      Cancelar
    </button>
  );
};
