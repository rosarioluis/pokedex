import React from 'react';
import { render } from '@testing-library/react-native';
import {Info} from '../../src/components/Info/Info'
describe('Info Test', () => {
    it('renders information correctly', () => {
        const title = 'Height';
        const value = '22 in'
        const { getByText } = render(<Info title={title} value={value}/>);
        const titleText = getByText(title);
        expect(titleText).toBeTruthy();
        const valueText = getByText(value);
        expect(valueText).toBeTruthy();
    });
});