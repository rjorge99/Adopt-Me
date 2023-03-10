import { useState } from 'react';

const Carousel = ({ images = ['http://pets-images.dev-apis.com/pets/none.jpg'] }) => {
    const [active, setActive] = useState(0);

    const handleImageClick = (e) => {
        setActive(+e.target.dataset.index);
    };

    return (
        <div className='carousel'>
            <img src={images[active]} alt='animal hero' />
            <div className='carousel-smaller'>
                {images.map((photo, index) => (
                    <img
                        onClick={handleImageClick}
                        key={photo}
                        src={photo}
                        className={index === active ? 'active' : ''}
                        alt='animal thumbnail'
                        data-index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
