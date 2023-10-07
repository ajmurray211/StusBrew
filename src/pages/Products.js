import { useContext, useEffect, useState } from "react";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { CartContext } from "../context/CartContext";
import { Button } from "reactstrap";
import Icon from "../components/Icon";
import { merch, beans } from '../data.js'
import stus_hat from '../Assets/Merch/stus_hat.png'

const Products = () => {
    const { API_URL } = useContext(CartContext)
    const [sectionSwitch, setSelectionSwitch] = useState('merch')
    const toggle = (e) => { setSelectionSwitch(e.target.name) }
    // const { getData: getBean, data: beans, error: beanError, loading: beanLoading } = useDataFetcher();
    // const { getData: getMerch, data: merch, error: merchError, loading: merchLoading } = useDataFetcher();

    useEffect(() => {
        // getMerch(`${API_URL}merch`)
        // getBean(`${API_URL}bean`)
    }, []);

    const mappedbeanItems = beans.map((product) => {
        return (
            <Icon product={product} />
        )
    })

    const mappedMerchItems = merch.map((product) => {
        return (
            <Icon product={product} />
        )
    })

    return (
        <div id="productsPage">
            <div id="productsWelcomeContainer">
                <div id="productsAccentDiv" />
                {/* <div className="title" id="productWelcomeMsg">
                    <p>Merch</p>
                    <p>&</p>
                    <p>Beans</p>
                </div> */}
                <img id="welcomeImg" src={stus_hat} />
            </div>
            <div id="productsSection">
                <div id="productSelectorContainer">
                    <Button name="merch" onClick={toggle}>Merch</Button>
                    <Button name="beans" onClick={toggle}>Beans</Button>
                </div>
                <div id="productsContainer">
                    {sectionSwitch == 'merch' ? mappedMerchItems : mappedbeanItems}
                </div>
            </div>
        </div>
    );
}

export default Products;