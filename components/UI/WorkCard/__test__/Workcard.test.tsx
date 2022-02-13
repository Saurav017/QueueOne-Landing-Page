import { render, screen } from "@testing-library/react";
import WorkCard from '../WorkCard'
import {FaChrome} from 'react-icons/fa'

describe("index.tsx", () => {
  it("should render same text as props", () => {
    render(
      <WorkCard
        icon={<FaChrome />}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      );
      
    screen.debug(undefined, 50000);
    expect(
      screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    ).toBeInTheDocument();
  });
});
