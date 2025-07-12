import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';

describe("contact us page test cases",()=>{
    test("should load contact us component", ()=>{
        render(<Contact/>)
        const heading= screen.getByRole("heading");
        expect(heading).toBeInTheDocument()
    })

    test("should load  button inside the contact us component", ()=>{
        render(<Contact/>)
        const button= screen.getByText("Submit");
        expect(button).toBeInTheDocument()
    })
    describe("input test cases",()=>{
        test("should load input inside the contact us component", ()=>{
            render(<Contact/>)
            const input= screen.getByPlaceholderText("name");
            expect(input).toBeInTheDocument()
        });

        it("should load two input boxes inside the contact us component", ()=>{
            render(<Contact/>)
            const input= screen.getAllByRole("textbox")
            expect(input.length).toEqual(2)
        })
    })
    
})
