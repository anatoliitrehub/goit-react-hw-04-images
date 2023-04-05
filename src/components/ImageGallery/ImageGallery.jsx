// import { Component } from 'react';
// import { useState } from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({gallery,activeImg}) => {
  
    return (
      <>
        {gallery.length === 0 ? (
          <div>There are nothing search result</div>
        ) : (
          <ul className={s.ImageGallery}>
            {gallery.map(el => {
              return (
                <>
                  <ImageGalleryItem
                    key={el.id}
                    webformatURL={el.webformatURL}
                    largeImageURL={el.largeImageURL}
                    tag={el.tags}
                    elId={el.id}
                    activeImg={activeImg}
                  />
                </>
              );
            })}
          </ul>
        )}
      </>
    );
  }


ImageGallery.propTypes={
  gallery:PropTypes.array.isRequired
}

export default ImageGallery;
