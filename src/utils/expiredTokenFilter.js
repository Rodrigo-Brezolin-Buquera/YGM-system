import {goToLogin} from "../routes/coordinator"

export const expiredTokenFilter = (message, history) => {
    if (message === 'Token expirado, faça login novamente'){
        goToLogin(history)
    }

}