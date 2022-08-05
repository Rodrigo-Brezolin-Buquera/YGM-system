import React, { useEffect } from 'react'
import { StudentCard, IconCont } from './styled';
import { Typography, CircularProgress } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import { deleteCheckin, validateCheckin } from '../../../../services/requests/bookingRequests';

const StudentCheckinCard = ({ id, name, verified, loading, setLoading }) => {
    useEffect(() => { }, [verified, loading])

    const confirmCheckin = async () => {
        setLoading(true)
        await validateCheckin(id, !verified)
        setLoading(false)
    }

    const cancelCheckin = async () => {
        if (window.confirm("Cancelar este checkin?")) {
            setLoading(true)
            await deleteCheckin(id)
            setLoading(false)
        }
    }

    return (
        <StudentCard>
            {loading ? <CircularProgress color={"inherit"} size={24} /> : <>
                <IconCont
                    onClick={() => confirmCheckin()}
                    type={verified}
                >
                    {verified ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                </IconCont>

                <StudentCard key={id} >
                    <Typography >  {name}  </Typography>
                </StudentCard>

                <IconCont onClick={() => cancelCheckin()}  >
                    <CancelIcon />
                </IconCont>
            </>}
        </StudentCard>
    )
}

export default StudentCheckinCard
