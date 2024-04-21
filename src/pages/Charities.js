import SSS from '../Assets/SSS.png'
import BAM from '../Assets/BAM.png'
import SHC from '../Assets/SHC.png'

const Charities = () => {
    return (
        <div className="charatiesPage">
            <div>
                <div className="charatiesTitle title">Charities</div>
                <div className="charContentSection">
                <a className="charitiesContainer" target="_blank" href="https://stopsoldiersuicide.org/roger-wellness-service?utm_source=google&utm_medium=cpc&utm_campaign=Get_Help&utm_content=veteran_suicide&utm_keyword=stop%20soldier%20suicide&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH50WGIqJyP4idar_EZgWiBNpegdssboLbxSHTBKZT9JcJZnB0nKoM_8aAherEALw_wcB">{<img src={SSS} className="charitiesTitleImg" />}</a>
                <a className="charitiesContainer" target="_blank" href="https://buildamiracle.net/">{<img src={BAM} className="charitiesTitleImg" />}</a>
                <a className="charitiesContainer" target="_blank" href="https://www.shrinerschildrens.org/en">{<img src={SHC} className="charitiesTitleImg" />}</a>
                    <div className="charitiesContainer">
                        <p className='charatiesDescption body'>
                            At Stu's Brew, we <span className='charatiesBoldDesc'> believe in brewing more than just
                                exceptional coffee</span>; we strive to create a positive impact
                            in our community. That's why we proudly donate a portion of
                            our proceeds to organizations dedicated to meaningful causes.
                            Supporting initiatives like Stop Soldier Suicide is our way of
                            expressing gratitude to those who have served our country, while
                            contributing to the Shriners helps us champion healthcare for
                            children in need. Additionally, our commitment to Build a Miracle
                            reflects our dedication to fostering hope and making a difference
                            in the lives of those facing challenges. At Stu's Brew, every cup
                            of coffee is a sip of compassion and a gesture towards a
                            brighter future.
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charities;