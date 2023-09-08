import Icon from "./procucts/Icon";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { useContext, useEffect } from "react";
import { CartContext } from '../context/CartContext';

const MerchPage = () => {
    const { API_URL } = useContext(CartContext)

    const { getData: getMerch, data: merch, error: merchError, loading: merchLoading } = useDataFetcher();

    useEffect(() => {
        getMerch(`${API_URL}merch`)
    }, []);

    console.log(merch)

    const mappedMerchItems = merch.map((product) => {
        return (
            <Icon product={product} />
        )
    })
    return (
        <div id="merchPage" onClick={console.log('clicked merch')}>
            <h1>Stu's Styles</h1>
            <div id="totalMerchContainer">
                {mappedMerchItems}
            </div>
        </div>
    );
}

export default MerchPage;