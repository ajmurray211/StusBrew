import drink from '../Assets/cup-beans2.png'
import food from '../Assets/bagles.jpeg'
import { bakedGoodsSeedData } from "../data";
import stusCupLogo from '../Assets/stusCupLogo.png'

const Menu = () => {
    const baked = bakedGoodsSeedData.map((item) => {
        if (item.classification == 'baked') {
            return (
                <li className="menuOption">
                    <p className='menuOptionTitle'>{item.name}</p>
                    <p className='menuOptionDescription'>{item.description}</p>
                </li>
            )
        }
    })
    const assorted = bakedGoodsSeedData.map((item) => {
        if (item.classification == 'assorted') {
            return (
                <li className="menuOption">
                    <p className='menuOptionTitle'>{item.name}</p>
                </li>
            )
        }
    })
    const doughnuts = bakedGoodsSeedData.map((item) => {
        if (item.classification == 'doughnut') {
            return (
                <li className="menuOption">
                    <p className='menuOptionTitle'>{item.name}</p>
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
                                    <p className='menuLogoTxt'>- <br/>Coffee would pair well!<br/> -</p>
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
        </div>
    );
}

export default Menu;