import { useState, useEffect } from 'react';
import { Memes } from './Memes';
import axios from 'axios';

const ImageSlider = () => {
    const [currentSliderImage, setCurrentSliderImage] = useState(0);
    const [current, setCurrent] = useState(0);
    const [photos, setPhotos] = useState(Memes);
    const [pictures, setPictures] = useState([]);
    const [gifs, setGifs] = useState([]);

//-----------------API CALLS-----------------//
    useEffect(() => {
        axios.get('https://picsum.photos/v2/list?page=2&limit=10')
            .then(({ data }) => {
                const formattedPictures = data.slice(0, 10).map((picture) => ({
                    image: picture.download_url,
                }));
                setPictures(formattedPictures);
            })
    }, []);

    useEffect(() => {
        axios.get('https://api.giphy.com/v1/gifs/trending', {
            params: {
            api_key: 'w2KURvTdH8tb1o1SgeQEariVSqfUBBeh',
            limit: 10
            },
        })
        .then(({ data }) => {
            const formattedGifs = data.data.map((gif) => ({
            image: gif.images.downsized_medium.url,
            }));
            setGifs(formattedGifs);
        })
    }, []);

    const photoModes = [Memes, pictures, gifs]

//-----------------Slider Logic-----------------//
    
function handleClick() { 
    if (current + 1 < photoModes.length) {
        setCurrentSliderImage(current === photoModes.length - 1 ? 0 : current + 1);
        setPhotos(photoModes[current + 1]);
        setCurrent(current + 1);
    } else {
        setPhotos(photoModes[0]);
        setCurrent(0);
    }
}
  const nextSlide = () => {
    if (currentSliderImage + 1 < photos.length) {
      setCurrentSliderImage(currentSliderImage + 1);
    } else {
      setCurrentSliderImage(0);
    }
  };

  const prevSlide = () => {
    if (currentSliderImage - 1 >= 0) {
      setCurrentSliderImage(currentSliderImage - 1);
    } else {
      setCurrentSliderImage(photos.length - 1);
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
            {photos.map((photo, index) => {
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