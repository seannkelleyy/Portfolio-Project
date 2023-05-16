
import { useState } from 'react';
import { Memes } from './Memes';

const ImageSlider = ( slides ) => {
  const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        if (Memes[current + 1]) {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }
        else {
            setCurrent(0)
        }
  };

  const prevSlide = () => {
    if (current - 1 >= 0) {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    else {
        setCurrent(Memes.length - 1)
    }
  };



    return (
    <>
        <p className='larger-margin'>Thanks for visiting my portfolio, enjoy these memes!</p>
        <section className='slider'>         
            <button className='left-arrow' onClick={prevSlide}>⇐</button>
            <button className='right-arrow' onClick={nextSlide}>⇒</button>
            {Memes.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'active' : 'slide'}
                        key={index}>
                        {index === current && (
                        <img src={slide.meme} alt='meme' className='image' />)}
                    </div>
                );
            })}
        </section>
    </>
  );
};

export default ImageSlider;