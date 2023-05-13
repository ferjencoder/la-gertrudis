


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import './GalleryItem.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { IconClose } from '../Icons/IconsSocial';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const GalleryItem = ( { image } ) => {

  AOS.init();

  const [ open, setOpen ] = useState( false );
  const handleOpen = () => setOpen( true );
  const handleClose = () => setOpen( false );

  return (
    <div id="gallery">
      <Button
        className="galeryImg"
        onClick={handleOpen}>
        <img key={image.id} src={`${image}`} alt='imagen' data-aos="fade-up" />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style} key={`${image.id}`}>

          <IconClose onClick={handleClose} />

          <img
            key={image.id}
            src={`${image}`}
            alt='imagen'
            data-aos="fade-up" />
        </Box>

      </Modal>

    </div>
  );
}