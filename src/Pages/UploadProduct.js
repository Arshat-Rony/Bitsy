import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './firebaseinit';
import Loading from './Shared/Loading';
const UploadProduct = () => {
    const [user] = useAuthState(auth)
    const formData = new FormData();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const apikey = `26aaf9d928f83ce8ebd13e503b231566`
    const onSubmit = data => {
        const newUrl = `https://api.imgbb.com/1/upload?key=${apikey}`
        const image = data.file[0];
        formData.append("image", image)
        fetch(newUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(respond => {
                if (respond.success) {
                    const img = respond.data.url;
                    const product = {
                        name: data.name,
                        email: data.email,
                        img,
                        productName: data.product,
                        price: data.price,
                        description: data.description,
                    }
                    console.log(product)
                    const url = `http://localhost:5000/products`
                    fetch(url, {
                        method: "POST",
                        headers: {
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast('You have added a product successfully')
                            }
                        })
                }
            })
    };

    return (
        <div className='bg-secondary shadow-md shadow-pink-300  mx-auto lg:max-w-screen-lg w-full rounded-md text-white py-4 mt-20 font-secondary text-center'>
            <h2 className='text-center font-bold text-2xl my-10'>Upload Product</h2>
            <div className='px-8 mb-8'> <hr className='' /></div>
            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center justify-between flex-col lg:flex-row lg:px-14' >
                    <div className='border-blue-900 border-2 p-4 rounded-md mb-5 lg:mb-0 w-[400px]'>
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
                                type="text" value={user?.displayName || ''} name="name" readOnly placeholder="Type here" className="input bg-primary input-bordered w-full max-w-xs focus:outline-none" />
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
                                type="email" value={user?.email || ''} readOnly placeholder="Email here" className="input input-bordered bg-primary w-full max-w-xs focus:outline-none" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email?.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                {...register("product", {
                                    required: {
                                        value: true,
                                        message: "Product is required"
                                    }
                                })}
                                type="text" placeholder="product here" className="input input-bordered bg-primary w-full max-w-xs focus:outline-none" />
                            <label className="label">
                                {errors.product?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <input id='price'
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "price is required"
                                    }
                                })}
                                type="text" name="price" placeholder="Price here" className="input bg-primary input-bordered w-full max-w-xs focus:outline-none" />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price?.message}</span>}
                            </label>
                        </div>



                    </div>
                    <div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-bold text-2xl">Description</span>
                            </label>
                            <textarea id='description'
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Description is required"
                                    }
                                })}
                                type="text" name="description" placeholder="Description here" className="input bg-primary input-bordered w-[400px] h-[100px] focus:outline-none" />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control border-blue-900 border-2 text-center p-5 w-[400px] rounded-md">
                            <label className="label justify-center flex-col">
                                <span className="label-text font-bold text-4xl mb-4 text-slate-400">Upload File</span>
                                <span className='label-text mb-12'>Choose Your File to Upload</span>
                            </label>
                            <input
                                {...register("file", {
                                    required: {
                                        value: true,
                                        message: "picture is required"
                                    }
                                })}
                                type="file" className="input bg-secondary border-none w-[109px] mx-auto focus:outline-none" />
                            <label className="label">
                                {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product?.message}</span>}
                            </label>
                        </div>
                    </div>
                </div>
                <input className='input bg-gradient-to-r from-accent to-neutral flex transition-all duration-500 opacity-100 file:items-center shadow-lg shadow-zinc-700 justify-center gap-4 mx-auto max-w-xs w-full  hover:opacity-70 mt-5 focus:outline-none' type="submit" />

            </form>
        </div>
    );
};

export default UploadProduct;


