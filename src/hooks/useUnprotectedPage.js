import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToAdmin, goToUser } from '../routes/coordinator';
import { verifyUserPermission } from '../services/jwt/verifyUserPermission';

function useUnprotectedPage() {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const { admin, id } = verifyUserPermission(token)

            if (id && admin) {
                goToAdmin(history)
            } else if(id && !admin) {
                goToUser(history, id)
            }
        }
    })
}

export default useUnprotectedPage;