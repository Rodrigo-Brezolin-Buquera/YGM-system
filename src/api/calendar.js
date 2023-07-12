import { collection, getDocs, query, where } from "firebase/firestore/lite"
import { addOneWeek, formatDate } from "../utils/dates"
import { calendarCol, database } from "./config"
import { createItem } from "."

export const createClasses = async (values, classLimit) => {
    let crescentDate = formatDate(values.date, "DD/MM/YYYY")
    let list = []
    const groupId = `${values.date}-${values.time}-${values.name}`
      
    for (let weeks = 0; weeks < 50; weeks++) {
        const yogaClass = {
            ...values,
            date: crescentDate,
            capacity: classLimit,
            groupId
        }
        crescentDate = addOneWeek(crescentDate)
        list.push(yogaClass)
    }
    
    const promises = list.map(async (item)=> await createItem(calendarCol,item ))
    await Promise.all(promises);
}


export const findClassesByPeriod = async (dates) => {
    const col = collection (database, calendarCol);
    const q = query(col, where("date", "in", dates));
    const snap = await getDocs(q);
    const result = snap.docs.map(doc => {return {...doc.data(), id: doc.id}} )
    return result;
};
