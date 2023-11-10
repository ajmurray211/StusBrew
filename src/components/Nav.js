import { Offcanvas, OffcanvasHeader, OffcanvasBody, NavbarToggler, Navbar, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import hat from '../Assets/hat.png'
import userIcon from '../Assets/userIcon.png'
import bagIcon from '../Assets/bagIcon.png'
import likedIcon from '../Assets/likedIcon.png'
import searchIcon from '../Assets/searchIcon.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const [isModalOpen, setIsModalpen] = useState()
    const toggleModal = () => setIsModalpen(!isModalOpen)

    return (
        <Navbar sticky='top' id='navbar'>
            <div></div>
            <div></div>
            <div className='navLinkContainer'>
                <Dropdown isOpen={isOpen} toggle={toggle} direction='down'>
                    <DropdownToggle id='navDropdown' className='navLink' caret>Menu</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem><Link className='navLink' onClick={toggle} to='/'>Coffee Beans</Link></DropdownItem>
                        <DropdownItem><Link className='navLink' onClick={toggle} to='/'>Bakery</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Link className='navLink' onClick={toggle} to='/products'>Shop</Link>
            </div>
            <div className='navTitleContainer'>
                <Link to="/"><img className="hat-logo" alt='stus logo' src={hat} /></Link>
                <p className='navTitle'>Stu's Brew</p>
                <div className='navTitleInfo'>
                    <p>Craft Coffee</p>
                    <p>est. 2023</p>
                </div>
            </div>
            <div className='navLinkContainer'>
                <Link className='navLink' onClick={toggle} to='/menu'>Contact</Link>
                <Link className='navLink' onClick={toggle} to='/about'>About</Link>
            </div>
            <div className='navIconContainer'>
                <Link to="/"><img className="navIcon" alt='search icon' src={searchIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='user icon' src={userIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='liked icon' src={likedIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='bag icon' src={bagIcon} /></Link>
            </div>
        </Navbar>
    )
}

export default Nav;