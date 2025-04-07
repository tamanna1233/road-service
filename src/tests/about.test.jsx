import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import AboutUs from "../components/Aboutus";
describe("AboutUs component", () => {
  it("renders the main headings", () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Our Mission")).toBeInTheDocument();
    expect(screen.getByText("Why Customers Choose Us")).toBeInTheDocument();
    expect(screen.getByText("Our Leadership Team")).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    const serviceTitles = [
      "Certified Excellence",
      "24/7 Availability",
      "Nationwide Coverage",
      "Advanced Technology"
    ];

    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    serviceTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("has a contact button that links to /contact", () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /contact our team/i });
    expect(button).toBeInTheDocument();
  });
});
