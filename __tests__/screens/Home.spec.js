import React from 'react';
import { render } from '@testing-library/react-native';
import { Home } from '../../src/screens/Home'
import useHome from '../../src/hooks/useHome';
import { useNavigation } from '@react-navigation/native';
jest.mock('../../src/hooks/useHome');
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
}));
const navigation = {
    navigate: jest.fn()
};
afterEach(() => {
    useNavigation.mockReset();
});
beforeEach(() => {
    useNavigation.mockReturnValue(navigation);
    jest.clearAllMocks();
});
describe('Home Test', () => {
    const pokemons = require('../pokemons.json')
    it('renders pokemons list correctly', () => {
        (useHome).mockImplementation(() => ({
            pokemons: pokemons,
            loadMore: jest.fn(),
            renderFooter: jest.fn()
        }))
        const { getByTestId } = render(<Home />);
        const pokemonsList = getByTestId('pokemonsList');
        expect(pokemonsList).toBeTruthy();
        pokemons.forEach((pokemon) => {
            const cardBtn = getByTestId(`pokemonCard-${pokemon.id}`);
            expect(cardBtn).toBeTruthy();
        });
    });
});