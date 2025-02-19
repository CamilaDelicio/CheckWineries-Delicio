import "./dato-bodega";
import "../index.css";
import React from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const CarruselBodega =   ({images}) =>{
    const GalleryImages = images.map((image)=> ({
    original: image,
    thumbnail: image
    }));
return (
    <div className="carrusel-bodega">
        <ImageGallery items={GalleryImages}
        showThumbnails={false} 
        showFullscreenButton={false} 
        showPlayButton={false} 
         />
        
        </div>
      );

    };
 export default CarruselBodega;



