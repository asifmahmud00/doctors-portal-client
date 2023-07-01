import React from 'react';

const AppointmentOption = ({ apointmentOption, setTreatment }) => {
    const { name, slots } = apointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    {/* <button className="btn btn-primary" onClick={() => window.modalBooking.showModal()}>Book Appointment</button> */}
                    <label
                        disabled={slots.length === 0}
                        htmlFor='modalBooking'
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(apointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;