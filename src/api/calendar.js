import { generateId } from "../services/generateId"
import { addOneWeek, formatDate } from "../services/moment"
import { calendarCol, database } from "./config"
import { createItem } from "."
import { collection, getDocs, query, where } from "firebase/firestore/lite"

export const createClasses = async (values) => {
    try {
        let crescentDate = formatDate(values.date, "DD/MM/YYYY")
        let list = []
        const groupId = generateId()
    
        for (let weeks = 0; weeks < 3; weeks++) {
            const yogaClass = {
                ...values,
                date: crescentDate,
                capacity: 8,
                groupId
            }
            crescentDate = addOneWeek(crescentDate)
            list.push(yogaClass)
        }
    
        const promises = list.map(async (item)=> await createItem(calendarCol,item ))
        await Promise.all(promises);
     
    } catch (err) {
        console.log(err.message)
    }
   
}


export const findClassesByPeriod = async (dates) => {
    const col = collection (database, calendarCol);
    const q = query(col, where("date", "in", dates));
    const snap = await getDocs(q);
    const result = snap.docs.map(doc => {return {...doc.data(), id: doc.id}} )
    return result;
};
