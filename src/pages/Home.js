import Scroller from '../components/Scroller'
import Location from '../components/Location';
import Charities from '../components/Charities';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from 'reactstrap';
import NewsLetter from '../components/NewsLetter';
import Icon from '../components/Icon';
import { mainImgs } from '../productData.js'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { useDataFetcher } from '../hooks/useDataFetcher';

const Home = () => {
    const { API_URL } = useContext(CartContext)
    const { getData: getMerch, data: merch, error: merchError, loading: merchLoading } = useDataFetcher();
    const { getData: getBeans, data: beans, error: beanError, loading: beanLoading } = useDataFetcher();
    useEffect(() => {
        getMerch(`${API_URL}merch`)
        getBeans(`${API_URL}bean`)
    }, []);

    const mappedMerchItems = merch.map((product) => {
        return (
            <Icon key={product._id} product={product} />
        )
    })

    const mappedBeanBags = beans.map((product) => {
        return (
            <Icon key={product._id} product={product} />
        )
    })

    return (
        <div>
            <Scroller items={mainImgs} />

            <Location />

            <div className="prodBackground">
                <h1>Coffee Beans</h1>
                <div className="productContainer">
                    {mappedBeanBags}
                </div>
                <Button color='danger' size='lg'>
                    <Link className='link' to='/beanPage'>View all {<ArrowForwardIosIcon />}</Link>
                </Button>

            </div>

            <Charities />

            <div className="prodBackground">
                <h1>Stu's Styles</h1>
                <div className="productContainer">
                    {mappedMerchItems}
                </div>
                <Button color='danger' size='lg'>
                    <Link className='link' to='/merchPage'>View all {<ArrowForwardIosIcon />}</Link>
                </Button>
            </div>

        </div>
    );
}

export default Home;