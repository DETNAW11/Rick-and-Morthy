import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyles.module.css'
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = ({onSearch}) => {

  return (
    <nav className={Navstyle.nav}>
      <div className={Navstyle.scaleupLeft}>
        <div className={Navstyle.imagenNav}>
          <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-ruefers-deviantart-22.png" alt="R&M" />
        </div>
      </div>

      <div className={Navstyle.botones}>
        <div className={Navstyle.scaleupVerticalcenter}>
          <div className={Navstyle.links}>
            <NavLink to='/home' className={Navstyle.link}>
              <img src="https://www.pngall.com/wp-content/uploads/2016/04/Home-Download-PNG.png" className={Navstyle.icon} />
              HOME
              <span className={Navstyle.underline}></span>
            </NavLink>
          
            <NavLink to='/favorites' className={Navstyle.link}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png" className={Navstyle.icon} />
              FAVORITES
              <span className={Navstyle.underline}></span>
            </NavLink>
          
            <NavLink to='/about' className={Navstyle.link}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Eo_circle_amber_info.svg/1200px-Eo_circle_amber_info.svg.png" className={Navstyle.icon} />
              ABOUT
              <span className={Navstyle.underline}></span>
            </NavLink>

            <SearchBar onSearch={onSearch}/>

            <NavLink to='/' className={Navstyle.link}>
              <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-face-kushmastafresh-deviantart-19.png" className={Navstyle.icon} />
              <span className={Navstyle.logoutText}>LOGOUT</span>
              <span className={Navstyle.underline}></span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
