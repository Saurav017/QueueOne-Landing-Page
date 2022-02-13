import { render, screen } from '@testing-library/react';
import SectionHook from '../SectionHook';


describe("index.tsx", () => {
  it("should render same text as props", () => {
    render(
      <SectionHook
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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