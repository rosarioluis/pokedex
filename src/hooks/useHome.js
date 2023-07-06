import { useEffect, useState } from "react";
import { getPokemons } from "../utils/api";
import { Loading } from "../components/Global/Loading";
const useHome = () => {
    const [isLoading, setIsloading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const getData = async () => {
        setIsloading(true);
        const result = await getPokemons(nextUrl);
        setPokemons(prev => [...prev, ...result.details])
        setNextUrl(result.next)
        setIsloading(false);
    }
    const renderFooter = () => {
        if (!isLoading) return null;
        return <Loading />;
    };

    const loadMore = () => {
        if (!isLoading) {
            getData()
        }
    };
    useEffect(() => {
        getData();
    }, [])
    return {
        nextUrl,
        isLoading,
        pokemons,
        renderFooter,
        loadMore
    }
}
export default useHome;