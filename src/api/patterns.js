export const pricePattern = {
    value: /^[0-9]{1,3}$/,
    message: "Entre com valores possitivos entre 0 e 999"
}

export const numberPattern = {
    value: /^[0-9]{1,2}$/,
    message: "Entre com valores possitivos entre 0 e 99"
}

export const stringPattern = {
    value: /^[a-zA-Z ]{3,30}$/u,
    message: "Os textos devem ter entre 3 e 30 caracteres sem caracteres especiais"
}

export const emailPattern = {
    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Entre com um email válido"
}

