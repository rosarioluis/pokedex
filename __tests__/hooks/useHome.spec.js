import { renderHook, act } from "@testing-library/react-hooks";
import useHome from '../../src/hooks/useHome';
import * as api from '../../src/utils/api';
import axios from "axios";
jest.mock('axios');

describe("useHome test hook", () => {
    beforeEach(() => {
        (axios.get).mockClear()
    });
    const pokemons = require('../pokemons.json')
    it("should fetch pokemons and set state", async () => {
        axios.get.mockResolvedValue({ data: { results: pokemons } });
        jest.spyOn(api, 'getPokemons').mockResolvedValue({ details: pokemons, next: 'http://nexturl.com' });
        const { result, waitForNextUpdate } = renderHook(() => useHome());
        expect(result.current.pokemons).toEqual([]);
        expect(result.current.isLoading).toEqual(true);
        expect(result.current.nextUrl).toEqual('');
        await act(async () => {
            await waitForNextUpdate();
        });
        expect(result.current.pokemons).toEqual(pokemons);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.nextUrl).toEqual('http://nexturl.com');
    })
    it("catch error after throws an exception", async () => {
        axios.get.mockResolvedValue((new Error('ups')));
        jest.spyOn(api, 'getPokemons').mockResolvedValue({ details: [], next: '' });
        const { result, waitForNextUpdate } = renderHook(() => useHome());
        expect(result.current.pokemons).toEqual([]);
        expect(result.current.isLoading).toEqual(true);
        expect(result.current.nextUrl).toEqual('');
        await act(async () => {
            await waitForNextUpdate();
        });
        expect(result.current.pokemons).toEqual([]);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.nextUrl).toEqual('');
    });
})