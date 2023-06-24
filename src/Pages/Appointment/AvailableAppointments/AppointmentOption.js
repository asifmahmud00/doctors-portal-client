import React from 'react';
import ButtonPrimary from '../../../components/PrimaryButton/ButtonPrimary';

const AppointmentOption = ({ apointmentOption }) => {
    const { name, slots } = apointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <ButtonPrimary>Book Appointment</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;