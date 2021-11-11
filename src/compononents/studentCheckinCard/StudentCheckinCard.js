import React, { useState, useEffect, useContext } from 'react'
import { StudentCard, IconCont } from './styled';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { goToViewUser } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import CancelIcon from '@material-ui/icons/Cancel';
import { deleteCheckin, validateCheckin } from '../../services/checkins';
import { findUserNameByplan } from '../../services/plans';
import { GlobalStateContext } from '../../global/GlobalStateContext'

const StudentCheckinCard = (props) => {
    const { setters, states } = useContext(GlobalStateContext)
    const [checkin, setCheckin] = useState(props.verified)
    const [studentName, setStudentName] = useState("")
    const history = useHistory()

    useEffect(() => {
        findUserNameByplan(props.planId, setStudentName)
    }, [states.newRender])

    const confirmCheckin = () => {
        setCheckin(!checkin)
        validateCheckin(props.planId, props.classId)
    }

    const cancelCheckin = () => {
        if (window.confirm("Deseja cancelar este checkin?")) {
            deleteCheckin(props.planId, props.classId)
            setters.setNewRender(!states.newRender)
        }
    }

    return (
        <StudentCard>
            <IconCont
                onClick={() => confirmCheckin()}
                type={checkin}
            >
                {checkin ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </IconCont>

            <StudentCard
                key={props.id}
                onClick={() => { goToViewUser(history, props.id) }}
            >
                <Typography >  {studentName}  </Typography>
            </StudentCard>

            <IconCont
                onClick={() => cancelCheckin()}
                style={{ color: "red" }}
            >
                <CancelIcon />
            </IconCont>
        </StudentCard>
    )
}

export default StudentCheckinCard
