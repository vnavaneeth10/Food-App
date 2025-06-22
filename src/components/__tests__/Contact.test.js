import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { screen, configure } from "@testing-library/react";

describe("COntact us page Test cases", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  test("Should load Contact page component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact  component", () => {
    render(<Contact />);

    //Querying
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
