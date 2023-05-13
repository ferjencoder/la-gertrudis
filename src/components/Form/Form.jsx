import { useRef } from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Form.css'

import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next'

export const Form = () => {

    const [ t ] = useTranslation( "global" );

    const form = useRef();

    const sendEmail = ( e ) => {
        e.preventDefault();

        emailjs.sendForm( 'service_cis5mwk', 'template_mwhaiod', form.current, 'OM6m-z0VAdWOqKnEq' )
            .then( ( result ) => {

                Swal.fire( {
                    position: 'center',
                    icon: 'success',
                    title: 'Mensaje enviado',
                    background: '#535c3ebe',
                    color: '#ffff',
                    showConfirmButton: false,
                    timer: 1500
                } )
                console.log( result.text );

                e.target.reset();


            }, ( error ) => {
                Swal.fire( {
                    position: 'center',
                    icon: 'error',
                    title: 'Error de envio',
                    showConfirmButton: false,
                    timer: 1500
                } )
                console.error( error.text );

            } );
    };

    return (
        <div className="formSection" id="contact">
            <div className="formContainer">
                <h3 className="formTitle">{t( "form.title" )}</h3>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <TextField
                        id="outlined-basic"
                        label={t( "form.name" )}
                        variant="outlined"
                        className="formInput"
                        color="grey"
                        type="text"
                        name="name"
                        required={true}
                    />
                    <TextField
                        id="outlined-basic"
                        label={t( "form.mail" )}
                        variant="outlined"
                        className="formInput"
                        color="grey"
                        type="email"
                        name="email"
                        required={true}

                    />
                    <TextField
                        id="outlined-textarea"
                        label={t( "form.message" )}
                        multiline
                        rows={8}
                        className="formTxt"
                        color="grey"
                        name="message"
                        required={true}

                    />
                    <Button type="submit" variant="contained" className="btnForm">{t( "form.send" )}</Button>
                </form>
            </div>
        </div>
    )
};