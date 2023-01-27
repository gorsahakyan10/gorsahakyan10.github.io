import React from 'react';
import './GeneralPageLayout.css';
import { NavLink, Outlet} from 'react-router-dom';
import  facebookLogo  from './img/socialNetworks/Facebook_Logo_(2019).png.webp';
import  instagramLogo from './img/socialNetworks/Instagram_logo_2016.svg.webp';

export const GeneralPageLayout = () => {
  return (
    <div className='App'>
        <header>
            <NavLink to={'/'}><div className="Header_Logo"></div></NavLink>
            <div className="Header_Links">
                <NavLink to="/">ՄԵՆՅՈՒ</NavLink>
                <NavLink to="about-us">ՄԵՐ ՄԱՍԻՆ</NavLink>
            </div>
            <div className="Contacts">
                <div className="Phone">
                    <span className='Delivery'>ՊԱՏՎԻՐԵՔ</span>
                    <span>(055)-55-06-65</span>
                </div>
            </div>
        </header>
        <div className="Content">
            <aside className='Aside_Left'></aside>
                <main><Outlet/></main>
            <aside className='Aside_Right'></aside>
            <footer>
                <div className="Contacts">
                    <div className="Social_Networks">
                        <a href="https://www.instagram.com/ping_wen_chen/">
                            <img src="https://i.pinimg.com/736x/4e/f8/5a/4ef85aede61a7fa1f9c884e9b06e5ac6.jpg" alt="Instagram" /> 
                        </a>
                        <a href="https://www.facebook.com/Bingo-Bistro-Gyumri-104286111841733">
                            <img src="https://i.pinimg.com/564x/5a/41/07/5a41070fd123e5f706aae22cca82dc39.jpg" alt="Facebook" />
                        </a>
                    </div>
                </div>
                <div className='BingoBistroAnimate'>
                    <span>{'◄'}BINGO BISTRO</span>
                </div>
            </footer>
        </div>
    </div>
  )
}
