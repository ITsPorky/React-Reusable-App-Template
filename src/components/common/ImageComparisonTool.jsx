import React, { useState, useRef } from 'react';
import Button from './Button';
import Row from './Row';
import useWindowDimensions from '../utils/windowResize';

let index = 0;
let maxNumImages = 3;

const ImageComparisonTool = ({Style, className}) => {
    const [images, setImages] = useState([]);
    const [imageWidth, setImageWidth] = useState(50);
    const [imageHeight, setImageHeight] = useState(0);
    const [sliderPos, setSliderPos] = useState(50);
    const inputImage = useRef(null);
    const { screenHeight, screenWidth } = useWindowDimensions();

    const addImage = (e) => {
        const img = new Image();
        img.onload = () => {
            console.log(`width: ${img.width}`);
            console.log(`height: ${img.height}`);
            // let ratio = screenWidth / img.width;
            // console.log(ratio);
            // let resizedHeight = img.height * ratio;
            // console.log(resizedHeight);
            setImageHeight(img.height * 0.3);
        };
        img.src = URL.createObjectURL(e.target.files[0]);

        if(images.length < maxNumImages) {
            setImages([
                ...images,
                { id: index++, url: URL.createObjectURL(e.target.files[0]) }
            ]);
        } else {
            console.log("Error: Max number of images is reached...");
            alert("Error: Max number of images is reached...");
        }
        // console.log(images);
    }

    const removeImage = (removedImage) => {
        // console.log(`Image removed: ${removedImage}`);
        setImages(images.filter(image => image.id !== removedImage.id));
    }

    const updateImage = (selectedImage) => {
        // Get new image from file input
        getNewImage();
        // Get url of new image
        let newURL = inputImage.current.files[0];
        // Remove image to be replaced
        removeImage(selectedImage);
        // Add replacement image at removed images index
        if(selectedImage.id < index) {
            setImages([
                { id: selectedImage.id, url: URL.createObjectURL(newURL) },
                ...images
            ]);
        } else {
            setImages([
                ...images,
                { id: selectedImage.id, url: URL.createObjectURL(newURL) }
            ]);
        }
    }

    const getNewImage = async() => {
        await inputImage.current.click();
    }

    const handleSlider = (e) => {
        setSliderPos(e.target.value);
        setImageWidth(e.target.value);
    }

    return ( 
        <div className='image-comparison-container'>
            <div className="image-comparison-input">
                <input type="file" accept="image/*" onChange={addImage} ref={inputImage} />
            </div>
            <div className='image-comparison-window' Style={`height: ${images.length < 1 ? 0 : 1000}px;`}>
                {images.map(image => {
                    return (
                        <div
                            key={image.id}
                            className='compare-image' 
                            Style={`
                                background-image: url(${image.url});
                                width: ${images[0].id === image.id ? 100 : imageWidth}%;
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