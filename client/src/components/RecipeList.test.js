import React from 'react';
import ReactDOM from 'react-dom';
import { add } from './RecipeList';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

describe("<RecipeList />", () => {

    describe('add()', () => {
        it('should add two numbers together', () => {
            expect(add(4,7)).toBe(11);
        })
    })

})