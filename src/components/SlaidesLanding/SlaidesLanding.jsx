

import './slaidesLanding.css'

import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/free-mode";


export const SlaidesLanding = () => {
    return (
        <>

            <div className="swiper__content">
                <Swiper
                    modules={[ Autoplay, FreeMode ]}


                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },

                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}


                    freeMode
                    loop
                    speed={5000}


                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }} >

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476190/la-gertrudis/dropped/camamatrimonial_he8hyy.jpg" alt="Imagen de Cama matrimonial" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476187/la-gertrudis/dropped/hogar_sgx5tw.jpg" alt="Imagen del Hogar" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476189/la-gertrudis/dropped/camas_wbmh65.jpg" alt="Imagen de camas" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476189/la-gertrudis/dropped/ba%C3%B1o_zufr5w.jpg" alt="Imagen de baño" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476188/la-gertrudis/dropped/pool_j2tjwf.jpg" alt="Imagen de la mesa de pool" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476187/la-gertrudis/dropped/merienda_u250mp.jpg" alt="Imagen de la merienda" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476185/la-gertrudis/dropped/desayuno_tszpz2.jpg" alt="Imagen del desayuno" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476186/la-gertrudis/dropped/pileta_ypk4ih.jpg" alt="Imagen de la pileta" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}