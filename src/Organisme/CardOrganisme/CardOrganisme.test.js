import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardOrganisme from "./CardOrganisme";
import "@testing-library/jest-dom";

describe("CardOrganisme component", () => {
  it("renders the movie title and distributor", () => {
    const movie = {
      Title: "Toy Story 3",
      Distributor: "Walt Disney Pictures"
    };
    const { getByText } = render(<CardOrganisme movie={movie} />);
    expect(getByText("Toy Story 3")).toBeInTheDocument();
    expect(getByText("Walt Disney Pictures")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    const movie={Title:'movie',Distributor:'Distributor'}
    const { getByTestId } = render(
      <CardOrganisme movie={movie} onClick={handleClick} />
    );
    fireEvent.click(getByTestId("card"));
    expect(handleClick).toHaveBeenCalled();
  });
});
