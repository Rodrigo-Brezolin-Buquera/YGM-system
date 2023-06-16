import { plansCol } from "./config";
import { calculatePlanNumbers } from "./contracts";
import { createItemWithId } from ".";

export const createPlan = async ({frequency, duration, price}) => {
    const [durationInMonths, classesQuantity] = calculatePlanNumbers(frequency, duration)
    
    const plan =  durationInMonths ?
        {
            id: `${frequency}-${duration}`,
            price: `R$ ${price},00`,
            frequency: frequency,
            type: duration,
            availableClasses: classesQuantity,
            durationInMonths: durationInMonths
        }
        :
        {
            id: duration,
            type: duration     
        }
    
    createItemWithId(plansCol, plan, plan.id)
}


