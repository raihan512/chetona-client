import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <div className="md:w-10/12 mx-auto">
                    <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mt-5 mb-10'>লগইন করুন</h3>
                    <div className='w-10/12 md:w-6/12 mx-auto'>
                        {/* Signin form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <div className='mb-5'>
                                <input type="email" placeholder='আপনার ইমেইল লিখুন' className='md:text-lg py-1.5 px-5 rounded-sm border border-[#40A4DC] w-full'
                                    {...register("mail", { required: "দয়া করে আপনার ইমেইলটি লিখুন" })}
                                    aria-invalid={errors.mail ? "true" : "false"}
                                />
                                {errors.mail && <p role="alert" className='text-red-500'>{errors.mail?.message}</p>}
                            </div>
                            {/* Password */}
                            <div className='mb-5'>
                                <input type="password" placeholder="আপনার পাসওয়ার্ড দিন" className='md:text-lg py-1.5 px-5 rounded-sm border border-[#40A4DC] w-full'
                                    {...register("password", { required: "দয়া করে একটি পাসওয়ার্ডটি লিখুন" })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                />
                                <p className='text-right text-red-500'>পাসওয়ার্ড ভুলে গেছেন?</p>
                                {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                            </div>
                            {/* New User? */}
                            <div className=''>
                                <p className='text-sm text-[#40A4DC]'><span className='text-red-500'>অ্যাকাউন্ট নেই?</span> <Link to='/signup'>নতুন অ্যাকাউন্ট খুলুন</Link></p>
                            </div>
                            <input
                                type="submit"
                                value="Sign In"
                                className='bg-[#40A4DC] text-white md:text-lg font-semibold rounded-sm border border-[#40A4DC] py-1 md:py-1.5 px-5 md:px-8 cursor-pointer hover:text-[#40A4DC] hover:bg-white' />
                        </form>
                        <div>
                            <p className='text-center text-xl md:text-2xl font-semibold my-5'>অথবা ব্যাবহার করুন</p>
                        </div>
                        <div className=''>
                            <button
                                className='flex items-center justify-center w-full py-2 bg-[#40A4DC] text-white md:text-xl rounded-sm border-2 border-[#40A4DC] mb-2 hover:bg-white hover:text-[#40A4DC]'>
                                <p className='mr-2'>জিমেইল</p>
                                <BsGoogle className='text-lg md:text-xl' />
                            </button>
                            <button
                                className='flex items-center justify-center w-full py-2 bg-white+ text-[#40A4DC] md:text-xl rounded-sm border-2 border-[#40A4DC] hover:bg-[#40A4DC] hover:text-white'>
                                <p className='mr-2'>ফেসবুক</p>
                                <FaFacebookF className='text-lg md:text-xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SignIn;