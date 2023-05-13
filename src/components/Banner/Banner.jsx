

import './Banner.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTranslation } from 'react-i18next'


export const Banner = () => {

    AOS.init();

    const [ t ] = useTranslation( "global" );

    return (
        <div className="bannerContainer">
            <div className="bannerImage">
                <div className="bannerContent">
                    <span className="bannerTitle">{t( "banner.title" )}</span>
                    <span className="bannerSubtitle">{t( "banner.subtitle" )}</span>
                    <div className="bannerButtons">

                        <a href="/rooms" className="bannerHabitaciones" data-aos="fade-down" data-aos-offset="200">{t( "banner.btnRoom" )}</a>


                        <a href="#contact" className="bannerReservar" data-aos="fade-up" data-aos-offset="200">{t( "banner.btnBook" )}</a>

                    </div>
                </div>
            </div>
        </div>
    )
};