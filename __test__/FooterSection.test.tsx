import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

describe("index.tsx", () => {
  it("should render same text as", () => {
    render(<Footer />);
    screen.debug(undefined, 50000);
    expect(
      screen.getByText("Queue One")
    ).toBeInTheDocument();
  });
});
