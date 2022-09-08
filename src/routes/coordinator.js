export const goToLogin = (history) => {
    history.push('/')
}

export const goToUser = (history, id) => {
    history.push(`/user/${id}`)
}

export const goToAdminLogin = (history) => {
    history.push(`/admin/login`)
}

export const goToAdmin = (history) => {
    history.push('/admin/main')
}

export const goToCreateContract = (history) => {
    history.push('/admin/addUser')
}

export const goToCalendar = (history) => {
    history.push('/admin/calendar')
}

export const goToViewClass = (history, id) => {
    history.push(`/admin/class/${id}`)
}

export const goToViewContract = (history, id) => {
    history.push(`/admin/user/${id}`)
}

export const goToEditContract = (history, id) => {
    history.push(`/admin/user/${id}/edit`)
}

export const goBack = (history) => {
    history.goBack()
}

