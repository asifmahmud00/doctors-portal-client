import React from 'react';
import imgFluoride from '../../../assets/images/fluoride.png';
import imgCavity from '../../../assets/images/cavity.png';
import imgWhite from '../../../assets/images/whitening.png';
import imgPatient from '../../../assets/images/treatment.png';
import Service from './Service';
import ButtonPrimary from '../../../components/PrimaryButton/ButtonPrimary';


const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: imgFluoride,

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: imgCavity,

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: imgWhite,

        }
    ]

    return (
        <div>
            <h6 className='font-bold mt-10' style={{ color: '#19D3AE', textAlign: 'center' }} >OUR SERVICES</h6>
            <h2 className='my-5 text-center text-4xl'>Services We Provide</h2>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>
                    )
                }
            </div>

            <div className="card grid grid-cols-2 my-20 shadow-xl">
                <figure><img className='w-1/2 m-10' src={imgPatient} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl pt-24">Exceptional Dental <br></br>Care,  on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="justify-start">
                        <ButtonPrimary>Are U Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;