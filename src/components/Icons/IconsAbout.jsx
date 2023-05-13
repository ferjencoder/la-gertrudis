

import { useTranslation } from 'react-i18next'


export const IconsAbout = () => {

    const [ t ] = useTranslation( "global" );

    const iconsAbout = [


        {
            id: 1,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476297/la-gertrudis/iconos/ropadeblanco_qenqsq.png',
            title: t( "about.sheets" )
        },

        {
            id: 2,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476296/la-gertrudis/iconos/desayuno_w0kbxm.png',
            title: t( "about.breakfast" )
        },

        {
            id: 3,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476296/la-gertrudis/iconos/calefacci%C3%B3n_gaqlqj.png',
            title: t( "about.heating" )
        },

        {
            id: 4,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476296/la-gertrudis/iconos/calefacci%C3%B3nale%C3%B1a_pfuzbc.png',
            title: t( "about.fireplace" )
        },

        {
            id: 5,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476296/la-gertrudis/iconos/pileta_chhdot.png',
            title: t( "about.swim" )
        },

        {
            id: 6,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476296/la-gertrudis/iconos/Frame_dvwpmk.png',
            title: "Ping Pong"
        },

        {
            id: 7,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476297/la-gertrudis/iconos/tv_kn3clz.png',
            title: t( "about.tv" )
        },

        {
            id: 8,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476297/la-gertrudis/iconos/wifi_hovk5h.png',
            title: "WiFi"
        },

        {
            id: 9,
            img: 'https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476297/la-gertrudis/iconos/vaca_jihw9s.png',
            title: t( "about.farm" )
        },
    ];

    return ( <>
        <div className='about__container-icons' data-aos="fade-right" >

            {
                iconsAbout.map( ( item ) => {
                    return (
                        <span key={item.id} >
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </span>

                    )
                } )
            }


        </div>
    </>

    )
};