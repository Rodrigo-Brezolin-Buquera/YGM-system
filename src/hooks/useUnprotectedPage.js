import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { goToAdmin, goToUser } from '../routes/coordinator';
import { decodeToken, isExpired } from "react-jwt";

function useUnprotectedPage() {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')

        if (token && !isExpired(token)) {
            const tokenData = decodeToken(token)

            if (tokenData?.admin) {
                goToAdmin(history)
            } else if (tokenData?.id && !tokenData?.admin) {
                goToUser(history, tokenData.id)
            }
        }
    })
}

export default useUnprotectedPage;