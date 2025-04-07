import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; // adjust if your path is different
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders company title', () => {
    expect(screen.getByText(/TruckRepair Logistics/i)).toBeInTheDocument();
  });

  it('renders quick link headings', () => {
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('renders contact info', () => {
    expect(screen.getByText(/1250 Logistics Drive/i)).toBeInTheDocument();
    expect(screen.getByText(/1-800-TRUCK-HELP/i)).toBeInTheDocument();
    expect(screen.getByText(/info@truckrepairlogistics.com/i)).toBeInTheDocument();
  });

  it('renders the emergency button', () => {
    const emergencyButton = screen.getByRole('link', {
      name: /24\/7 Emergency Response/i
    });
    expect(emergencyButton).toBeInTheDocument();
    expect(emergencyButton).toHaveAttribute('href', '#emergency');
  });

  it('renders footer year correctly', () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}`, 'i'))).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    expect(screen.getByLabelText(/Facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
  });

  it('renders quick link texts', () => {
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });
});
