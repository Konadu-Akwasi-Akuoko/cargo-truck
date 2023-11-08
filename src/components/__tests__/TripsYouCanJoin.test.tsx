import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TripsYouCanJoin } from "../TripsYouCanJoin";

describe("TripsYouCanJoin", () => {
  it("should render the trips you can join component", () => {
    render(<TripsYouCanJoin />);
    const destination = screen.getAllByText("Kumasi")[0];
    const peopleJoining = screen.getAllByText("18 people joining")[0];
    const departureTime = screen.getAllByText("2 days to departure")[0];
    // const spaceLeft = screen.getAllByText("13m³ space left");
    const basePrice = screen.getAllByText("GH₵80.00 base price")[0];

    expect(destination).toBeInTheDocument();
    expect(peopleJoining).toBeInTheDocument();
    expect(departureTime).toBeInTheDocument();
    // expect(spaceLeft).toBeInTheDocument();
    expect(basePrice).toBeInTheDocument();
  });
});
