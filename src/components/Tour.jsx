import React, { useState } from 'react'


// const real = true

// const test = real? 'Réél':'Imaginaire'
// console.log(test)

const Tour = ({id, image, info, name, price}) => {
    const [readMore, setReadMore]= useState(false);
    return (
        <article className="single">
            <img src={image} alt="" srcset=""/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}€</h4>
                </div>
                <p>
                {readMore ? info : `${info.substring(0,150)}...`}
                    <button className="read" onClick={() =>setReadMore(!readMore)}>{!readMore ? 'Show less' : 'Read More'}</button>
                </p>
                <button className="delete-btn" onClick={()=>(value='')}>Remove</button>
            </footer>
        </article>
    )


}
export default Tour


















