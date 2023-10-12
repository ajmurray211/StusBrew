import drink from '../Assets/cup-beans2.png'
import food from '../Assets/bagles.jpeg'
import { drinks, pastriesAndBakedGoods } from "../data";

const Menu = () => {

    const mapppedFood = drinks.map((item) => { return <div className="menuOption">- {item.name} -</div> })
    const mappedDrinks = pastriesAndBakedGoods.map((item) => { return <div className="menuOption">- {item.name} -</div> })

    return (
        <div id="menuPage">
            {/* <div id="menuWelcomeSection" className=''>
                <div className="menuWelcome1Grid ">
                    <div id="menuFlex1">
                        <img id="menuTitleImg1" src={drink} />
                        <div className="title" id="menuWelcomMsg">
                            <p id="mm1">Food</p>
                            <p id="mm2">&</p>
                            <p id="mm3">Drinks</p>
                        </div>
                    </div>
                </div>
                <img id="menuTitleImg2" src={food} />
            </div> */}
            <div className='menuTitle title'>Menu</div>
            <div id="menuFoodSection" className="">
                <div className="title menuTitleSection">Food</div>
                <div className="body menuOptions">{mappedDrinks}</div>
            </div>

            <div id="menuDrinkSection" className="">
                <div className="title menuTitleSection">Drinks</div>
                <div className="body menuOptions">{mapppedFood}</div>
            </div>

        </div>
    );
}

export default Menu;