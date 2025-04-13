import { toast } from "react-toastify";

export const useToast = () => {
  const success = (message) => {
    toast.success(message, { position: "top-right" });
  };
  const error = (message) => {
    toast.success(message, { position: "top-right" });
  };
  return {success,error}
};
