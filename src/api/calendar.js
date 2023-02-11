import { generateId } from "../services/generateId"
import { formatDate } from "../services/moment"
import { yogaClassesCol } from "./config"
import { createItem } from "."

export const createClasses = async (values) => {
    try {
        let crescentDate = formatDate(values.date)
        let list = []
        const groupId = generateId()
    
        for (let weeks = 0; weeks < 50; weeks++) {
            const yogaClass = {
                ...values,
                date: crescentDate,
                capacity: 8,
                groupId
            }
            list.push(yogaClass)
        }
    
        const promises = list.map(async (item)=> await createItem(yogaClassesCol,item ))
        await Promise.all(promises);
     
    } catch (err) {
        console.log(err.message)
    }
   


 
}