import { render, screen } from "@testing-library/react"
import ContractDetails from "../../components/ContractDetails"
import { contractMock, contractWithNoEndMock } from "../mocks/dataMock"


describe("ContractDetails tests", ()=>{
    test("Render Component",()=>{
        render(<ContractDetails/>)
        const header = screen.getByText(/informações do plano/i)
        const name = screen.getByText(/nome:/i)
        const plan = screen.getByText(/plano:/i)
        const starts =screen.getByText(/início:/i)
        expect(header).toBeInTheDocument() 
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