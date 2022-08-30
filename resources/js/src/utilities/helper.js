export const roleToShow = (role) => {
    switch (role) {
        case 'journalist':
            return 'gestionnaire';
        case 'accounting':
            return 'comptable';
        case 'observer':
            return 'consultant';
        case 'admin':
            return 'administrateur';
        default:
            return 'utilisateur';
    }
}


export const roleToSave = (role) => {
    switch (role) {
        case 'gestionnaire':
            return 'journalist';
        case 'comptable':
            return 'accounting';
        case 'consultant':
            return 'observer';
        case 'administrateur':
            return 'admin';
        default:
            return 'user';
    }
}




export const getNumberPage = (tables = [], perPage = 10) => {
    const numberPage = tables.length / perPage
    return Number((Math.ceil(numberPage)).toFixed(0))
}
