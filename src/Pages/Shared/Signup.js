import React, { useEffect, useRef } from 'react';
import { ImFacebook } from "react-icons/im"
import { BsGoogle } from "react-icons/bs"
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from './Loading';
import Usetoken from '../../hooks/Usetoken';
const Signup = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const name = useRef(null)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);



    const [createUserWithEmailAndPassword, emailuser, emailLoading, emailerror,] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { token } = Usetoken(guser || emailuser)
    let signError;

    if (gerror || emailerror) {
        signError = <p className='text-red-500 font-bold'>{emailerror.message || emailerror.message}</p>
    }
    useEffect(() => {
        if (token) {
            toast("Welcome to Bitsy")
            navigate(from, { replace: true })
        }
    }, [from, navigate, token])

    if (gloading || emailLoading || updating) {
        return <Loading type="spokes" color="#EB4B98" ></Loading>
    }


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    };


    return (
        <div className='bg-secondary shadow-md shadow-pink-300 max-w-sm  mx-auto  rounded-md text-white py-4 mt-20 font-secondary text-center'>
            <h2 className='text-center font-bold text-2xl my-10'>Sign Up</h2>
            <div className='px-8 mb-8'> <hr className='' /></div>
            <form className='flex items-center justify-center flex-col' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input id='name'
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })}
                        type="text" name="name" placeholder="Type here" className="input bg-primary input-bordered w-full max-w-xs focus:outline-none" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'Your email is not perfect'
                            }
                        })}
                        type="email" placeholder="Email here" className="input input-bordered bg-primary w-full max-w-xs focus:outline-none" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' &&
                            <span className="label-text-alt text-red-500">{errors.email?.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            minLength: {
                                value: 6,
                                message: 'Pasword should be 6 character'
                            }
                        })}
                        type="password" placeholder="Password here" className="input input-bordered bg-primary w-full max-w-xs focus:outline-none" />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                    </label>
                </div>
                {signError}
                <input className='input bg-primary flex transition-all duration-500 items-center shadow-lg shadow-zinc-700 justify-center gap-4  max-w-xs w-full  hover:bg-gradient-to-r from-accent to-neutral' type="submit" />
                <p className='mt-3'>Already Registered ? <Link className='text-blue-500 font-bold' to="/login">Log in</Link></p>
            </form>
            <div className="divider py-4 px-8">OR</div>
            <div className='flex items-center justify-center gap-4 mb-6'>
                <button onClick={() =>
                    signInWithGoogle()

                } type="text" placeholder="Type here" className="input bg-primary flex transition-all duration-500 items-center justify-center gap-4 shadow-lg shadow-zinc-700  max-w-xs w-36 hover:bg-gradient-to-r from-accent to-neutral focus:outline-none focus-visible:outline-none">
                    <BsGoogle />  Google
                </button>
                <button type="text" placeholder="Type here" className="input bg-primary flex transition-all duration-500 items-center shadow-lg shadow-zinc-700 justify-center gap-4  max-w-xs w-36 hover:bg-gradient-to-r from-accent to-neutral focus:outline-none focus-visible:outline-none">
                    <ImFacebook />   Facebook
                </button>
            </div>
        </div>
    );
};

export default Signup;