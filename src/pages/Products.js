import { useContext, useEffect, useState } from "react";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { CartContext } from "../context/CartContext";
import likedIcon from '../Assets/likedIcon.png'
import { useParams } from "react-router";
import FooterLinks from "../components/FooterLinks";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const Products = () => {
    const { catagory } = useParams()
    const { API_URL } = useContext(CartContext)
    const { getData, data, error, loading } = useDataFetcher();
    const [open, setOpen] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({})
    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id)
    };

    useEffect(() => {
        getData(`${API_URL}${catagory}`)
    }, [catagory]);

    const filterOptions = catagory == 'beans' ?
        [{ 'Sort By': ['Featured', 'Best Seller', 'Price: Low To High', 'Price: High To Low'] }, { 'Roast': ['light', 'medium', 'dark', 'espresso'] }, { 'Collection': ['autumn', 'holiday'] }, { 'Bean Type': ['whole', 'ground'] }] :
        [{ 'Sort By': ['light', 'medium', 'dark', 'espresso'] }, { 'Type': ['autumn', 'holiday'] }, { 'Price': ['whole', 'ground'] }];
    const mappedSortOptions = filterOptions.map((filterGroup, i) => {
        const mappedFilterGroup = Object.entries(filterGroup).map(([groupName, filterItems]) => (
            <AccordionItem className="productFilterAccordionItem" key={i}>
                <AccordionHeader id="productFilterHeader" targetId={i}>{groupName}</AccordionHeader>
                <AccordionBody className="productFilterInputSection" accordionId={i}>
                    {filterItems.map((filterItem, j) => (
                        <div key={j} className="productFilterInputContainer">
                            <Input
                                className="productFilterInput"
                                type="checkbox"
                                onChange={() => {
                                    setSelectedFilters(prevFilters => ({
                                        [groupName]: filterItem
                                    }));
                                }}
                            />
                            <Label className="productFilterLabel">{filterItem}</Label>
                        </div>
                    ))}
                </AccordionBody>
            </AccordionItem>
        ));
        return mappedFilterGroup
    });
    console.log(selectedFilters)

    const inventory = data.map((product) => {
        // console.log('products page', product._id)
        return (
            <Link to={`/shop/${catagory}/${product._id}`} className="productIconContainer">
                <div className="productImgContainer" style={{ backgroundImage: `url(${API_URL}${product.image})` }} >
                    <p className="productComingSoon">Coming Soon</p>
                    <img className="productLikedIcon" src={likedIcon} />
                    <p className="productIconLink">Next</p>
                </div>
                <p className="productName">{product.name}</p>
                <p className="productClassification">{product.region}</p>
                <p className="productPrice">${product.priceInCents / 100}</p>
            </Link >
        )
    })

    return (
        <div id="productsPage">
            <div className="productTitle">
                {catagory == 'beans' ? 'COFFEE BEANS' : 'SHOP'}
            </div>
            <div className="productsSection">
                <div className="productSortByOptions">
                    <Accordion flush className="productAccordionContainer" open={open} toggle={toggle}>
                        {mappedSortOptions}
                    </Accordion>
                </div>
                <div className="productDisplayContainer">
                    {inventory}
                </div>
            </div>
            <FooterLinks />
        </div>
    );
}

export default Products;