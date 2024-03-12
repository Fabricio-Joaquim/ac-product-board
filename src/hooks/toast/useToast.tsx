import Swal from "sweetalert2";

export const useToast = () => {
  const toast = (
    title: string,
    icon: "success" | "error" | "warning" | "info" | "question",
  ): Promise<unknown> => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon,
      title,
    });
  };

  const toastDialog = ({
    title,
    icon,
    onConfirm,
  }: {
    title: string;
    icon: "success" | "error" | "warning" | "info" | "question";
    onConfirm: () => void;
  }) => {
    Swal.fire({
      title,
      icon,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#FF6B6B",
      confirmButtonColor: "#4CAF50",
    }).then(
      (result: {
        isConfirmed: boolean;
        isDenied: boolean;
        isDismissed: boolean;
      }) => {
        console.log(result);
        if (result.isConfirmed) {
          onConfirm();
        }
      },
    );
  };

  return { toast, toastDialog };
};
