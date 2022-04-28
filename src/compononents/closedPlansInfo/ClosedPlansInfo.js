import React, { useEffect, useState } from 'react'
import { ClosedPlansContainer, PlanCard } from './styled'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';


const ClosedPlansInfo = () => {
    
    const [closedPlans, setClosedPlans] = useState([])
    

    useEffect(() => {

    }, [])

    const closedPlansList = closedPlans.length && closedPlans.map((plan) => {
        return (
            <PlanCard key={plan.id}>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}> Plano: {plan.type} {plan.frequency} na semana </Typography>
                <Typography> Terminou em: {moment(plan.planEnds).format("DD/MM/YY")}</Typography>
            </PlanCard>
        )
    })
    return (
        <ClosedPlansContainer>
            <Typography variant="h6" > Planos encerrados: </Typography>
            {closedPlans.length ? closedPlansList : <p> Não há planos inativos </p>}

        </ClosedPlansContainer>
    )
}

export default ClosedPlansInfo
