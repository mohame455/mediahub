import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AtomButton from "./AtomButton";
import '@testing-library/jest-dom'

describe("AtomButton component", () => {
  it("renders with the correct text", () => {
    const buttonText = "Submit";
    const { getByText } = render(<AtomButton text={buttonText} />);
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<AtomButton onClick={handleClick} />);
    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when the disabled prop is true", () => {
    const { getByRole } = render(<AtomButton disabled />);
    expect(getByRole("button")).toBeDisabled();
  });

  it("applies the primary class when type is 'primary'", () => {
    const { getByRole } = render(<AtomButton type="primary" />);
    expect(getByRole("button")).toHaveClass("default-btn-primary");
  });

  it("applies the secondary class when type is 'secondary'", () => {
    const { getByRole } = render(<AtomButton type="secondary" />);
    expect(getByRole("button")).toHaveClass("default-btn-secondary");
  });
});
