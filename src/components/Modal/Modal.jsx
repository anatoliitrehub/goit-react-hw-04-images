// import { Component } from 'react';
// import { useEffect, useRef } from 'react';
import st from './Modal.module.css';
import PropTypes from 'prop-types';


const Modal =({modalOpen,modalClose,gallery,imgId}) => {
  const currentImg = gallery.filter(
    el => el.id === imgId
  );

  if (modalOpen){
    // console.log("addEvents",document.body)
    document.body.addEventListener('keydown', ev => handlerModalClose(ev), false);
    document.body.addEventListener('click', ev => handlerModalClose(ev), false);
  
}

  const handlerModalClose = (e) => {
    if (e.key === 'Escape' || e.target.localName === 'div') {
      // console.log('removeEvents',e.currentTarget);
      document.body.removeEventListener('keydown', handlerModalClose, false);
      document.body.removeEventListener('click', handlerModalClose, false);
      modalClose();
    }
  }


    return (
      <>
        <div className={st.Overlay}>
          <div className={st.Modal}>
            <img src={currentImg[0].largeImageURL} alt={currentImg[0].tags} />
          </div>
        </div>
      </>
    );
  }


Modal.propTypes={
  modalOpen:PropTypes.bool.isRequired,
  modalClose:PropTypes.func.isRequired,
  gallery:PropTypes.array.isRequired,
  imgId:PropTypes.number.isRequired
}

export default Modal;
