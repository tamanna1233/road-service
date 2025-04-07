import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('renders contact section with heading', () => {
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Need assistance with your fleet/i)).toBeInTheDocument();
  });

  test('renders contact form fields', () => {
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Message/i)).toBeInTheDocument();
  });

  test('allows user to type in form fields', () => {
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/Your Email/i);
    const messageTextarea = screen.getByPlaceholderText(/Your Message/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Need support ASAP!' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageTextarea.value).toBe('Need support ASAP!');
  });

  test('renders emergency support phone number', () => {
    expect(screen.getByText(/1-800-1000/i)).toBeInTheDocument();
    expect(screen.getByText(/24\/7 Emergency Support/i)).toBeInTheDocument();
  });

  test('renders Google map iframe and link', () => {
    const map = screen.getByTitle('HeadQuaters Map');
    const mapLink = screen.getByRole('link', { name: /Get Directions/i });

    expect(map).toBeInTheDocument();
    expect(mapLink).toHaveAttribute('href', expect.stringContaining('google.com/maps'));
  });

  test('has a send message button', () => {
    const button = screen.getByRole('button', { name: /Send Message/i });
    expect(button).toBeInTheDocument();
  });
});
