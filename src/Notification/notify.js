import { toast } from "react-toastify";

//to show notifications
export const showToastMessage = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
