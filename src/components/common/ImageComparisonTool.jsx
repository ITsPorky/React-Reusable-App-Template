import React, { Children, useState } from 'react';
import Button from './Button';
import Row from './Row';

let index = 0;
let maxNumImages = 3;

const ImageComparisonTool = ({children, Style, className}) => {
    const [images, setImages] = useState([]);
    const [imageWidth, setImageWidth] = useState(50);
    const [sliderPos, setSliderPos] = useState(50);

    const addImage = (e) => {
        if(images.length < maxNumImages) {
            setImages([
                ...images,
                { id: index++, url: URL.createObjectURL(e.target.files[0]) }
            ]);
        } else {
            console.log("Error: Max number of images is reached...");
            alert("Error: Max number of images is reached...");
        }
        console.log(images);
    }

    const removeImage = (removedImage) => {
        console.log(`Image removed: ${removedImage}`);
        setImages(images.filter(image => image.id !== removedImage.id));
    }

    const updateImage = (image) => {
        // const newImages = counters.map((c, i) => {
        //     if (i === index) {
        //         // Increment the clicked counter
        //         return c + 1;
        //     } else {
        //         // The rest haven't changed
        //         return c;
        //     }
        // });
        // setCounters(nextCounters);

        console.log(`Image removed: ${image}`);
        setImages(images.filter(a => a.id !== image.id));
        --index;
    }

    const handleSlider = (e) => {
        setSliderPos(e.target.value);
        setImageWidth(e.target.value);
    }

    return ( 
        <div className='image-comparison-container'>
            <div className="image-comparison-input">
                <input type="file" accept="image/*" onChange={addImage} />
            </div>
            <div className='image-comparison-window' Style={`height: ${images.length == 0 ? 0 : 1000}px;`}>
                {images.map(image => {
                    return (
                        <div
                            key={image.id}
                            className='compare-image' 
                            Style={`
                                background-image: url(${image.url});
                                width: ${images[0].id == image.id ? 100 : imageWidth}%;
                                z-index: ${10 + image.id};
                            `}>
                        </div>
                    );
                })}
                <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={sliderPos} 
                    className="image-comparison-slider" 
                    name='slider' 
                    onChange={handleSlider}
                    Style={images.length <= 1 ? 'display: none;' : 'display: block;'} 
                />
            </div>
            <Row className='image-comparison-images justify-center'>
                {images.map(image => {
                    return (
                    <div key={image.id} className='image-comparison-block'>
                        <img src={image.url} />
                        <Button text='Update' onClick={() => updateImage(image)} /> 
                        <Button text='Remove' onClick={() => removeImage(image)} />
                    </div>
                    )
                })}
            </Row>
        </div>
    );
}
 
export default ImageComparisonTool;