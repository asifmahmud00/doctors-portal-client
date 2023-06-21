import React from 'react';

const InfoCarrd = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card p-6 card-side shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCarrd;