export const numberPattern = {
    value: /^[0-9]{1,2}$/,
    message: "Entre com valores possitivos entre 0 e 99"
}

export const stringPattern = {
    value: /^[a-zA-Z]{3,30}$/u,
    message: "Os textos devem ter entre 3 e 30 caracteres sem caracteres especiais"
}


export const emailPattern = {
    value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Entre com um email válido"
}

export const timePattern = {
    value:/^([01]\d|2[0-3]):([0-5]\d)$/,
    message: "Entre com um horário no formato HH:MM"
}
