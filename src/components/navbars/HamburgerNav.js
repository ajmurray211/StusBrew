import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, NavbarToggler, Navbar } from 'reactstrap';
import hat from '../../Assets/hat-logo.png'
import { Link, Route, Routes } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import Cart from '../Cart';

const HamburgerNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const [isModalOpen, setIsModalpen] = useState()
    const toggleModal = () => setIsModalpen(!isModalOpen)

    return (
        <div>
            <Navbar sticky='top' id='navbar'>
                <NavbarToggler onClick={toggle} />
                <Offcanvas isOpen={isOpen} toggle={toggle}>
                    <OffcanvasHeader toggle={toggle}>
                        Stus Brew
                    </OffcanvasHeader>
                    <OffcanvasBody id='navSelect'>
                        <Link className='link' onClick={toggle} to='/'>Home</Link>
                        <Link className='link' onClick={toggle} to='/merchPage'>Merch</Link>
                        <Link className='link' onClick={toggle} to='/beanPage'>Beans</Link>
                        <Link className='link' onClick={toggle} to='/about'>About</Link>
                        <div className='navFooter'>
                            <div>©2019, Stus Brew</div>
                            <section id="socials">
                                <a target="_blank" href="https://www.instagram.com/stus.brew/?utm_source=ig_embed&amp;utm_campaign=loading">{<InstagramIcon />}</a>
                            </section>
                        </div>
                    </OffcanvasBody>
                </Offcanvas>
                <section className='logo'>
                    <Link to="/"><img className="hat-logo" alt='stus logo' src={hat} /></Link>
                    <p>Stus Brew</p>
                </section>
                <section id='profile'>
                    {/* <SearchIcon fontSize='large' /> */}
                    <Cart isOpen ={isModalOpen} toggle={toggleModal} />
                </section>
            </Navbar>
        </div>
    );
}

export default HamburgerNav;