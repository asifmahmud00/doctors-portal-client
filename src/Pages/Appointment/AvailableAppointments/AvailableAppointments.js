import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointments = ({ selectedDate }) => {

    // const [apointmentOptions, setApointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    // const { data: apointmentOptions = [] } = useQuery({
    //     queryKey: ['apointmentOptions'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    // })

    const { data: apointmentOptions = [] } = useQuery({
        queryKey: ['apointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            // const res = await fetch('appointmentOptions.json');

            const data = await res.json();
            return data;
        }
    })

    // useEffect(() => {
    //     // fetch('appointmentOptions.json')
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setApointmentOptions(data))
    // }, [])

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
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};



export default AvailableAppointments;