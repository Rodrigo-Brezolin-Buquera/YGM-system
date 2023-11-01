import { render, screen } from "@testing-library/react"
import ContractDetails from "./index"

const contractWithNoEndMock = {
    availableClasses: null,
    ends: null,
    id: "id",
    name: "Louize S baya",
    plan: "Gympass",
    started: "17/06/2023"
}

const contractMock = {
    availableClasses: 2,
    ends: "17/03/2023",
    id: "id",
    name: "Louize S baya",
    plan: "1x-Trimestral",
    started: "17/06/2023"
}

describe("ContractDetails tests", ()=>{
    test("Render Component",()=>{
        render(<ContractDetails/>)
        const name = screen.getByText(/nome:/i)
        const plan = screen.getByText(/plano:/i)
        const starts =screen.getByText(/início:/i)
        expect(name).toBeInTheDocument()  
        expect(plan).toBeInTheDocument()  
        expect(starts).toBeInTheDocument()  
    })

    test("Render full contract",()=>{
        render(<ContractDetails contract={contractMock}/>)
        const name = screen.getByText(/louize s baya/i)
        const plan = screen.getByText(/1x\-trimestral/i)
        const starts = screen.getByText(/17\/06\/2023/i)
        const ends = screen.getByText(/17\/03\/2023/i)
        const classes = screen.getByText("2")
        expect(name).toBeInTheDocument()  
        expect(plan).toBeInTheDocument()  
        expect(starts).toBeInTheDocument()  
        expect(ends).toBeInTheDocument()  
        expect(classes).toBeInTheDocument()  
    })

    test("Render partial contract",()=>{
        render(<ContractDetails contract={contractWithNoEndMock}/>)
        const name = screen.getByText(/louize s baya/i)
        const plan = screen.getByText(/Gympass/i)
        const starts = screen.getByText(/17\/06\/2023/i)
        const ends = screen.queryByText(/fim previsto:/i)
        const classes = screen.queryByText(/aulas disponíveis:/i)
        expect(name).toBeInTheDocument()  
        expect(plan).toBeInTheDocument()  
        expect(starts).toBeInTheDocument()  
        expect(ends).not.toBeInTheDocument()  
        expect(classes).not.toBeInTheDocument()  
    })


})