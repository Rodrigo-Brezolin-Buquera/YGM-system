import React, { useState, useEffect} from 'react'
import { StudentCard, IconCont } from './styled';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { goToViewContract } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import CancelIcon from '@material-ui/icons/Cancel';


const StudentCheckinCard = (props) => {
  
    const [checkin, setCheckin] = useState(props.verified)
    const [studentName, setStudentName] = useState("")
    const history = useHistory()

    useEffect(() => {
     
    }, [])

    const confirmCheckin = () => {
        setCheckin(!checkin)
      
    }

    const cancelCheckin = () => {
        if (window.confirm("Deseja cancelar este checkin?")) {
            
          
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
                onClick={() => { goToViewContract(history, props.id) }}
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
