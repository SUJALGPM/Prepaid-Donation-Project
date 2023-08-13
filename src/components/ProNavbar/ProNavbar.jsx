import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images'
import { NavLink } from 'react-router-dom';
import "./ProNavbar.css";
const ProNavbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app__navbar">
            <div className='app__navbar-logo'>
                {/* <img src={images.gericht} alt="app logo"/> */}
                <h1 style={{ marginRight: 7, fontSize: 40, color: "white" }}>DONATION </h1>
                <div>
                    <h2 style={{ color: "white" }}>CAMP</h2>
                </div>
            </div>

            <ul className='app__navbar-links'>
                <li className='p__opensans'><NavLink to='/'>Home</NavLink></li>
                <li className='p__opensans'><NavLink to='/services'>Services</NavLink></li>
                <li className='p__opensans'><NavLink to='#request'>Request</NavLink></li>
                <li className='p__opensans'><NavLink to='#payment'>Transactions</NavLink></li>
                <li className='p__opensans'><NavLink to='/about'>About</NavLink></li>
            </ul>

            <div className='app__navbar-login'>
                <NavLink to='/register' className='p__opensans'>Logout</NavLink>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans'><a href='#home'>Home</a></li>
                            <li className='p__opensans'><a href='#charity'>Services</a></li>
                            <li className='p__opensans'><a href='#donar'>Donate</a></li>
                            <li className='p__opensans'><a href='#about'>Donee</a></li>
                            <li className='p__opensans'><a href='#about'>About</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default ProNavbar;
