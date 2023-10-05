import { useContext, useEffect, useState } from "react";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { CartContext } from "../context/CartContext";
import { Button } from "reactstrap";
import Icon from "../components/Icon";

const Products = () => {
    const { API_URL } = useContext(CartContext)
    const [sectionSwitch, setSelectionSwitch] = useState('merch')
    const toggle = (e) => { setSelectionSwitch(e.target.name) }
    const { getData: getBean, data: bean, error: beanError, loading: beanLoading } = useDataFetcher();
    const { getData: getMerch, data: merch, error: merchError, loading: merchLoading } = useDataFetcher();

    useEffect(() => {
        getMerch(`${API_URL}merch`)
        getBean(`${API_URL}bean`)
    }, []);

    const mappedbeanItems = bean.map((product) => {
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
                <img id="welcomeImg" src="" />
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