import { render, screen } from "@testing-library/react";

import { InputDefault } from "./InputDefault";

describe("InputDefault", () => {
  it("should render the input", () => {
    render(<InputDefault name="name" label="Name" />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });
});
