import Navbar from "@/src/components/Navbar/Navbar";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Navbar", () => {
  it("renders the logo", () => {
    render(<Navbar />);

    const logoImage = screen.getByAltText("edelveis logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<Navbar />);

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  // Add more tests for other parts of the Navbar component
});
