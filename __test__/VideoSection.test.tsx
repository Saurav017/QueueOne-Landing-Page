import { render, screen } from "@testing-library/react";
import VideoSection from "../components/VideoSection/VideoSection";

describe("index.tsx", () => {
  it("should render same text as", () => {
    render(<VideoSection />);
    screen.debug(undefined, 50000);
    expect(
      screen.getByTestId("")
    ).toBeInTheDocument();
  });
});
