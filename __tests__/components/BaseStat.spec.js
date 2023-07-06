import React from 'react';
import { render } from '@testing-library/react-native';
import { BaseStat } from '../../src/components/BaseStat/BaseStat'

describe('BaseStat Test', () => {
    const data = require('../pokemons.json')
    const stat = data[0].stats[0]
    it('renders info correctly', () => {
        const { getByTestId } = render(<BaseStat stat={stat} />);
        const statInfo = getByTestId('statInfo');
        expect(statInfo).toBeTruthy();
        expect(statInfo.props.children.join('')).toBe(`${stat.stat.name} - ${stat.base_stat}`)
    });
});