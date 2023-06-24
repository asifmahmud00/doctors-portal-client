import React from 'react';

const Service = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div className="card card-bordered shadow-xl">
            <figure><img src={icon} alt="" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Service;