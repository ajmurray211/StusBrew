import { bakedGoodsSeedData } from "../data";
import stusCupLogo from '../Assets/stusCupLogo.png'
import { Link } from "react-router-dom";
import arrowUpRightBlack from '../Assets/arrow-up-right-black.png'
import arrowUpRightWhite from '../Assets/arrow-up-right-white.png'
import hf1 from '../Assets/hf1.jpg'
import hf2 from '../Assets/hf2.jpg'
import hf3 from '../Assets/hf3.jpg'
import hf4 from '../Assets/hf4.jpg'
import hf5 from '../Assets/hf5.jpg'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import LoadingIcon from "../components/LoadingIcon";
import FooterLinks from "../components/FooterLinks";

const Menu = () => {
    const [bakedGoodsData, setBakedGoodsData] = useState()
    const { API_URL } = useContext(CartContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}bakedGoods`);
                const data = await response.json();
                setBakedGoodsData(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchData();
    }, [API_URL]);

    if (!bakedGoodsData) {
        return <LoadingIcon />;
    }

    const baked = bakedGoodsData.map((item) => {
        if (item.classification == 'baked') {
            return (
                <li className="menuOption">
                    <Link to={`/shop/bakedGoods/${encodeURIComponent(item._id)}`} className="menuOptionLink">
                        <p className='menuOptionTitle'>{item.name}</p>
                    </Link>
                    <p className='menuOptionDescription'>{item.description}</p>
                </li>
            )
        }
    })

    const assorted = bakedGoodsData.map((item) => {
        if (item.classification == 'assorted') {
            return (
                <li className="menuOption">
                    <Link className="menuOptionLink">
                        <p className='menuOptionTitle'>{item.name}</p>
                    </Link>
                </li>
            )
        }
    })

    const doughnuts = bakedGoodsData.map((item) => {
        if (item.classification == 'doughnut') {
            return (
                <li className="menuOption">
                    <Link className="menuOptionLink">
                        <p className='menuOptionTitle'>{item.name}</p>
                    </Link>
                </li>
            )
        }
    })

    return (
        <div id="menuPage">
            <div className='menuSection menuBorder'>
                <div className='menuTitle'>FOOD MENU</div>
                <div className='menuGrid'>
                    <div className='mc1 '>
                        <p className='menuSectionTitle'>BAKED GOODS</p>
                        <div>
                            <ul className='menuOptionsContainer'>
                                {baked}
                            </ul>
                            <div className='menuLogoContianer'>
                                <img className='menuLogo' src={stusCupLogo} />
                                <div>
                                    <p className='menuLogoTxt'>- <br />Coffee would pair well!<br /> -</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mc2 '>
                            <p className='menuSectionTitle'>ASSORTED GOODS</p>
                            <ul className='menuOptionsContainer'>
                                {assorted}
                            </ul>
                        </div>
                        <div className='mc3 '>
                            <p className='menuSectionTitle'> DOUGHNUTS</p>
                            <ul className='menuOptionsContainer'>
                                {doughnuts}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='menuFooter'>
                    <p>You can find us at the Farmers Market every sunday.</p>
                </div>
            </div>

            <FooterLinks />
        </div>
    );
}

export default Menu;