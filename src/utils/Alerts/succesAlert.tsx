import Swal from "sweetalert2";

export const succesAlert = (title: string, text: string, icon: "success" | "error" | "warning") => {
  Swal.fire({ title, text, icon, showCancelButton: false, timerProgressBar: true, timer: 1000 });
};
