

import './arrow.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


export const Arrow = () => {
  AOS.init();

  return (
    <>
      <div className='arrow__container' data-aos="fade-up" >

        <a href="#top">
          <img
            src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683927242/la-gertrudis/iconos/flotante_uytjeo.png"
            alt="Flecha flotante para ir al extremo superior de la web." />
        </a>
      </div>

    </>

  )
};