import { Button } from "reactstrap";
import Icon from "./procucts/Icon";
import { beans, merch, mainImgs } from '../productData.js'


const MerchPage = () => {

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