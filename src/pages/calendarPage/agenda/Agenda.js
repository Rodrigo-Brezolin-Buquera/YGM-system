import { Heading, Button } from "@chakra-ui/react"
import { WrapContainer } from "../../../theme";
import  DayColumn  from "./DayColumn";
import { useAgendaLogic } from "./useAgendaLogic";
import { useNavigate } from "react-router-dom";


export const Agenda = () => {
    const daysOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const {yogaClasses,datesOfWeek, handleNextWeekClick, handlePreviousWeekClick } = useAgendaLogic()
    const router = useNavigate()

    const list = daysOfWeek.map((day, i) => {
        const classes = yogaClasses?.length && yogaClasses.filter(a => a.day === day)
        return (
            <DayColumn
                key={day}
                date={datesOfWeek[i+1]}
                yogaClasses={classes}
                day={day}    
                router={router}        
            />
        )
    })

    return (
        <>
            <WrapContainer >
                <Button backgroundColor={"brand.200"} onClick={handlePreviousWeekClick}>Anterior</Button>
                <Heading >Agenda semanal</Heading>
                <Button backgroundColor={"brand.200"} onClick={handleNextWeekClick}>Próxima</Button>
            </WrapContainer>
           
            <WrapContainer shadow={true}>
                {list}
            </WrapContainer>
        </>
    );
}



