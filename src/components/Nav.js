import { Navbar, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Popover, Button, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap';
import stusTitle from '../Assets/stusTitle.png'
import userIcon from '../Assets/userIcon.png'
import bagIcon from '../Assets/bagIcon.png'
import whiteBagIcon from '../Assets/white-checkout bag.png'
import likedIcon from '../Assets/likedIcon.png'
import searchIcon from '../Assets/searchIcon.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import { useToggler } from '../hooks/useToggler';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const [isCartOpen, setIsCartOpen] = useState(false)
    const toggleCart = () => setIsCartOpen(!isCartOpen)

    return (
        <Navbar sticky='top' id='navbar'>
            <div className='navLinkContainer navContainer'>
                <Dropdown  disabled isOpen={isOpen} toggle={toggle} direction='down'>
                    <DropdownToggle id='navDropdown' className='navLink' caret>Shop</DropdownToggle>
                    <DropdownMenu>
                        <Link className='navLink' onClick={toggle} to='/shop/beans'><DropdownItem>Coffee Beans</DropdownItem></Link>
                        <DropdownItem divider />
                        <Link className='navLink' onClick={toggle}  to='/shop/merch'>Merch</Link>
                    </DropdownMenu>
                </Dropdown>
                <Link className='navLink' to='/menu'>Menu</Link>
            </div>
            <div className='navTitleLogo'>
                <Link to="/"><img className="navTitleLogo" alt='stus logo' src={stusTitle} /></Link>
            </div>
            <div className='navLinkContainer navContainer'>
                <Link className='navLink' to='/charities'>Charities</Link>
                <Link className='navLink' to='/about'>About</Link>
            </div>
            <div className='navIconContainer navContainer'>
                <Link to="/"><img className="navIcon" alt='search icon' src={searchIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='user icon' src={userIcon} /></Link>
                <Link to="/"><img className="navIcon" alt='liked icon' src={likedIcon} /></Link>
                <div className="navCartContainer">
                    <img
                        id="PopoverFocus"
                        onClick={toggleCart}
                        placement='left'
                        className="navIcon navCartIcon"
                        alt="bag icon"
                        src={bagIcon}
                    />
                    <UncontrolledPopover className='cartPopover' flip placement='left' trigger='focus' target="PopoverFocus" isOpen={isCartOpen} toggle={toggleCart}>
                        <PopoverHeader className='cartTitle'>CART <img className='cartHeaderIcon' src={whiteBagIcon} /></PopoverHeader>
                        <PopoverBody className='cartBodySection'>
                            <Cart />
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </div>
        </Navbar>
    )
}

export default Nav;