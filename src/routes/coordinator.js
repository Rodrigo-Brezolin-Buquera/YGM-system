export const goToLogin = (history) => {
    history.push('/')
}

export const goToUser = (history, id) => {
    history.push(`/usuário/${id}`)
}

export const goToAdmin = (history) => {
    history.push('/admin')
}

export const goToCreateContract = (history) => {
    history.push('/admin/adicionar-usuário')
}

export const goToEditCalendar = (history) => {
    history.push('/admin/calendário')
}

export const goToViewClass = (history, id) => {
    history.push(`/admin/aula/${id}`)
}

export const goToViewContract = (history, id) => {
    history.push(`/admin/usuário/${id}`)
}

export const goToEditContract = (history, id) => {
    history.push(`/admin/usuário/${id}/editar`)
}

export const goBack = (history) => {
    history.goBack()
}

