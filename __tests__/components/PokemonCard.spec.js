import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {PokemonCard} from '../../src/components/PokemonCard/PokemonCard'
import { useNavigation } from '@react-navigation/native';
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
describe('PokemonCard Test', () => {
    const data = require('../pokemons.json')
    const item = data[0];
    const renderPokemonCard=()=>{
        return render(<PokemonCard item={item}/>)
    }
    it('renders pokemon info correctly', () => {
        const { getByText } =renderPokemonCard();
        const nameText = getByText(item.name);
        expect(nameText).toBeTruthy();
        const idText = getByText(`#${(item.id.toString()).padStart(3, "0")}`);
        expect(idText).toBeTruthy();    
    });
    it('renders pokemon image correctly', () => {
        const { getByTestId } =renderPokemonCard();
        const pokemonImage = getByTestId('pokemonImage');
        expect(pokemonImage.props.source.uri).toBe(item.sprites.other["official-artwork"].front_default);
    });
    it('renders pokemon types correctly', () => {
        const { getByTestId } =renderPokemonCard();
        item.types.forEach((type) => {
            const itemType = getByTestId(`type-${type.type.name}`);
            expect(itemType).toBeTruthy();
        });
    });
    it('navigate to Details screen correctly', () => {
        const { getByTestId } =renderPokemonCard();
        const cardBtn = getByTestId(`pokemonCard-${item.id}`);
        fireEvent.press(cardBtn);
        expect(navigation.navigate).toHaveBeenCalledWith('Details', {item});
    });
});