import { Offcanvas, OffcanvasHeader, OffcanvasBody, NavbarToggler, Navbar } from 'reactstrap';
import hat from '../Assets/hat-logo.png'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import Cart from './Cart';

const HamburgerNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const [isModalOpen, setIsModalpen] = useState()
    const toggleModal = () => setIsModalpen(!isModalOpen)

    return (
        <Navbar sticky='top' id='navbar'>
            <NavbarToggler onClick={toggle} />
            <Offcanvas isOpen={isOpen} toggle={toggle}>
                <OffcanvasHeader toggle={toggle}>
                    Stu’s Bake n’ Brew
                </OffcanvasHeader>
                <OffcanvasBody id='navSelect'>
                    <Link className='navLink' onClick={toggle} to='/'>Home</Link>
                    <Link className='navLink' onClick={toggle} to='/products'>Products</Link>
                    <Link className='navLink' onClick={toggle} to='/menu'>Menu</Link>
                    <Link className='navLink' onClick={toggle} to='/faq'>FAQ's</Link>
                    <Link className='navLink' onClick={toggle} to='/about'>About</Link>
                    <div className='navFooter'>
                        <div>©2019, Stu’s Bake n’ Brew</div>
                        <section id="socials">
                            <a target="_blank" href="https://www.instagram.com/stus.brew/?utm_source=ig_embed&amp;utm_campaign=loading">{<InstagramIcon />}</a>
                        </section>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
            <section className='navTitleSection'>
                <Link to="/"><img className="hat-logo" alt='stus logo' src={hat} /></Link>
                <p className='title '>Stu’s Bake n’ Brew</p>
            </section>
            <section id='navProfileSection'>
                <Cart isOpen={isModalOpen} toggle={toggleModal} />
                <div className='navSocialsContainer'>
                    <a target="_blank" href="https://www.instagram.com/stus.brew/?utm_source=ig_embed&amp;utm_campaign=loading">{<InstagramIcon />}</a>
                </div>
            </section>
        </Navbar>
    );
}

export default HamburgerNav;