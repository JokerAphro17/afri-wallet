// requeste and dispatch to redux

import HTTP_CLIENT, { handlingErrors } from "./client";
import HTTP_CLIENT_2 from "./client0auth";

const FILE_HEADERS = {
    headers: { "Content-Type": "multipart/form-data" },
};

export const signinUsers = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("signin", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const signupUsers = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("signup", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const signoutUsers = () =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get("signout")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const activateAccount = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("account/verify", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const sendActivateCodeAgaint = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("account/verify/resend", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const verifyUserAccountToForgotPass = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("password/reset", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const updatedPasswordForgetted = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("password/reset/token", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const updateAccountPassword = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("accounts/update/password", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

//   users hander
export const addUsers = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("users", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const updatedUserInfo = (uuid, params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.put(`users/${uuid}`, params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const fetchInfoUser = (uuid) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get(`users/${uuid}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const generateUserPassword = (uuid) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get(`users/${uuid}/password/update`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const restrictionUserAccess = (uuid, params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post(`users/${uuid}/restriction`, params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const fetchAccountAdmin = (page) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get(`admin/page/${page}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const fetchAccountUser = (page) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get(`users/page/${page}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

// Account

export const updatedAccountInfo = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("users/update/account", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
    export const payment = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("payment/crypto", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
    

    
export const fetchTwittes = () =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT_2.get("tweets?ids=1261326399320715264,1278347468690915330")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });