import { Heading, Button } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { WrapContainer } from "../../../theme";
import  DayColumn  from "./DayColumn";
import { useAgendaLogic } from "./useAgendaLogic";

export const Agenda = ( ) => {
    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const {yogaClasses,datesOfWeek, handleNextWeekClick, handlePreviousWeekClick } = useAgendaLogic()
    const router = useRouter()

    const list = daysOfWeek.map((day, i) => {
        const classes = yogaClasses?.length && yogaClasses.filter(a => a.day === day)
        return (
            <DayColumn
                key={day}
                date={datesOfWeek[i]}
                yogaClasses={classes}
                day={day}    
                router={router}        
            />
        )
    })

    return (
        <>
            <WrapContainer>
                <Button backgroundColor={"brand.200"} onClick={handlePreviousWeekClick}>Anterior</Button>
                <Heading >Agenda semanal</Heading>
                <Button backgroundColor={"brand.200"} onClick={handleNextWeekClick}>Próxima</Button>
            </WrapContainer>

            <WrapContainer>
                {list}
            </WrapContainer>
        </>
    );
}



