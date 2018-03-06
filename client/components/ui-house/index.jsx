import React from 'react';
import './style.sass';

const House = ({
    urlImage,
    title,
    purpose,
    location,
    price,
    rooms,
    size,
}) => (
    <section className="ui-house" >
        <div className="img-house">
            {urlImage &&
                <img src={urlImage} alt="House image" />
            }
            <button className="ui-button-rent">
                {purpose === 0
                    ? 'Mieten'
                    : 'Kaufen'}
            </button>
        </div>
        <div className="content">
            <h3>{title}</h3>
            {location &&
                <p>{location}</p>}
            <footer>
                {price && 
                    <span className="price">{price}&nbsp;€</span>}
                <span className="detail">
                    {rooms &&
                        <span className="rooms">
                            {rooms}&nbsp;Zimmer
                        </span>}
                    {size &&
                        <span className="size">
                            ab&nbsp;{size}&nbsp;m&sup2;
                        </span>}
                </span>
            </footer>
        </div>
    </section>
);

export default House;