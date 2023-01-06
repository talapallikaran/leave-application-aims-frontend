import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Sucessnotify = () => {
  toast.success("Login successfully", { autoClose: 3000 });
};

export const Failednotify = () => {
  toast.error("Invalid email or password!", {
    autoClose: 3000,
  });
};
