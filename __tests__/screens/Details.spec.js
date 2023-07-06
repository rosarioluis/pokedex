import React from 'react';
import { render } from '@testing-library/react-native';
import { Details } from '../../src/screens/Details'
import useDetails from '../../src/hooks/useDetails';
jest.mock('../../src/hooks/useDetails');
beforeEach(() => {
    jest.clearAllMocks();
});
describe('Details Test', () => {
    const pokemons = require('../pokemons.json')
    const route={params:{item:pokemons[0]}}
    it('renders loading icon while is loading', () => {
        (useDetails).mockImplementation(() => ({
            loading: true,
            color: ''
        }))
        const { getByTestId } = render(<Details route={route}/>);
        const loadingIcon = getByTestId('loadingIcon');
        expect(loadingIcon).toBeTruthy();
    });
    it('renders pokemon image correctly', () => {
        (useDetails).mockImplementation(() => ({
            loading: false,
            color: ''
        }))
        const { getByTestId } = render(<Details route={route}/>);
        const pokemonImage = getByTestId('pokemonImage');
        expect(pokemonImage.props.source.uri).toBe(route.params.item.sprites.other["official-artwork"].front_default);
    });
    it('renders pokemon name correctly', () => {
        (useDetails).mockImplementation(() => ({
            loading: false,
            color: ''
        }))
        const { getByTestId } = render(<Details route={route}/>);
        const pokemonName = getByTestId('pokemonName');
        expect(pokemonName.props.children.join('')).toBe(`#${route.params.item.id} ${route.params.item.name}`);
    });
    it('renders pokemon types correctly', () => {
        (useDetails).mockImplementation(() => ({
            loading: false,
            color: ''
        }))
        const { getByTestId } = render(<Details route={route}/>);
        route.params.item.types.forEach((type) => {
            const itemType = getByTestId(`type-${type.type.name}`);
            expect(itemType).toBeTruthy();
        });
    });
    it('renders abilities list correctly', () => {
        (useDetails).mockImplementation(() => ({
            loading: false,
            color: ''
        }))
        const { getByTestId } = render(<Details route={route}/>);
        const abilitiesList = getByTestId('abilitiesList');
        expect(abilitiesList).toBeTruthy();
        route.params.item.abilities.forEach((ability) => {
            const abilityItem = getByTestId(`ability-${ability.slot}`);
            expect(abilityItem).toBeTruthy();
        });
    });
    it('renders base stat list correctly', () => {
        (useDetails).mockImplementation(() => ({
            loading: false,
            color: ''
        }))
        const { getByTestId } = render(<Details route={route}/>);
        route.params.item.stats.forEach((stat) => {
            const statItem = getByTestId(`stat-${stat.stat.name}`);
            expect(statItem).toBeTruthy();
        });
    });
});