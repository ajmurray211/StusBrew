const Products = () => {
    return ( 
        <div>Products page</div>
     );
}
 
export default Products;


// import { Button } from "reactstrap";
// import Icon from "./Icon";
// import { beans } from '../productData.js'
// import { useDataFetcher } from "../hooks/useDataFetcher";
// import { useContext, useEffect } from "react";
// import { CartContext } from '../context/CartContext';


// const BeanPage = () => {

//     const { API_URL } = useContext(CartContext)

//     const { getData: getBean, data: bean, error: beanError, loading: beanLoading } = useDataFetcher();

//     useEffect(() => {
//         getBean(`${API_URL}bean`)
//     }, []);

//     const mappedbeanItems = bean.map((product) => {
//         return (
//             <Icon product={product} />
//         )
//     })

//     return (
//         <div id="beanPage" onClick={console.log('clicked bean')}>
//             <h1>Coffee Beans</h1>
//             <div id="totalBeanContainer">
//                 {mappedbeanItems}
//             </div>
//         </div>
//     );
// }

// export default BeanPage;

// import Icon from "./Icon";
// import { useDataFetcher } from "../hooks/useDataFetcher";
// import { useContext, useEffect } from "react";
// import { CartContext } from '../context/CartContext';

// const MerchPage = () => {
//     const { API_URL } = useContext(CartContext)

//     const { getData: getMerch, data: merch, error: merchError, loading: merchLoading } = useDataFetcher();

//     useEffect(() => {
//         getMerch(`${API_URL}merch`)
//     }, []);

//     console.log(merch)

//     const mappedMerchItems = merch.map((product) => {
//         return (
//             <Icon product={product} />
//         )
//     })
//     return (
//         <div id="merchPage" onClick={console.log('clicked merch')}>
//             <h1>Stu's Styles</h1>
//             <div id="totalMerchContainer">
//                 {mappedMerchItems}
//             </div>
//         </div>
//     );
// }

// export default MerchPage;