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
        alert("Bhai, ei ID agei ase!");
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
};


export {addToStoredDB ,getStoredBook}