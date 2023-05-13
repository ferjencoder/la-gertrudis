

import { SlaidesLanding } from '../SlaidesLanding/SlaidesLanding'
import { useTranslation } from 'react-i18next'

import './about.css'
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { IconsAbout } from '../Icons/IconsAbout';


export const About = () => {

    AOS.init();

    const [ t ] = useTranslation( "global" );

    return (
        <>
            <section className='about__container' id="about">
                <article className='about__article-header '>
                    <div className='about__contain' data-aos="fade-right" >
                        <h1>{t( "about.titleAboutUs" )}</h1>
                        <p>{t( "about.textAboutUs" )}</p>
                    </div>

                    <img
                        src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476186/la-gertrudis/dropped/familia_pqxpsr.png"
                        alt="Familia de La Gertrudis"
                        data-aos="fade-up"
                    />

                </article>

                <article className='about_article-main'  >
                    <div className='about__container-description' data-aos="fade-right"
                    >
                        <h2>{t( "about.titleOurAmenities" )}</h2>
                        <p>{t( "about.textOurAmenities" )}</p>
                    </div>

                    <IconsAbout />

                </article>
                <SlaidesLanding />

            </section>

        </>

    )
};