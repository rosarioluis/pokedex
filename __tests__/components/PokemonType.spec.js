import React from 'react';
import { render } from '@testing-library/react-native';
import {PokemonType} from '../../src/components/PokemonType/PokemonType'
describe('PokemonType Test', () => {
    it('renders type name correctly', () => {
        const name = 'grass';
        const { getByText } = render(<PokemonType name={name}/>);
        const typeText = getByText(name);
        expect(typeText).toBeTruthy();
    });
});