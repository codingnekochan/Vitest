import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from '../src/App'
import userEvent from "@testing-library/user-event";

describe('App component', () => {
 it ('renders correct heading', ()=>{
    const {container} = render(<App/>)
    expect(container).toMatchSnapshot()
 })
 it ('renders radical dolphins after button click', async () => {
    const user = userEvent.setup();
    render(<App/>)
    const button = screen.getByRole('button',{name : 'Click Me'})
    await user.click(button)
    expect (screen.getByRole('heading').textContent).toMatch(/radical dolphins/i)
 })
})
// describe("App component", () => {
//     it("renders magnificent monkeys", () => {
//         // since screen does not have the container property, we'll destructure render to obtain a container for this test
//         const { container } = render(<App />);
//         expect(container).toMatchSnapshot();
//     });

//     it("renders radical rhinos after button click", async () => {
//         const user = userEvent.setup();

//         render(<App />);
//         const button = screen.getByRole("button", { name: "Click Me" });

//         await user.click(button);

//         expect(screen.getByRole("heading").textContent).toMatch(/radical dolphins/i);
//     });
// });