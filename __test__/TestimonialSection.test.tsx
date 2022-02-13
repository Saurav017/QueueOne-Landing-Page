import { render, screen } from "@testing-library/react";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";

describe("index.tsx", () => {
  it("should render same text as", () => {
    render(<TestimonialSection />);
    screen.debug(undefined, 50000);
    expect(
      screen.getByText("What our Client say about us?")
    ).toBeInTheDocument();
  });
});
