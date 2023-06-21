import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import NotFound from "@/src/components/Community/NotFound";

describe("CommunityNotFound", () => {
  test("renders error message and button", () => {
    render(<NotFound />);
    
    // Assert that the error message is rendered
    const errorMessage = screen.getByText(
      /Sorry, that community does not exist or has been banned/i
    );
    expect(errorMessage).toBeInTheDocument();

    // Assert that the "GO HOME" button is rendered
    const goHomeButton = screen.getByRole("button", { name: /GO HOME/i });
    expect(goHomeButton).toBeInTheDocument();
  });
});
