import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "../components/NavBar"; // adjust path as needed

describe("Navbar component", () => {
  it("shows dropdown items when Services is clicked (desktop)", async () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Click the 'Services' button
    const servicesButton = screen.getByRole("button", { name: /services/i });
    fireEvent.click(servicesButton);

    // Now check for one of the dropdown items
    const dropdownItem = await screen.findByText("Wheel Laser Alignment");
    expect(dropdownItem).toBeInTheDocument();
  });
});
