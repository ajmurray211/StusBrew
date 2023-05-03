import { Button } from "reactstrap";
import Icon from "./procucts/Icon";
import { beans } from '../productData.js'


const BeanPage = () => {
    const mappedMerchItems = beans.map((product) => {
        return (
            <Icon product={product} />
        )
    })

    return (
        <div id="beanPage" onClick={console.log('clicked merch')}>
            <h1>Coffee Beans</h1>
            <div id="totalMerchContainer">
                {mappedMerchItems}
            </div>
        </div>
    );
}

export default BeanPage;