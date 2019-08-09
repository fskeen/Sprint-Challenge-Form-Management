import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

describe("<SignUpForm />", () => {
    it("form renders", () => {
        const div = document.createElement("div");
        ReactDOM.render(<SignUpForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("button works", () => {
        const btn = getByTestId("submit")
        fireEvent.click(btn)
    })
})