import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }

        console.log(booking);
        setTreatment(null);
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
                    <h3 className="font-bold text-lg">{name}</h3>
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
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full" />
                        <input type="text" name='email' placeholder="Email address" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone No" className="input input-bordered w-full" />

                        <input type="submit" value="Submit" className="btn btn-accent w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;