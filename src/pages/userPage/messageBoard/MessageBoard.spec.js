import { render, screen } from '@testing-library/react';
import { MessageBoard } from "./MessageBoard"

const mockData = jest.fn()

jest.mock("../../../hooks/useRequestData", () => ({
    useRequestData: () => mockData()
}));

describe('MessageBoard component', () => {
    test('Renders message', () => {
        mockData.mockReturnValueOnce({ data: { content: 'Test message' }, loading:false })
        render(<MessageBoard />);
        const loadingSpinner = screen.queryByRole('progressbar');
        expect(loadingSpinner).toBeNull();

        const textElement = screen.getByText('Test message');
        expect(textElement).toBeInTheDocument();
    });

    test('Renders empty message', () => {
        mockData.mockReturnValueOnce({ data: { content: '' }, loading:false })
        render(<MessageBoard />);
        const loadingSpinner = screen.queryByRole('progressbar');
        expect(loadingSpinner).toBeNull();

        const textElement = screen.getByText('Grupo WhatsApp');
        expect(textElement).toBeInTheDocument();
    });

    test('Renders Loading', () => { 
        mockData.mockReturnValueOnce({ data: { content: '' }, loading:true })
        render(<MessageBoard />);
        const loadingSpinner = screen.queryByRole('progressbar');
        expect(loadingSpinner).toBeInTheDocument();
    });

});