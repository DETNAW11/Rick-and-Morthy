import React from "react";
import SearchBar from "../Search/SearchBar";
import Navstyle from './Navstyle.module.css'
import { Link, NavLink, useLocation } from "react-router-dom";


const NavBar = ({onSearch}) => {

/*   const location = useLocation();

  const randomCharacter = () => {
    const idRandom = Math.floor(Math.random() * 826);
    onSearch(idRandom);

    const handleLogOut = () => {
      setAccess(false);
    }
 } */

    return (
      <nav className={Navstyle.nav}>
          
          <div className={Navstyle.scaleupLeft}>
          <div className={Navstyle.imagenNav}>
            <img src= "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-ruefers-deviantart-22.png"
            alt="R&M" />
          </div> </div>

        <div className={Navstyle.botones}>
          <div className={Navstyle.scaleupVerticalcenter}>
          <div className={Navstyle.links}>
          <NavLink to='/home' className={({isActive}) => isActive ? Navstyle.active : Navstyle.home}>
            <img src="https://www.pngall.com/wp-content/uploads/2016/04/Home-Download-PNG.png"
            style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.6em' }}/>
      
              HOME
            </NavLink>
          
            {/* { location.pathname === '/home' ? 
            (<button className={Navstyle.home} onClick={randomCharacter}>RANDOM CHARACTHER</button>) 
          : null} */}
           
          <NavLink to='/favorites' className={({isActive}) => isActive ? Navstyle.activeFav : Navstyle.favorites}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png"
           style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.3em' }} />
            
            FAVORITES
          </NavLink>
          
      
            <NavLink to='/about' className={({isActive}) => isActive ? Navstyle.active : Navstyle.about}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Eo_circle_amber_info.svg/1200px-Eo_circle_amber_info.svg.png"
             style={{ width: '1.2em', height: '1.2em', marginRight: '0.2em', marginLeft: '1.5em' }}/>
            
             ABOUT
            </NavLink>

          <SearchBar onSearch={onSearch}/>

             {/* <button onClick={handleLogOut}>LOGOUT</button> */}
             
             <NavLink to='/' className={({isActive}) => isActive ? Navstyle.active : Navstyle.logout}>
            <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-face-kushmastafresh-deviantart-19.png" style={{ width: '1.4em', height: '1.2em', marginRight: '0.2em', marginLeft: '0.4em' }}></img>
             {/* LOGOUT */}<span className="material-symbols-outlined">
            logout
            </span>
            </NavLink>

          </div>
          </div>
        </div>
      </nav>
      )
}

export default NavBar;