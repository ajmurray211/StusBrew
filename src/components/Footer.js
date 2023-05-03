import InstagramIcon from '@mui/icons-material/Instagram';
import NewsLetter from './NewsLetter';

const Footer = () => {
    return (
        <footer className='footer'>
            <NewsLetter />
            <div id='socialsContainer'>
                <div>©2019, Stus Brew</div>
                <section id="socials">
                    <a target="_blank" href="https://www.instagram.com/stus.brew/?utm_source=ig_embed&amp;utm_campaign=loading">{<InstagramIcon />}</a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;

