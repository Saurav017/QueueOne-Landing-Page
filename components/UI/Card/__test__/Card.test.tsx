import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { FaChrome } from "react-icons/fa";

describe("index.tsx", () => {
  it("should render same text as props", () => {
    render(
        <Card 
            logo={<FaChrome />}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    );
    screen.debug(undefined, 50000);
    expect(screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBeInTheDocument();
  });
});
