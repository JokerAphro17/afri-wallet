import Swal from "sweetalert2";

export const alertPending = (message = "Veuillez patienter") => {
    Swal.fire({
        title: "",
        html: message,
        didOpen: () => {
            Swal.showLoading();
        },
        allowOutsideClick: false,
    }).then(() => {});
};

export const alertNotification = (
    icon = "info",
    message = "",
    callback = null,
    title = "Notification",
    confirmBtn = "Ok"
) => {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        allowOutsideClick: false,
        confirmButtonText: confirmBtn,
    }).then((result) => {
        if (callback) {
            callback({
                isConfirmed: result?.isConfirmed,
                isDenied: result?.isDenied,
            });
        }
    });
};

export const alertConfirmation = (
    message = "",
    callback = null,
    confirmBtn = "Je confirme",
    title = "Confirmation",
) => {
    Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: confirmBtn,
        cancelButtonText: 'Annuler',
    }).then((result) => {
        if (callback) {
            callback({
                isConfirmed: result?.isConfirmed,
                isDenied: result?.isDenied,
            });
        }
    });
};

export const alertConfirm = () => {};

export const testAlert = (isLoading) => {
    Swal.fire({
        title: "",
        didOpen: () => {
            Swal.showLoading();
        },
        allowOutsideClick: false,
    }).then(() => {
        return Swal.fire(<p>Shorthand works too</p>);
    });
};

export const alertClosed = () => {
    Swal.close();
};
