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
  
   
  });
});
