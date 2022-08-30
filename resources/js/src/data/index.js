const HANDLER_STORAGE = {
    GET: (KEY, type = "string") => {
        let _status = false;
        try {
            const dataString = localStorage.getItem(KEY);
            if (dataString) {
                _status = true;
            }
            return {
                status: _status,
                data: type === "object" ? JSON.parse(dataString) : dataString,
            };
        } catch (e) {
            return { statut: _status, data: e };
        }
    },
    SET: (KEY, value, type = "string") => {
        try {
            const jsonValue = type === "object" ? JSON.stringify(value) : value;
            localStorage.setItem(KEY, jsonValue);
            return { statut: true, data: "Enregistrer avec succès" };
        } catch (e) {
            return { statut: false, data: e };
        }
    },
    REMOVE: (KEY) => {
        try {
            localStorage.removeItem(KEY);
            return { statut: true, data: "Supprimer avec succès" };
        } catch (e) {
            return { statut: false, data: e };
        }
    },
};

export default HANDLER_STORAGE;
