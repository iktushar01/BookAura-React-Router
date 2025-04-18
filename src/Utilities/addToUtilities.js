import { toast } from "react-hot-toast";

const getStoredBook = () => {
    const storeBookSTR = localStorage.getItem("readList");
    if (storeBookSTR) {
        return JSON.parse(storeBookSTR);
    } else {
        return [];
    }
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        toast.error("Already added to read list");
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
        toast.success("Book added to read list");
    }
};


export {addToStoredDB ,getStoredBook}

export const showUpdateSoonToast = () => {
    toast("This feature will update soon!");
  };