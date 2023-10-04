// import { render, fireEvent, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import toastAlert from "../../components/toastAlert";
// import {RequestInput} from "../../components/RequestInput"


// jest.mock("../../api", ()=> {})
// jest.mock("../../components/toastAlert");
// jest.mock("@chakra-ui/react", () => ({
//   ...jest.requireActual("@chakra-ui/react"),
//   useToast: jest.fn(),
// }));




// describe("RequestInput Tests", () => {
//   test("Controlled input", async () => {
//     const mockToastAlert = toastAlert;
//      render(
//       <RequestInput placeholder="Test Placeholder" itemCol="testItemCol" setLoading={jest.fn()} />
//     );

//     const inputElement = screen.getByPlaceholderText("Test Placeholder");

//     fireEvent.change(inputElement, { target: { value: "Test Item" } });
//     expect(inputElement.value).toBe("Test Item");
//     expect(mockToastAlert).not.toHaveBeenCalled();

//   });

  
// });
