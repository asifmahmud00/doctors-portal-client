import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {

    const [apointmentOptions, setApointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setApointmentOptions(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>
                Available Services on {format(selectedDate, 'PP')}
            </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    apointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        apointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};



export default AvailableAppointments;