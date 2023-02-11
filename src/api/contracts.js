import { calculateEndDate, formatDate } from "../services/moment"
import { contractsCol } from "./config"
import { createItem } from "."

export const createContract = async ({ name, plan, date }, id) => {

    const contract = {
        name,
        closedContracts: [],
        currentContract: {
            active: true,
            plan,
            ends: calculateEndDate(date, table[plan].duration),
            started: formatDate(date),
            availableClasses: table[plan].quantity
        }
    }

    await createItem(contractsCol, contract, id)
}

const table = {
    "1x-Mensal": {duration:1 , quantity: 4},
    "2x-Mensal": {duration:1 , quantity: 8},
    "1x-Trimestral": {duration:3 , quantity: 12},
    "2x-Trimestral": {duration:3 , quantity: 24},
    "1x-Semestral": {duration:6 , quantity: 24},
    "2x-Semestral": {duration:6 , quantity: 48},
    "---Gympass":{duration: 0, quantity: 0},
}

