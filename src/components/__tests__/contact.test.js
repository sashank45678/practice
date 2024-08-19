import Contact from "../contactus";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
describe("testing the contact us component",()=>{
  test("should load contact us component", () => {
    render(<Contact />); 
    const heading = screen.getByRole("heading"); 
    expect(heading).toBeInTheDocument(); 
  });
  
  test("should load button inside Contact Component", () => {
      render(<Contact />); 
      const button = screen.getByRole("button"); 
      expect(button).toBeInTheDocument(); 
    });
    test("should input name inside Contact Component", () => {
      render(<Contact />); 
      const button = screen.getByPlaceholderText("name"); 
      expect(button).toBeInTheDocument(); 
    });
    test("should load 2 input boxes on the contact component",  async() => {
      render(<Contact />);
      const inputBoxes = await screen.findAllByRole("textbox");
      expect(inputBoxes.length).toBe(2);
    });
})
