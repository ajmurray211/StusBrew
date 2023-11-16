import Icon from '../components/Icon';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { merch, beans, mainImgs } from '../data.js'
import shop from '../Assets/shop.jpg'
import Marquee from 'react-fast-marquee';
import linkArrow from '../Assets/linkArrow.png'
import arrowUpRightBlack from '../Assets/arrow-up-right-black.png'
import stusCupLogo from '../Assets/stusCupLogo.png'
import hf1 from '../Assets/hf1.jpg'
import hf2 from '../Assets/hf2.jpg'
import hf3 from '../Assets/hf3.jpg'
import hf4 from '../Assets/hf4.jpg'
import hf5 from '../Assets/hf5.jpg'
import homeBeanBanner from '../Assets/homeBeansBanner.png'
import { Link } from 'react-router-dom';

const Home = () => {
    const { API_URL } = useContext(CartContext)

    return (
        <div id='homePage'>
            <p id='homeTitle'>START YOUR DAY WITH OUR COFFEE</p>
            <div className='homeTitleImg' />
            <Marquee className='homeMarquee '>
                Freshly Roasted Coffee Beans & Irresistible Pastries Await. Indulge in Every Sip & Bite!
            </Marquee>
            <div className='gridContainer'>
                <div className='bordered'>
                    <div>
                        <p className='homeTitleTxt'>Stu’s Bake n’ Brew is a locally owned and grown bakery and coffee bean company.</p>
                        <p className='homeTitleTxtFooter'>Currently we are mobile and mainly attend farmers markets.</p>
                    </div>
                </div>
                <div className='bordered'>
                    <div className='hc2' />
                </div>
                <div style={{ gridRow: 'span 2' }} className='bordered'>
                    <Link to={'/menu'} className='homeLink'>
                        <div className='hc3'>
                            <img className='homeBeanBanner' src={homeBeanBanner}/>
                            <p className='hc3t'>Beans</p>
                        </div>
                    </Link>
                </div>
                <div className='bordered'>
                    <p className='hc4 homeTitleTxt'>CHECK OUT THE CHARITIES WE SUPPORT<img className='homeLinkArrow' src={linkArrow} /></p>
                </div>
                <div style={{ gridRow: 'span 4' }} className='bordered'>
                    <img className='hc6' src={stusCupLogo} />
                </div>
                <div style={{ gridRow: 'span 2' }} className='bordered'>
                    <Link to={'/menu'} className='homeLink'>
                        <div className='hc5'>
                            <p className='hc5t'>Baked Goods</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='homeFollowSection'>
                <div>
                    <p className='homeFollowTxt'>FOLLOW US<img className='homeLinkArrow' src={arrowUpRightBlack} /></p>
                </div>
                <div className='homeImgContainer'>
                    <div className='homeFollowImg' style={{ backgroundImage: `url(${hf1})` }} />
                    <div className='homeFollowImg' style={{ backgroundImage: `url(${hf2})` }} />
                    <div className='homeFollowImg' style={{ backgroundImage: `url(${hf3})` }} />
                    <div className='homeFollowImg' style={{ backgroundImage: `url(${hf4})` }} />
                    <div className='homeFollowImg' style={{ backgroundImage: `url(${hf5})` }} />
                </div>
            </div>
        </div >
    );
}

export default Home;