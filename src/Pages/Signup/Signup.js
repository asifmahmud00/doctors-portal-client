import React from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Signup = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleSignup = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input
                            {...register("name",
                                { required: "Name bol" }
                            )}
                            type="text" className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                            { required: true }
                        )}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password de",
                            minLength: { value: 6, message: "Password must be at least 6 characters long" }
                        })} className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' type="submit" />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div >
    );
};

export default Signup;