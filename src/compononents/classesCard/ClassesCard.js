import React, { useState, useEffect } from 'react'
import { CardContainer, TextContainer, IconCont } from './styled'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';

import { useHistory } from "react-router-dom";
import { goToViewClass } from '../../routes/coordinator';

const ClassesCard = (props) => {
 
    const [checkinButton, setCheckinButton] = useState(false);
    const history = useHistory()

    const handleCheckin = (classId) => {
        // const planId = states.currentUser.plans[0].id

        // if (window.confirm(`Vocẽ deseja ${checkinButton ? "cancelar" : "fazer"} este checkin ?`)) {
        //     if (checkinButton) {
              
        //         setters.setNewRender(!states.newRender)
        //     } else {
               
        //         setters.setNewRender(!states.newRender)
        //     }
        //     setCheckinButton(!checkinButton)
        // }
    }

    useEffect(() => {
       
    }, [])

    return (
        <CardContainer onClick={ () => goToViewClass(history, props.id) } >
            {/* {!states.admin &&
                <IconCont onClick={() => handleCheckin(props.id)} >
                    {
                        checkinButton ?
                            <CancelIcon style={{ color: "red" }} />
                            :
                            <BookmarkIcon style={{ color: "green" }} />
                    }
                </IconCont>
            } */}

            <TextContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }} > {props.day} - {props.time}</Typography>
                <Typography> {props.teacher} - {props.name}  </Typography>
            </TextContainer>
        </CardContainer>
    )
}

export default ClassesCard
