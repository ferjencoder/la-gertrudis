import { IconInstagram, IconMail, IconWhatsapp } from '../Icons/IconsSocial';
import './Footer.css'

import { useTranslation } from 'react-i18next'

export const Footer = () => {

    const [ t ] = useTranslation( "global" );

    return (

        <div className="footer">

            <div>
                <img
                    src="https://res.cloudinary.com/ds0dc8rd0/image/upload/v1683476184/la-gertrudis/dropped/Logo_LaGertrudis_rhy7ic.svg"
                    alt="Logo de La Gertrudis" />

                <div className="footerIcons">

                    <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img
                            className="svgIcon"
                            src={t( "iconsSocial.0.img" )}
                            alt={t( "iconsSocial.0.alt" )}
                        />
                    </a>

                    <a href="https://wa.me/5492622469691" target="_blank" rel="noopener noreferrer">

                        <img
                            className="svgIcon"
                            src={t( "iconsSocial.2.img" )}
                            alt={t( "iconsSocial.2.alt" )}
                        />
                    </a>

                    <a href="https://www.instagram.com/lagertrudis.sancarlos/" target="_blank" rel="noopener noreferrer">

                        <img
                            className="svgIcon"
                            src={t( "iconsSocial.1.img" )}
                            alt={t( "iconsSocial.1.alt" )}
                        />
                    </a>

                </div>
            </div>

            <div className="footerSection footerSection2">
                <h3>{t( "footer.contact" )}</h3>
                <span>+54 9 2622 469 691</span>
            </div>
            <div className="footerSection">
                <h3>{t( "footer.location" )}</h3>
                <span>Ruta 40</span>
                <span>Frente a INTA La Consulta</span>
                <span>M5567 La Consulta</span>
                <span>Mendoza</span>
                <span>Argentina</span>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.03032237151!2d-69.07905338431172!3d-33.708164280700956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967c3d4320e67a71%3A0xa2fed054cb158bb9!2sLa%20Gertrudis%20Casa%20de%20Campo!5e0!3m2!1sen!2spe!4v1663790759184!5m2!1sen!2spe" width="325" height="200" loading="lazy" title='La Gertrudis map'></iframe>
            </div>
        </div>
    )
};
