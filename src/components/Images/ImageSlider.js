import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styles from './ImageSlider.module.css'
import "./ImageSlider.module.css"

const ImageSlider = (ImageData) => {
    const images = ImageData.ImageData
    const [curr, setCurr] = useState(0)
    const len = images.length

    if(!Array.isArray(images) || images.length <= 0){
        return null;
    }

    const nextSlide = () => {
        setCurr(curr === len - 1 ? 0 : curr + 1)
    }

    const prevSlide = () => {
        setCurr(curr === 0 ? len - 1 : curr - 1)
    }

    return (
    <section className={styles["slider"]}>
        <FaArrowAltCircleLeft className={styles["left_arrow"]} onClick={prevSlide} />
        <FaArrowAltCircleRight className={styles["right_arrow"]} onClick={nextSlide} />
        {images.map((slide, index) =>{
            return (
                <div
                    className={index === curr ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === curr && (
                        <img src={slide.image} className={styles["image"]}/>
                    )}
                </div>
            )
        })}
    </section>
    )
}

export default ImageSlider