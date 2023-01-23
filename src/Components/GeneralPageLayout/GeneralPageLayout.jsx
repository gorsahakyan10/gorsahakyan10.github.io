import React from 'react';
import './GeneralPageLayout.css';
import { NavLink, Outlet} from 'react-router-dom';
import  facebookLogo  from './img/socialNetworks/Facebook_Logo_(2019).png.webp';
import  instagramLogo from './img/socialNetworks/Instagram_logo_2016.svg.webp';

export const GeneralPageLayout = () => {
  return (
    <div className='App'>
        <header>
            <div className="Header_Logo"></div>
            <div className="Header_Links">
                <NavLink to="/">ԳԼԽԱՎՈՐ</NavLink>
                <NavLink to="about-us">ՄԵՐ ՄԱՍԻՆ</NavLink>
                <NavLink to="menu">ՄԵՆՅՈՒ</NavLink>
                <NavLink to="delivery">ԱՌԱՔՈՒՄ</NavLink>
                <NavLink to="contacts">ԿԱՊ</NavLink>
            </div>
            <div className="Contacts">
                <div className="Phone">
                    <span>(055)-55-06-65</span>
                </div>
            </div>
        </header>
        <div className="Content">
            <aside className='Aside_Left'></aside>
                <main><Outlet/></main>
            <aside className='Aside_Right'></aside>
            <footer>
                <span>{'☚'}BINGO BISTRO</span>
            </footer>
        </div>
    </div>
  )
}
