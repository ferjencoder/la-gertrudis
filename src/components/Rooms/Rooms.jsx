


import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import './Rooms.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';

import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';


export const Rooms = () => {
  AOS.init();

  const [ t ] = useTranslation( "global" );

  const roomsJson = [
    {
      id: 1,

      name: t( "rooms.titleRooms.magnolia" ),
      imgTitle: t( "rooms.roomsSubTitle.matri" ),

      img1: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476352/la-gertrudis/Magnolia/_JAP2452_xfismf.jpg',
      img2: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476355/la-gertrudis/Magnolia/_JAP2454_za7jro.jpg',
      img3: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476351/la-gertrudis/Magnolia/_JAP2455_ljqew9.jpg',
      img4: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476355/la-gertrudis/Magnolia/_JAP2457_tuzdku.jpg',
      img5: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476353/la-gertrudis/Magnolia/_JAP2460_grjaks.jpg',

      personas: t( "rooms.person" ),
      baño: t( "rooms.bath.private" ),
      ropa: t( "rooms.towels" ),

      calefaccion: t( "rooms.heating" ),
      ducha: t( "rooms.shower.simple" ),
      secador: t( "rooms.dryer" ),

      wpp: 'https://wa.me/5492622532153?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Magnolia'
    },
    {
      id: 2,
      name: t( "rooms.titleRooms.laurel" ),
      imgTitle: t( "rooms.roomsSubTitle.quad" ),

      img1: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476330/la-gertrudis/Laurel/_JAP2434_lhk0zn.jpg',
      img2: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476332/la-gertrudis/Laurel/_JAP2438_erjfxo.jpg',
      img3: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476330/la-gertrudis/Laurel/_JAP2439_bi9yrw.jpg',
      img4: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476331/la-gertrudis/Laurel/_JAP2461_qim03l.jpg',
      img5: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476334/la-gertrudis/Laurel/_JAP2462_znm8kr.jpg',

      personas: t( "rooms.person4" ),
      baño: t( "rooms.bath.shared" ),
      ropa: t( "rooms.towels" ),

      calefaccion: t( "rooms.heating" ),
      ducha: t( "rooms.shower.simple" ),
      secador: t( "rooms.dryer" ),

      wpp: 'https://wa.me/5492622532153?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Laurel'
    },
    {
      id: 3,

      name: t( "rooms.titleRooms.tilo" ),
      imgTitle: t( "rooms.roomsSubTitle.matri" ),

      img1: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476368/la-gertrudis/Tilo/_JAP2441_oewtbi.jpg',
      img3: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476368/la-gertrudis/Tilo/_JAP2445_freow8.jpg',
      img2: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476370/la-gertrudis/Tilo/_JAP2446_qwpbd6.jpg',
      img4: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476370/la-gertrudis/Tilo/_JAP2448_gzm92w.jpg',
      img5: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476367/la-gertrudis/Tilo/_JAP2462_axm5tk.jpg',

      personas: t( "rooms.person" ),
      baño: t( "rooms.bath.shared" ),
      ropa: t( "rooms.towels" ),

      calefaccion: t( "rooms.heating" ),
      ducha: t( "rooms.shower.simple" ),
      secador: t( "rooms.dryer" ),

      wpp: 'https://wa.me/5492622532153?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Tilo'
    },
    {
      id: 4,
      name: t( "rooms.titleRooms.glicina" ),
      imgTitle: t( "rooms.roomsSubTitle.matri" ),

      img1: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476260/la-gertrudis/Glicia/image1_kjruc7.png',
      img2: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476260/la-gertrudis/Glicia/image2_yha0kj.png',
      img3: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476261/la-gertrudis/Glicia/image3_mlwue4.png',
      img4: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476262/la-gertrudis/Glicia/image4_e1ubfj.png',
      img5: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476261/la-gertrudis/Glicia/image5_a3ffj4.png',

      personas: t( "rooms.person" ),
      baño: t( "rooms.bath.private" ),
      ropa: t( "rooms.towels" ),

      calefaccion: t( "rooms.heating" ),
      ducha: t( "rooms.shower.hydro" ),
      secador: t( "rooms.dryer" ),

      wpp: 'https://wa.me/5492622532153?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Glicia'

    },
    {
      id: 5,
      name: t( "rooms.titleRooms.granada" ),

      imgTitle: t( "rooms.roomsSubTitle.matri" ),

      img1: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476283/la-gertrudis/Granada/_JAP2481_jrnvud.jpg',
      img2: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476283/la-gertrudis/Granada/_JAP2470_xgssyc.jpg',
      img3: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476281/la-gertrudis/Granada/_JAP2471_na0le6.jpg',
      img4: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476277/la-gertrudis/Granada/_EGR1744_fpiuqi.jpg',
      img5: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476275/la-gertrudis/Granada/image37_tl1ema.png',

      personas: t( "rooms.person" ),
      baño: t( "rooms.bath.private" ),
      ropa: t( "rooms.towels" ),

      calefaccion: t( "rooms.heating" ),
      ducha: t( "rooms.shower.hydro" ),
      secador: t( "rooms.dryer" ),

      wpp: 'https://wa.me/5492622532153?text=Hola!%20Quisiera%20consultar%20Precio%20y%20Disponibilidad%20sobre%20la%20Habitación%20Granada'

    }

  ];

  return ( <>

    <div className="container__title-rooms" data-aos="fade-right">
      <h1 className="title__rooms">{t( "rooms.title" )}</h1>

    </div>
    <section id="rooms" className="rooms__container">



      <div className="rooms" >


        {
          roomsJson.map( ( item ) => {
            return (
              <article key={item.id} className="rooms__contain-article" data-aos="fade-up">

                <div className="rooms__contain" >



                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    effect={"fade"}
                    pagination={{
                      clickable: true,
                    }}



                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: true
                    }}
                    modules={[ Autoplay, Pagination, EffectFade ]}
                    className="rooms__swiper">

                    <p className="rooms__img-title">
                      {item.imgTitle}
                    </p>

                    <SwiperSlide>
                      <img src={item.img1} alt={item.id} />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={item.img2} alt={item.id} />
                    </SwiperSlide >

                    <SwiperSlide>
                      <img src={item.img3} alt={item.id} />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={item.img4} alt={item.id} />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={item.img5} alt={item.id} />
                    </SwiperSlide>


                  </Swiper>
                  <div className="rooms__container-description">

                    <h1 className="rooms__name">{item.name}</h1>
                    <div className="linear"></div>

                    <div className="rooms__container-icons">
                      <span>
                        <img
                          src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476311/la-gertrudis/IconsCards/Icon_zjaqw6.png"
                          alt="Icono de personas" />
                        <p>{item.personas}</p>
                      </span>
                      <span>
                        <img
                          src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476311/la-gertrudis/IconsCards/calefaccion_dq9rtc.png"
                          alt="Icono de calefacción" />
                        <p>{item.calefaccion}</p>
                      </span>
                      <span>
                        <img
                          src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476311/la-gertrudis/IconsCards/ba%C3%B1o_smqzlt.png"
                          alt="Icono de baño" />
                        <p>{item.baño}</p>
                      </span>
                      <span>
                        <img
                          src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476311/la-gertrudis/IconsCards/ducha_whxbwr.png"
                          alt="Icono de ducha" />
                        <p>{item.ducha}</p>
                      </span>
                      <span>
                        <img
                          src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476311/la-gertrudis/IconsCards/ropablanco_vfgpfa.png"
                          alt="Icono de ropa blancos" />
                        <p>{item.ropa}</p>
                      </span>
                      <span>
                        <img
                          src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476311/la-gertrudis/IconsCards/secador_luddmc.png"
                          alt="Icono de secador de cabello" />
                        <p>{item.secador}</p>
                      </span>
                    </div>



                    <a className="button__consultar" href={item.wpp} target="_blank" rel="noopener noreferrer"> <FaWhatsapp /> Consultar</a>
                  </div>

                </div>

              </article>

            )
          } )
        }

      </div>

    </section>

  </>
  )
};