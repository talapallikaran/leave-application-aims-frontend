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

export const ApplyleaveSuccessnotify = () => {
  toast.success("Apply Leave successfully", {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
  });
};
export const UserSessionExpire = () => {
  toast.error("your session is expried!", {
    autoClose: 3000,
    position: toast.POSITION.TOP_CENTER,
  });
};
