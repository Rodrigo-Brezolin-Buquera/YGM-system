import confirmDialog from "../../components/confirmDialog";
import { confirmAlert } from "react-confirm-alert";

jest.mock("react-confirm-alert", () => ({
    confirmAlert: jest.fn(),
}));

describe("confirmDialog function", () => {
    test("Render with message", () => {
        const mockHandler = jest.fn();
        const mockConfirmAlert = confirmAlert;

        confirmDialog("Test message", mockHandler);

        expect(mockConfirmAlert).toHaveBeenCalledWith({
            title: "Test message",
            buttons: expect.any(Array),
        });
    })

    test("Calls handler function on click", async () => {
        const mockHandler = jest.fn();
        const mockConfirmAlert = confirmAlert;

        mockConfirmAlert.mockImplementation(({ buttons }) => {
            buttons[0].onClick();
            return {
                buttons,
            };
        });

        confirmDialog("Test message", mockHandler);

        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
});
