export const pricePattern = {
    value: /^[0-9]{1,3}$/,
    message: "Entre com valores possitivos entre 0 e 999"
}

export const numberPattern = {
    value: /^[0-9]{1,2}$/,
    message: "Entre com valores possitivos entre 0 e 99"
}

export const stringPattern = {
    value: /^[a-zA-Z ]{3,40}$/u,
    message: "Os textos devem ter entre 3 e 40 caracteres sem caracteres especiais"
}

export const emailPattern = {
    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Entre com um email válido"
}

export const passwordPattern = {
    value:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/i,
    message: "A senha precisa ter no mínimo 6 caracteres, com pelo menos 1 letra e 1 número, sem caracteres especiais"
}