import React from "react";
import { IUserInfoButtonProps } from "./types";

export const UserInfoButton: React.FC<IUserInfoButtonProps> = ({
  isEditing,
  setIsEditing,
  isSubmitting,
  submitForm,
  isValid,
}) => {
  return (
    <div className="flex justify-center mt-10">
      {isEditing ? (
        <button
          type="button"
          onClick={submitForm}
          disabled={isSubmitting || !isValid}
          className={`w-[180px] h-[44px] rounded-[2px] font-medium transition text-white ${
            isSubmitting || !isValid
              ? "bg-pcPrincipal opacity-50 cursor-not-allowed"
              : "bg-pcPrincipal hover:bg-pcPrincipal/90"
          }`}
        >
          {isSubmitting ? "Guardando..." : "Guardar Cambios"}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="bg-pcPrincipal text-white w-[180px] h-[44px] rounded-[2px] font-medium hover:bg-pcPrincipal/90 transition"
        >
          Modificar Datos
        </button>
      )}
    </div>
  );
};
