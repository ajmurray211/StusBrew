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
import { merch, beans } from '../data.js'

const Home = () => {
    const { API_URL } = useContext(CartContext)
    // const { getData: getMerch, data: merch, error: merchError, loading: merchLoading } = useDataFetcher();
    // const { getData: getBeans, data: beans, error: beanError, loading: beanLoading } = useDataFetcher();
    useEffect(() => {
        // getMerch(`${API_URL}merch`)
        // getBeans(`${API_URL}bean`)
    }, []);

    const mappedMerchItems = merch.map((product, i) => {
        if (i > 2) { return }
        return (
            <Icon key={product._id} product={product} />
        )
    })

    const mappedBeanBags = beans.map((product, i) => {
        if (i > 2) { return }
        return (
            <Icon key={product._id} product={product} />
        )
    })

    return (
        <div>
            <Scroller items={mainImgs} />

            <Location />

            <div className="homeCoffeeSection">
                <h1 className='title'>Coffee Beans</h1>
                <div className="homeIconContainer">
                    {mappedBeanBags}
                </div>
                <Button color='danger' size='lg'>
                    <Link className='link ' to='/products'>View all {<ArrowForwardIosIcon />}</Link>
                </Button>
            </div>

            <Charities />

            <div className="homeMerchSection">
                <h1 className='title'>Stu's Styles</h1>
                <div className="homeIconContainer">
                    {mappedMerchItems}
                </div>
                <Button color='danger' size='lg'>
                    <Link className='link' to='/products'>View all {<ArrowForwardIosIcon />}</Link>
                </Button>
            </div>

        </div>
    );
}

export default Home;