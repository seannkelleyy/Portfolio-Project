import { useState } from 'react';
import { Memes } from '../Assets/Data/Memes';
import { PictureService } from '../Services/PictureServices';
import { GifService } from '../Services/GifServices';

const ImageSlider = () => {
    const [currentSliderImage, setCurrentSliderImage] = useState(0);
    const [current, setCurrent] = useState(0);
    const [memes, setMemes] = useState(Memes);
    
    const photoModes = [Memes, PictureService(), GifService()]

//-----------------Slider Logic-----------------//
    
const handleClick = () => { 
    if (current + 1 < photoModes.length) {
        setCurrentSliderImage(current === photoModes.length - 1 ? 0 : current + 1);
        setMemes(photoModes[current + 1]);
        setCurrent(current + 1);
    } else {
        setMemes(photoModes[0]);
        setCurrent(0);
    }
}
  const nextSlide = () => {
    if (currentSliderImage + 1 < memes.length) {
      setCurrentSliderImage(currentSliderImage + 1);
    } else {
      setCurrentSliderImage(0);
    }
  };

  const prevSlide = () => {
    if (currentSliderImage - 1 >= 0) {
      setCurrentSliderImage(currentSliderImage - 1);
    } else {
      setCurrentSliderImage(memes.length - 1);
    }
  };
     
    return (
        <div className='meme-slider'>
            <p>Thanks for visiting my portfolio, enjoy these memes/photos!</p>
        <div className="btn-group">
                <button onClick={handleClick}>{(current === 0) ? "Seans Memes" : (current === 1) ? "Pretty Photos" : "Trending Gifs"}</button>
        </div>
        <section className='slider'>         
            <button className='left-arrow' onClick={prevSlide}>⇐</button>
            <button className='right-arrow' onClick={nextSlide}>⇒</button>
            {memes.map((photo, index) => {
                return (
                    <div className={index === currentSliderImage ? 'active' : 'slide'} key={index}>
                        {index === currentSliderImage && (<img src={photo.image} alt='image' className='image'/>)}
                    </div>
                );
            })}
        </section>
    </div>
  );
};

export default ImageSlider;