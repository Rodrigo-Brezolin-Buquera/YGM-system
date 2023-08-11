import { render, screen } from "@testing-library/react"
import { useRouter } from "next/router";
import HeaderAdmin from "../../components/HeaderAdmin"

jest.mock('next/router', () => ({
    useRouter: jest.fn()
  }))

  jest.mock("../../api/auth", ()=>{
      logout: jest.fn()
  });


 
  
//   useRouter.mockReturnValue({
//     query: {id: "id"},
//     pathname: pathname,
//     push: jest.fn(),
//     back: jest.fn()
//   })

const mockRouter = {
    push: jest.fn(),
  };

describe.skip("HeaderAdmin", ()=>{
    test("Render for web", ()=>{
        global.innerWidth = 1024;

     
          useRouter.mockReturnValue(mockRouter);


        render(<HeaderAdmin/>)
        screen.logTestingPlaygroundURL()

    })
})