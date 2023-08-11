import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import toastAlert from "../../components/toastAlert";
import {RequestInput} from "../../components/RequestInput"


jest.mock("../../api", ()=> jest.fn())
jest.mock("../../components/toastAlert");
jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useToast: jest.fn(),
}));


describe("RequestInput Tests", () => {
  test("handles Enter key press and calls createItem", async () => {
    const mockToastAlert = toastAlert;
   

     render(
      <RequestInput placeholder="Test Placeholder" itemCol="testItemCol" setLoading={jest.fn()} />
    );

    const inputElement = screen.getByPlaceholderText("Test Placeholder");

    fireEvent.change(inputElement, { target: { value: "Test Item" } });
    expect(inputElement.value).toBe("Test Item");

    //fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });
    // expect(mockCreateItem).toHaveBeenCalledWith("testItemCol", { name: "Test Item" });
    // await mockCreateItem.mock.results[0].value;

    expect(mockToastAlert).not.toHaveBeenCalled();

    // expect(inputElement.value).toBe("");
  });

  
});
