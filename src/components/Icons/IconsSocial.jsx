

import { useTranslation } from 'react-i18next';


export const IconsSocial = () => {

    const [ t ] = useTranslation( "global" );

    return (
        <>
            <div className='about__container-icons' data-aos="fade-right" >

                {
                    t( "iconsSocial" ).map( ( { icon } ) => {
                        return (
                            <span key={icon.name} >
                                <img
                                    className="icon__social"
                                    key={icon.name}
                                    src={icon.img}
                                    alt={icon.alt}
                                />
                            </span>
                        )
                    } )
                }


            </div>
        </>

    )
};

export const IconClose = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='about__container-icons' data-aos="fade-right" >

            <span>
                <img
                    className="icon__social"
                    src={t( "icons.close.img" )}
                    alt={t( "icons.close.alt" )} />
            </span>
        </div>
    )

};

export const IconMenu = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='about__container-icons' data-aos="fade-right" >

            <span>
                <img
                    className="icon__social"
                    src={t( "icons.menu.img" )}
                    alt={t( "icons.menu.alt" )} />
            </span>
        </div>
    )

};

export const IconMailSent = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='about__container-icons' data-aos="fade-right" >

            <span>
                <img
                    className="icon__social"
                    src={t( "icons.mailSent.img" )}
                    alt={t( "icons.mailSent.alt" )} />
            </span>
        </div>
    )

};

export const IconMail = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='about__container-icons' data-aos="fade-right" >

            <span>
                <img
                    className="icon__social"
                    src={t( "iconsSocial.0.img" )}
                    alt={t( "iconsSocial.0..alt" )} />
            </span>
        </div>
    )

};

export const IconInstagram = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='about__container-icons' data-aos="fade-right" >

            <span>
                <img
                    className="icon__social"
                    src={t( "iconsSocial.1.img" )}
                    alt={t( "iconsSocial.1.alt" )} />
            </span>
        </div>
    )

};

export const IconWhatsapp = () => {
    const [ t ] = useTranslation( "global" );

    return (
        <div className='about__container-icons' data-aos="fade-right" >

            <span>
                <img
                    className="icon__social"
                    src={t( "iconsSocial.2.img" )}
                    alt={t( "iconsSocial.2.alt" )} />
            </span>
        </div>
    )
};
