import React, { useEffect, useState} from 'react'
import { StudentCard, IconCont } from './styled';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import { deleteCheckin, validateCheckin } from '../../../../services/requests/bookingRequests';

const StudentCheckinCard = (props) => {
    // const [checkin, setCheckin] = useState(props.verified)

    useEffect(()=>{}, [props])

    const confirmCheckin = () => {
        // setCheckin(!checkin)
        validateCheckin(props.id, props.verified)
    }

    const cancelCheckin = () => {
        if (window.confirm("Deseja cancelar este checkin?")) {
                deleteCheckin(props.id)
        }
    }

    return (
        <StudentCard>
            <IconCont
                onClick={() => confirmCheckin()}
                type={props.verified}
            >
                {props.verified ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </IconCont>

            <StudentCard
                key={props.id}
            >
                <Typography >  {props.name}  </Typography>
            </StudentCard>

            <IconCont
                onClick={() => cancelCheckin()}
            >
                <CancelIcon />
            </IconCont>
        </StudentCard>
    )
}

export default StudentCheckinCard
