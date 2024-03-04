import React, { useEffect, useState } from 'react';
import menu_icon from '../Images/menu_icon.webp';
import close_icon from '../Images/close_icon.webp';
import { Link } from 'react-router-dom';
import navigationData from '../JsonFiles/navigation.json';

export default function NavBar() {
    const [isProductDropDownActive, setIsProductDropDownActive] = useState(false);
    const [dropdownItems, setDropdownItems] = useState(navigationData.dropdownItems);


    const [isMenuIconActive, setIsMenuIconActive] = useState(false);
    const [isMobileMenuContainerActive, setIsMobileMenuContainerActive] = useState(false);

    const toggleActiveClass = (reference) => {
        if (reference === "Products") {
            setIsProductDropDownActive(!isProductDropDownActive);
        }
        else if(reference === "menuContainer"){
            setIsMobileMenuContainerActive(!isMobileMenuContainerActive);
        }
    };

    return (
        <div>
            <div className="desktop_navigation">
                <div className="company_logo"><Link className="companyLogoAnchor" to="/">ALL NEPAL TRADE CENTER.</Link></div>
                <nav className='desktopNavigationNavBar'>
                    <ul className="desktopNavUnorderedHorizontalList">
                        <li className="navHorizontalListContainer">
                            <Link className="navHorizontalListChild" to="/">Home</Link>
                        </li>
                        <li className="navHorizontalListContainer">
                            <Link className={`dropdownParent navHorizontalListChild ${isProductDropDownActive ? 'active' : ''}`} onClick={() => toggleActiveClass("Products")} style={{ cursor: 'pointer' }}>Products</Link>
                            <div className={`dropdownContainer ${isProductDropDownActive ? 'active' : ''}`}>
                                <ul className="dropdownContents">
                                    {dropdownItems.map((item, index) => (
                                        <li key={index}>
                                            <Link className="dropdownContentChild" to={item.url}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li className="navHorizontalListContainer">
                            <Link className="navHorizontalListChild" to="/contactUs">Contact Us</Link>
                        </li>
                    </ul>

                </nav>
            </div>
            <div className="mobile_nav">
                <div className={`menu_icon ${isMenuIconActive ? 'active' : ''}`}><img src={menu_icon} alt="Menu" onClick={() => toggleActiveClass("menuContainer")} /></div>

                <div className={`mobile_menu_container ${isMobileMenuContainerActive ? 'active' : ''}`}>
                    <div className={`close_icon ${isMobileMenuContainerActive ? 'active' : ''}`}><img src={close_icon} alt="" onClick={() => toggleActiveClass("menuContainer")} /></div>
                    <ul className="mobileMenuVerticalUnorderedList">
                        <li>
                            <Link className="mobileMenuChild" to="/">Home</Link>
                        </li>
                        <li className="navHorizontalListContainer mobileNavDropDownContainer">
                            <Link className={`mobileMenuChild dropdownParent navHorizontalListChild ${isProductDropDownActive ? 'active' : ''}`} onClick={() => toggleActiveClass("Products")} style={{ cursor: 'pointer' }}>Products<div className={`greaterThan ${isProductDropDownActive ? 'active' : ''}`}><i class="fa-solid fa-caret-down"></i></div></Link>
                            <div className={`mobileDropDownContainer ${isProductDropDownActive ? 'active' : ''}`}>
                                <ul className="mobileDropDownContent">
                                    {dropdownItems.map((item, index) => (
                                        <li key={index}>
                                            <Link className="mobileDropDownContentChild" to={item.url}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link className="mobileMenuChild" to="/contactUs">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}