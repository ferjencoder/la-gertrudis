import { GalleryItem } from "../GalleryItem/GalleryItem";
import { galleryImage } from "../../Utils/imageMock";
import Breakpoint from "../Breakpoints/Breakpoints";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Gallery.css'


export const Gallery = () => {

    return (
        <>
            <Breakpoint at="xs">
                <div className="galeryContainer" >
                    <Swiper
                        className="mySwiper"
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[ Grid, Pagination, Navigation ]}
                    >
                        {galleryImage.map( image => {
                            return (

                                <SwiperSlide key={image.id}>

                                    <GalleryItem image={image} key={image.id} />

                                </SwiperSlide>
                            )
                        } )
                        }
                    </Swiper>
                </div>
            </Breakpoint>

            <Breakpoint at="sm">
                <div className="galeryContainer">
                    <Swiper
                        className="mySwiper2"
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={true}
                        modules={[ Grid, Pagination, Navigation ]}
                    >
                        {galleryImage.map( image => {
                            return (
                                <SwiperSlide key={image.id}>

                                    <GalleryItem image={image} key={image.id} />

                                </SwiperSlide>
                            )
                        } )
                        }
                    </Swiper>

                </div>
            </Breakpoint>

            <Breakpoint at="md">
                <div className="galeryContainer">
                    <Swiper
                        className="mySwiper3"
                        slidesPerView={2}
                        spaceBetween={10}
                        navigation={true}
                        modules={[ Grid, Pagination, Navigation ]}
                    >
                        {galleryImage.map( image => {
                            return (
                                <SwiperSlide key={image.id}>

                                    <GalleryItem image={image} key={image.id} />

                                </SwiperSlide>
                            )
                        } )
                        }
                    </Swiper>

                </div>
            </Breakpoint>

            <Breakpoint at="lg">
                <div className="galeryContainer">
                    {galleryImage.map( image => {
                        return (

                            <GalleryItem key={image.id} image={image} />

                        )
                    } )
                    }
                </div>
            </Breakpoint>
        </>
    )
};