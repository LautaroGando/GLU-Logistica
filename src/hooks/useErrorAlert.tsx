import Swal from "sweetalert2";

const useErrorAlert = () => {
  const showErrorAlert = (title: string, description: string,customStyles?: { popup?: string; title?: string }) => {
    Swal.fire({
      icon: "error",
      title,
      text: description,
      showConfirmButton: false,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#bd442a",
      background: "#F8D7DA",
      color: "#721C24",
      customClass: {
        popup: "rounded-lg shadow-xl",
        title: customStyles?.title || "custom-title",
      },
      timer: 3500,
      timerProgressBar: true,
    });
  };

  return showErrorAlert;
};

export default useErrorAlert;
