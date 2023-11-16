import { Offcanvas, OffcanvasHeader, OffcanvasBody, NavbarToggler, Navbar, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import stusTitle from '../Assets/stusTitle.png'
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
            <div className='navLinkContainer navContainer'>
                <Dropdown isOpen={isOpen} toggle={toggle} direction='down'>
                    <DropdownToggle id='navDropdown' className='navLink' caret>Menu</DropdownToggle>
                    <DropdownMenu>
                        <Link className='navLink' onClick={toggle} to='/'><DropdownItem>Coffee Beans</DropdownItem></Link>
                        <DropdownItem divider />
                        <Link className='navLink' onClick={toggle} to='/menu'><DropdownItem >Bakery</DropdownItem></Link>
                    </DropdownMenu>
                </Dropdown>
                <Link className='navLink' onClick={toggle} to='/products'>Shop</Link>
            </div>
            <div className='navTitleLogo'>
                <Link to="/"><img className="navTitleLogo" alt='stus logo' src={stusTitle} /></Link>
            </div>
            <div className='navLinkContainer navContainer'>
                <Link className='navLink' onClick={toggle} to='/menu'>Contact</Link>
                <Link className='navLink' onClick={toggle} to='/about'>About</Link>
            </div>
            <div className='navIconContainer navContainer'>
                <Link to="/"><img className="navIcon" alt='search icon' src={searchIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='user icon' src={userIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='liked icon' src={likedIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='bag icon' src={bagIcon} /></Link>
            </div>
        </Navbar>
    )
}

export default Nav;