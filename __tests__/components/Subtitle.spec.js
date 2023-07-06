import React from 'react';
import { render } from '@testing-library/react-native';
import {Subtitle} from '../../src/components/Global/Subtitle'
describe('Subtitle Test', () => {
    it('renders subtitle correctly', () => {
        const subtitle = 'Abilities'
        const { getByText } = render(<Subtitle>{subtitle}</Subtitle>);
        const subtitleText = getByText(subtitle);
        expect(subtitleText).toBeTruthy();
    });
});