import {drinks, baked} from "../data";

const Menu = () => {

    const mapppedFood = cocktails.map((item) => { return <div className="menuOption">- {item} -</div> })
    const mappedDrinks = mocktails.map((item) => { return <div className="menuOption">- {item} -</div> })

    return (
        <div id="menuPage">
            <div id="menuWelcomeSection">
                <div className="menuWelcome1Grid">
                    <div id="menuFlex1">
                        <img id="menuTitleImg1" src={drink} />
                        <div className="title" id="menuWelcomMsg">
                            <p id="mm1">Food</p>
                            <p id="mm2">&</p>
                            <p id="mm3">Drinks</p>
                        </div>
                    </div>
                </div>
                <img id="menuTitleImg2" src={drink2} />
            </div>

            <div id="menuCocktailsSection" className="botPad">
                <div className="title menuTitleSection">Cocktails</div>
                <div className="body menuOptions">{mapppedFood}</div>
            </div>

            <div id="menuMocktailsSection" className="botPad">
                <div className="title menuTitleSection">Mocktails</div>
                <div className="body menuOptions">{mappedDrinks}</div>
            </div>
        </div>
    );
}

export default Menu;