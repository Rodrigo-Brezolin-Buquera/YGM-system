import { render, screen } from '@testing-library/react';
import { WhatsappLink } from './WhatsappLink'; 

describe('WhatsappLink component', () => {
  test('Renders link', () => {
    render(<WhatsappLink />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://chat.whatsapp.com/JMHCFe5fo0O13fjJeGcvfG');
  });

  test('Renders image', () => {
    render(<WhatsappLink />);
    const imageElement = screen.getByAltText('Whatsapp');
    expect(imageElement).toBeInTheDocument();
  });


  test('Renders text', () => {
    render(<WhatsappLink />);
    const textElement = screen.getByText('Grupo WhatsApp');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle('font-weight: bold');
  });
});
