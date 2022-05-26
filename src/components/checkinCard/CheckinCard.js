import React, {useEffect, useState} from 'react'
import { CheckinCardCont } from './styled'
import Typography from '@material-ui/core/Typography';

import moment from "moment"

const CheckinCard = ({classId}) => {
    const [classInfo, setClassInfo] = useState({})

    useEffect(() => {
 
    }, [])

    return (
        <CheckinCardCont>
            <Typography component="subtitle2" style={{ fontWeight: 600 }}> {classInfo.day} {classInfo.time} {moment(classInfo.date).format("DD/MM")}</Typography>
            <Typography> {classInfo.teacher} - {classInfo.name}  </Typography>
        </CheckinCardCont>
    )
}

export default CheckinCard
