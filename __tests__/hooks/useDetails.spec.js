import { renderHook, act } from "@testing-library/react-hooks";
import useDetails from '../../src/hooks/useDetails';
import * as api from '../../src/utils/api';
import axios from "axios";
jest.mock('axios');

describe("useDetails test hook", () => {
    beforeEach(() => {
        (axios.get).mockClear()
    });
    it("should fetch details and set state", async () => {
        axios.get.mockResolvedValue({ data: { color: {name:'blue'} } });
        jest.spyOn(api, 'getSpecies').mockResolvedValue({ color: 'blue' });
        const { result, waitForNextUpdate } = renderHook(() => useDetails());
        expect(result.current.loading).toEqual(true);
        expect(result.current.color).toEqual('');
        await act(async () => {
            await waitForNextUpdate();
        });
        expect(result.current.loading).toEqual(false);
        expect(result.current.color).toEqual('blue');
    });
    it("catch error after throws an exception", async () => {
        axios.get.mockResolvedValue((new Error('ups')));
        jest.spyOn(api, 'getSpecies').mockResolvedValue({ color: 'blue' });
        const { result, waitForNextUpdate } = renderHook(() => useDetails());
        expect(result.current.loading).toEqual(true);
        expect(result.current.color).toEqual('');
        await act(async () => {
            await waitForNextUpdate();
        });
        expect(result.current.loading).toEqual(false);
        expect(result.current.color).toEqual('blue');
    });
});