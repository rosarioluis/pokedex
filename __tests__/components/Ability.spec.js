import React from 'react';
import { render } from '@testing-library/react-native';
import { Ability } from '../../src/components/Ability/Ability'

describe('Ability Test', () => {
    const data = require('../pokemons.json')
    it('renders ability item correctly', () => {
        const { getByText } = render(<Ability item={data[0].abilities[0]} />);
        const abilityText = getByText(data[0].abilities[0].ability.name);
        expect(abilityText).toBeTruthy();
    });
});