


import { About } from '../About/About';
import { Banner } from '../Banner/Banner';
import { Form } from '../Form/Form';
import { Gallery } from '../Gallery/Gallery';
import { Reviews } from '../Reviews/Reviews';
import './header.css'



export const Header = () => {

  return (
    <>
      <header className='header__landing'>
        <div className='front_contain_img'>
        </div>
      </header>
      <About />
      <Reviews />
      <Banner />
      <Gallery />
      <Form />

    </>
  )
};