import { Button } from "reactstrap";
import Icon from "./procucts/Icon";
import { beans } from '../productData.js'
import { useDataFetcher } from "../hooks/useDataFetcher";
import { useContext, useEffect } from "react";
import { CartContext } from '../context/CartContext';


const BeanPage = () => {

    const { API_URL } = useContext(CartContext)

    const { getData: getBean, data: bean, error: beanError, loading: beanLoading } = useDataFetcher();

    useEffect(() => {
        getBean(`${API_URL}bean`)
    }, []);

    const mappedbeanItems = bean.map((product) => {
        return (
            <Icon product={product} />
        )
    })

    return (
        <div id="beanPage" onClick={console.log('clicked bean')}>
            <h1>Coffee Beans</h1>
            <div id="totalBeanContainer">
                {mappedbeanItems}
            </div>
        </div>
    );
}

export default BeanPage;