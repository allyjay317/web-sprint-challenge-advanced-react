import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

const findAndType = (container, testid, text) =>{
    const component = container.getByTestId(testid)
    fireEvent.change(component, {target: {name: component.name, value: text}})
    return component
}

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const rCheckoutForm = render(<CheckoutForm />)
    rCheckoutForm.getByText(/Checkout Form/)
});

test("form shows success message on submit with form details", () => {
    const rCheckoutForm = render(<CheckoutForm />)
    const fNameField = findAndType(rCheckoutForm, 'fName', 'Allison')
    const lNameField = findAndType(rCheckoutForm, 'lName', 'Usher')
    const addressField = findAndType(rCheckoutForm, 'address', '123 Fake St')
    const cityField = findAndType(rCheckoutForm, 'city', 'Springfield')
    const stateField = findAndType(rCheckoutForm, 'state', 'UD')
    const zipField = findAndType(rCheckoutForm, 'zip', '98765')
    fireEvent.click(rCheckoutForm.getByTestId('submit'))

    const success = rCheckoutForm.getByTestId('successMessage')
    
});
