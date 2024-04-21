import { bakedGoodsSeedData } from "../data";
import stusCupLogo from '../Assets/stusCupLogo.png'
import { Link } from "react-router-dom";
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
                console.log('default data')
                setBakedGoodsData(bakedGoodsSeedData)
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
                    <Link disabled to={`/shop/bakedGoods/${encodeURIComponent(item._id)}`} className="menuOptionLink">
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
                <li className="menuOption menuOptionDisabled">
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