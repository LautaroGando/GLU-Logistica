import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NotData = () => {
  return (
    <div className="min-h-[542px] max-h-[542px] flex items-center justify-center">
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          className="max-w-[60px] text-[60px] text-admin-red"
          icon={faCircleXmark}
          width={60}
        />
        <p className="text-xl text-sc">No se encontró información</p>
      </div>
    </div>
  );
};
