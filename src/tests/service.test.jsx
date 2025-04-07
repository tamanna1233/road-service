import { render, screen } from "@testing-library/react";
import ServicesSection from "../components/Services";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe("ServicesSection component", () => {
  it("renders section heading", () => {
    render(<ServicesSection />, { wrapper: Wrapper });
    expect(screen.getByText("Our Services")).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<ServicesSection />, { wrapper: Wrapper });

    expect(screen.getByText("Wheel laser alignment")).toBeInTheDocument();
    expect(screen.getByText("New tires installation")).toBeInTheDocument();
    expect(screen.getByText("Towing services")).toBeInTheDocument();
  });

  it("has 'View All Services' link", () => {
    render(<ServicesSection />, { wrapper: Wrapper });

    const link = screen.getByRole("link", { name: /view all services/i });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/services");
  });
});
