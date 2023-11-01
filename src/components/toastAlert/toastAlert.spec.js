import { useToast } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import toastAlert from "./index";

jest.mock("@chakra-ui/toast", () => {
    const original = jest.requireActual("@chakra-ui/toast");
    return {
        ...original,
        useToast: jest.fn(),
    };
});

describe("toastAlert Function", () => {
    it("renders toast with success type", () => {
        const mockUseToast = useToast;
        const mockToast = jest.fn();

        mockUseToast.mockReturnValue(mockToast);

        toastAlert(mockToast, "Success message", "success");
        expect(mockToast).toHaveBeenCalledWith({
            position: "top-left",
            render: expect.any(Function),
        });

        render(<div>{mockToast.mock.calls[0][0].render()}</div>);
        const message = screen.getByText("Success message");

        expect(message).toBeInTheDocument();
    });

    it("renders toast with error type", () => {
        const mockUseToast = useToast;
        const mockToast = jest.fn();
        mockUseToast.mockReturnValue(mockToast);
        toastAlert(mockToast, "Error message", "error");

        expect(mockToast).toHaveBeenCalledWith({
            position: "top-left",
            render: expect.any(Function),
        });

        render(<div>{mockToast.mock.calls[0][0].render()}</div>);
        const message = screen.getByText("Error message");

        expect(message).toBeInTheDocument();

    });


});