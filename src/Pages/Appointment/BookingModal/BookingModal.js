import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone
        };

        // console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    console.log('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            });


    }

    return (
        <>
            {/* <dialog id="modalBooking" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog> */}
            <input type="checkbox" id="modalBooking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modalBooking" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" disabled value={date} />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}
                                </option>)
                            }
                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your name" className="input input-bordered w-full" />
                        <input type="text" name='email' defaultValue={user?.email} disabled placeholder="Email address" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone No" className="input input-bordered w-full" />

                        <input type="submit" value="Submit" className="btn btn-accent w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;