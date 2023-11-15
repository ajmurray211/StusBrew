import hf1 from '../Assets/hf1.jpg'
import hf2 from '../Assets/hf2.jpg'
import hf3 from '../Assets/hf3.jpg'
import hf4 from '../Assets/hf4.jpg'
import hf5 from '../Assets/hf5.jpg'
import arrowUpRightBlack from '../Assets/arrow-up-right-black.png'
import arrowUpRightWhite from '../Assets/arrow-up-right-white.png'

const FooterLinks = () => {
    return (
        <div>
            <div className="menuCharaties">
                <p className="menuCharatiesTxt">Charaties We Support<img className='menuLinkArrow' src={arrowUpRightWhite} /></p>
            </div>

            <div className='menuFollowSection'>
                <div>
                    <p className='menuFollowTxt'>See Where We Are This Week<img className='menuLinkArrow' src={arrowUpRightBlack} /></p>
                </div>
                <div className='menuImgContainer'>
                    <div className='menuFollowImg' style={{ backgroundImage: `url(${hf1})` }} />
                    <div className='menuFollowImg' style={{ backgroundImage: `url(${hf2})` }} />
                    <div className='menuFollowImg' style={{ backgroundImage: `url(${hf3})` }} />
                    <div className='menuFollowImg' style={{ backgroundImage: `url(${hf4})` }} />
                    <div className='menuFollowImg' style={{ backgroundImage: `url(${hf5})` }} />
                </div>
            </div>
        </div>
    );
}

export default FooterLinks;