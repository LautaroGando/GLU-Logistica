import Swal from "sweetalert2";

const useSuccessAlert = () => {
  const showSuccessAlert = (
    title: string,
    description: string,
    customStyles?: { popup?: string; title?: string }
  ) => {
    Swal.fire({
      icon: "success",
      title,
      text: description,
      showConfirmButton: false,
      timerProgressBar:true,
      timer: 2000,
      customClass: {
        popup: customStyles?.popup || "custom-popup",
        title: customStyles?.title || "custom-title",
      },
    });
  };

  return showSuccessAlert;
};

export default useSuccessAlert;
