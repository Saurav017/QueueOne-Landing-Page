import { render, screen } from "@testing-library/react";
import CTASection from "../components/CTASection/CTASection";

describe("index.tsx", () => {
  it("should render same text as", () => {
    render(<CTASection />);
    screen.debug(undefined, 50000);
    expect(
      screen.getByText("Create a free Queue One account now!")
    ).toBeInTheDocument();
  });
});
