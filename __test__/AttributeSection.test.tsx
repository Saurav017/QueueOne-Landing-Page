import { render, screen } from "@testing-library/react";
import AttributeSection from "../components/AttributeSection/AttributeSection";

describe("index.tsx", () => {
  it("should render same text as", () => {
    render(<AttributeSection />);
    screen.debug(undefined, 50000);
    expect(
      screen.getByText("Reduce queues and manage customer engagement")
    ).toBeInTheDocument();
  });
});
