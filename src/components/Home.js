import Scroller from './Scroller'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from 'reactstrap';
import NewsLetter from './NewsLetter';
import Icon from './procucts/Icon';
import { beans, merch, mainImgs } from '../productData.js'
import { Link } from 'react-router-dom';

const Home = () => {
    const mappedMerchItems = merch.map((product) => {
        return (
            <Icon product={product} />
        )
    })

    const mappedBeanBags = beans.map((product) => {
        return (
            <Icon product={product} />
        )
    })

    return (
        <div>
            <Scroller
                items={mainImgs} />
            <div className="prodBackground">
                <h1>Coffee Beans</h1>
                <div className="prodContainer">
                    {mappedBeanBags}
                </div>
                <Button color='danger' size='lg'>
                    <Link className='link' to='/beanPage'>View all {<ArrowForwardIosIcon />}</Link>
                </Button>
                
            </div>

            <div className="prodBackground">
                <h1>Stu's Styles</h1>
                <div className="prodContainer">
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