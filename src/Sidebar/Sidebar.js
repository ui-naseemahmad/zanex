import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "./Sidebar.css"

const Sidebar = () => {
    const [isActive, setActive] = useState();
    const subMenuShow = () => {
        setActive(!isActive)
    }
    return (
        <div className="sidebarSection">
            <div className="sidebar">
                <img src="https://spruko.com/demo/zanex/zanex/assets/images/brand/logo-3.png" alt="logo" className="main-logo" />
                <img src="https://spruko.com/demo/zanex/zanex/assets/images/brand/logo-2.png" alt="logo" className="sidebar-logo" />
            </div>

            <div className="main-sidemenu ">
                <ul className="side-menu">
                    <li className="sub-category">
                        <h3>Main</h3>
                    </li>
                    <li className={`slide  ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Dashboard</span>
                            </span>
                        </span>
                    </li>
                    <li className="sub-category">
                        <h3>Widgets</h3>
                    </li>
                    <li className={`slide ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Widgets</span>
                            </span>
                        </span>
                    </li>
                    <li className="sub-category">
                        <h3>Elements</h3>
                    </li>
                    <li onClick={subMenuShow} className={`slide slide-item ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Components</span>
                            </span>
                            <span className="side-menu-label--icon"><MdOutlineKeyboardArrowRight /></span>
                        </span>
                        <ul className="slide-menu">
                            <li>
                                <span className="slide-item"> Cards design</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Full calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default Chat</span>
                            </li>
                            <li>
                                <span className="slide-item"> Notifications</span>
                            </li>
                            <li>
                                <span className="slide-item"> Sweet alerts</span>
                            </li>
                        </ul>
                    </li>
                    <li onClick={subMenuShow} className={`slide slide-item ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Elements</span>
                            </span>
                            <span className="side-menu-label--icon"><MdOutlineKeyboardArrowRight /></span>
                        </span>
                        <ul className="slide-menu">
                            <li className="side-menu-label1">
                                <span>Components</span>
                            </li>
                            <li>
                                <span className="slide-item"> Cards design</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Full calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default Chat</span>
                            </li>
                            <li>
                                <span className="slide-item"> Notifications</span>
                            </li>
                            <li>
                                <span className="slide-item"> Sweet alerts</span>
                            </li>
                        </ul>
                    </li>
                    <li onClick={subMenuShow} className={`slide  ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Advance Elements</span>
                            </span>
                            <span className="side-menu-label--icon"><MdOutlineKeyboardArrowRight /></span>
                        </span>
                        <ul className="slide-menu">
                            <li className="side-menu-label1">
                                <span>Components</span>
                            </li>
                            <li>
                                <span className="slide-item"> Cards design</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Full calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default Chat</span>
                            </li>
                            <li>
                                <span className="slide-item"> Notifications</span>
                            </li>
                            <li>
                                <span className="slide-item"> Sweet alerts</span>
                            </li>
                        </ul>
                    </li>
                    <li className="sub-category">
                        <h3>Charts & Tables</h3>
                    </li>
                    <li onClick={subMenuShow} className={`slide slide-item ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Charts</span>
                            </span>
                            <span className="side-menu-label--icon"><MdOutlineKeyboardArrowRight /></span>
                        </span>
                        <ul className="slide-menu">
                            <li className="side-menu-label1">
                                <span>Components</span>
                            </li>
                            <li>
                                <span className="slide-item"> Cards design</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Full calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default Chat</span>
                            </li>
                            <li>
                                <span className="slide-item"> Notifications</span>
                            </li>
                            <li>
                                <span className="slide-item"> Sweet alerts</span>
                            </li>
                        </ul>
                    </li>
                    <li onClick={subMenuShow} className={`slide ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Tables</span>
                            </span>
                            <span className="side-menu-label--icon"><MdOutlineKeyboardArrowRight /></span>
                        </span>
                        <ul className="slide-menu">
                            <li className="side-menu-label1">
                                <span>Components</span>
                            </li>
                            <li>
                                <span className="slide-item"> Cards design</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Full calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default Chat</span>
                            </li>
                            <li>
                                <span className="slide-item"> Notifications</span>
                            </li>
                            <li>
                                <span className="slide-item"> Sweet alerts</span>
                            </li>
                        </ul>
                    </li>
                    <li className="sub-category">
                        <h3>Pages</h3>
                    </li>
                  
                    <li onClick={subMenuShow} className={`slide ${isActive ? 'active' : null}`}>
                        <span className="side-menu__item">
                            <span className="side-menu-label-main">
                                <span><BiHome /></span>
                                <span className="side-menu__label">Page</span>
                            </span>
                            <span className="side-menu-label--icon"><MdOutlineKeyboardArrowRight /></span>
                        </span>
                        <ul className="slide-menu">
                            <li className="side-menu-label1">
                                <span>Components</span>
                            </li>
                            <li>
                                <span className="slide-item"> Cards design</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Full calendar</span>
                            </li>
                            <li>
                                <span className="slide-item"> Default Chat</span>
                            </li>
                            <li>
                                <span className="slide-item"> Notifications</span>
                            </li>
                            <li>
                                <span className="slide-item"> Sweet alerts</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div >
    )
}
export default Sidebar;