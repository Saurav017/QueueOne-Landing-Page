import { render, screen } from "@testing-library/react";
import TestimonialCard from '../TestimonialCard';

describe("index.tsx", () => {
  it("should render same text as props", () => {
    render(
      <TestimonialCard
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ownerName="John Doe"
            ownerPosition="CEO"
        />
    );

    screen.debug(undefined, 50000);
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      )
    ).toBeInTheDocument();
  });
});
