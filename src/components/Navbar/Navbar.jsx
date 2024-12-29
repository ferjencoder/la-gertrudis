import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import Breakpoint from "../Breakpoints/Breakpoints";

import './navbar.css';
import 'animate.css';
import { IconInstagram, IconMail, IconMenu, IconWhatsapp } from '../Icons/IconsSocial';

export const Navbar = () => {

  const [ t, i18n ] = useTranslation( "global" );

  const [ menu, setMenu ] = useState( false );
  const handleClick = () => {
    if ( !menu ) {
      setMenu( true )
    }
    else {
      setMenu( false )
    }
  }
  return (
    <>

      <Breakpoint at="lg">
        <nav>
          <ul className='nav__container'>

            <NavLink to="/#">
              <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683927565/la-gertrudis/iconos/Logo_LaGertrudis_apfpto.png"
                alt="La Gertrudis Logo" />
            </NavLink>
            <NavLink to="/#">{t( "nav.home" )}</NavLink>
            <HashLink smooth to="/#about">{t( "nav.aboutUs" )}</HashLink >
            <NavLink to="/rooms">{t( "nav.rooms" )}</NavLink>
            <HashLink smooth to="/#gallery">{t( "nav.gallery" )}</HashLink >
          </ul>

          <ul className='links__container' >
            <div className='translate__container'>
              <button onClick={() => i18n.changeLanguage( "es" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Argentina_suclkk.png" alt="Argentina" />
              </button>
              <button onClick={() => i18n.changeLanguage( "en" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/USA_joib9s.png" alt="USA" />
              </button>
              <button onClick={() => i18n.changeLanguage( "de" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957078/la-gertrudis/iconos/Germany_ey0or8.png" alt="Germany" />
              </button>
              <button onClick={() => i18n.changeLanguage( "se" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Sweeden_pvqakt.png" alt="Sweeden" />
              </button>
            </div>

            <div className='line'></div>
            <div className="navIcons">
              <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconMail />
              </a>
              <a href="https://wa.me/5492612093631" target="_blank" rel="noopener noreferrer">
                <IconWhatsapp />
              </a>
              <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer">
                <IconInstagram />
              </a>
            </div>
            <a href="/#contact" className='button__reserva'>{t( "nav.book" )}</a>
          </ul>
        </nav>
      </Breakpoint>

      <Breakpoint at="md">
        <nav className="responsiveNavMd">
          <ul className='nav__container'>

            <NavLink to="/#">
              <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683927565/la-gertrudis/iconos/Logo_LaGertrudis_apfpto.png" alt="La Gertrudis Logo" />
            </NavLink>
            <NavLink to="/#">{t( "nav.home" )}
            </NavLink>
            <HashLink smooth to="/#about">{t( "nav.aboutUs" )}
            </HashLink >
            <NavLink to="/rooms">{t( "nav.rooms" )}
            </NavLink>
            <HashLink smooth to="/#gallery">{t( "nav.gallery" )}
            </HashLink >
          </ul>

          <ul className='links__container' >
            <div className='translate__container'>
              <button onClick={() => i18n.changeLanguage( "es" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Argentina_suclkk.png" alt="Argentina" />
              </button>
              <button onClick={() => i18n.changeLanguage( "en" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/USA_joib9s.png" alt="USA" />
              </button>
              <button onClick={() => i18n.changeLanguage( "de" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957078/la-gertrudis/iconos/Germany_ey0or8.png" alt="Germany" />
              </button>
              <button onClick={() => i18n.changeLanguage( "se" )} className="button__translate">
                <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Sweeden_pvqakt.png" alt="Sweeden" />
              </button>
            </div>

            <div className='line'></div>
            <div className="navIcons">
              <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer"> <IconMail /></a>
              <a href="https://wa.me/5492612093631" target="_blank" rel="noopener noreferrer"> <IconWhatsapp /></a>
              <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer"> <IconInstagram /></a>
            </div>
            <a href="/#contact" className='button__reserva'>{t( "nav.book" )}</a>
          </ul>
        </nav>
      </Breakpoint>

      <Breakpoint at="sm" >
        <nav className="responsiveNavXs">
          <div onClick={handleClick} className="menuIcon"><IconMenu /></div>
          {menu &&
            <div
              className="navMenu animate__animated animate__slideInLeft" onClick={handleClick}
            >
              <IconWhatsapp className="closeMenu" onClick={handleClick} />
              <ul className="navLinks">
                <NavLink to="/#">
                  <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683927565/la-gertrudis/iconos/Logo_LaGertrudis_at6diq.svg" alt="La Gestrudis logo" />
                </NavLink>
                <NavLink to="/#">{t( "nav.home" )}</NavLink>
                <HashLink smooth to="/#about">{t( "nav.aboutUs" )}</HashLink >
                <NavLink to="/rooms">{t( "nav.rooms" )}</NavLink>
                <HashLink smooth to="/#gallery">{t( "nav.gallery" )}</HashLink >
              </ul>

              <ul className='links__container' >
                <div className='translate__container'>
                  <button onClick={() => i18n.changeLanguage( "es" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Argentina_suclkk.png" alt="Argentina" />
                  </button>
                  <button onClick={() => i18n.changeLanguage( "en" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/USA_joib9s.png" alt="USA" />
                  </button>
                  <button onClick={() => i18n.changeLanguage( "de" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957078/la-gertrudis/iconos/Germany_ey0or8.png" alt="Germany" />
                  </button>
                  <button onClick={() => i18n.changeLanguage( "se" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Sweeden_pvqakt.png" alt="Sweeden" />
                  </button>
                </div>

                <div className='line'></div>
                <div className="navIcons">
                  <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer"> <IconMail /></a>
                  <a href="https://wa.me/5492612093631" target="_blank" rel="noopener noreferrer"> <IconWhatsapp /></a>
                  <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer"> <IconInstagram /></a>
                </div>
                <a href="/#contact" className='button__reserva'>{t( "nav.book" )}</a>
              </ul>

            </div>
          }
          <NavLink to="/#">
            <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683927565/la-gertrudis/iconos/Logo_LaGertrudis_at6diq.svg" alt="La Gestrudis logo" />
          </NavLink>
        </nav>
      </Breakpoint>

      <Breakpoint at="xs" >
        <nav className="responsiveNavXs">
          <div onClick={handleClick} className="menuIcon"><IconMenu /></div>
          {menu &&
            <div
              className="navMenu animate__animated animate__slideInLeft" onClick={handleClick}
            >
              <AiOutlineCloseCircle className="closeMenu" onClick={handleClick} />
              <ul className="navLinks">
                <NavLink href="/#"><img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683927565/la-gertrudis/iconos/Logo_LaGertrudis_at6diq.svg" alt="La Gestrudis logo" /></NavLink>
                <NavLink to="/#">{t( "nav.home" )}</NavLink>
                <HashLink smooth to="/#about">{t( "nav.aboutUs" )}</HashLink >
                <NavLink to="/rooms">{t( "nav.rooms" )}</NavLink>
                <HashLink smooth to="/#gallery">{t( "nav.gallery" )}</HashLink >
              </ul>

              <ul className='links__container' >
                <div className='translate__container'>
                  <button onClick={() => i18n.changeLanguage( "es" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Argentina_suclkk.png" alt="Argentina" />
                  </button>
                  <button onClick={() => i18n.changeLanguage( "en" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/USA_joib9s.png" alt="USA" />
                  </button>
                  <button onClick={() => i18n.changeLanguage( "de" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957078/la-gertrudis/iconos/Germany_ey0or8.png" alt="Germany" />
                  </button>
                  <button onClick={() => i18n.changeLanguage( "se" )} className="button__translate">
                    <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683957079/la-gertrudis/iconos/Sweeden_pvqakt.png" alt="Sweeden" />
                  </button>
                </div>

                <div className='line'></div>
                <div className="navIcons">
                  <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer"> <HiOutlineMail /></a>
                  <a href="https://wa.me/5492612093631" target="_blank" rel="noopener noreferrer"> <IconWhatsapp /></a>
                  <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer"> <IconInstagram /></a>
                </div>
                <a href="/#contact" className='button__reserva'>{t( "nav.book" )}</a>
              </ul>

            </div>

          }
          <NavLink href="/#">
            <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683927565/la-gertrudis/iconos/Logo_LaGertrudis_at6diq.svg" alt="La Gestrudis logo" />
          </NavLink>
        </nav>
      </Breakpoint>

    </>
  )
};
