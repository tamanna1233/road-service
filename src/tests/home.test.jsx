import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home"; // adjust the path if needed
import '@testing-library/jest-dom';

describe("Home component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  it("renders the main heading", () => {
    const heading = screen.getByRole("heading", {
      name: /professional truck repair & road services/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the emergency service button", () => {
    const emergencyButton = screen.getByRole("link", {
      name: /emergency service/i,
    });
    expect(emergencyButton).toBeInTheDocument();
    expect(emergencyButton).toHaveAttribute("href", "/contact");
  });

  it("renders the services link", () => {
    const servicesLink = screen.getByRole("link", {
      name: /our services/i,
    });
    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink).toHaveAttribute("href", "/services");
  });

  it("renders the 24/7 availability notice", () => {
    const notice = screen.getByText(/available 24\/7 for emergency roadside assistance/i);
    expect(notice).toBeInTheDocument();
  });

  it("renders the truck image with correct alt text", () => {
    const truckImage = screen.getByAltText(/moving truck/i);
    expect(truckImage).toBeInTheDocument();
  });
});
