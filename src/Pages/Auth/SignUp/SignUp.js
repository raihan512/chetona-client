import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/AuthContext/AuthContext';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthProvider);
    const [errorMsg, setErrorMsg] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then((res) => {
                // Update user info
                const userInfo = { displayName: data.name }
                updateUser(userInfo).then(() => { }).catch(err => console.log(err));
                // Add user to database if everything is ok
                // addUser(data.name, data.email, data.category)
                toast.success("আপনার রেজিস্ট্রেশন সফল হয়েছে");

            })
            .catch((error) => {
                console.log(error.message);
                error.message.includes('email-already-in-use') && setErrorMsg('এই ইমেইল দিয়ে একটি অ্যাকাউন্ট খোলা আছে')
                toast.error("আপনার রেজিস্ট্রেশন সফল হয়নি");
            });
    }
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <div className="w-10/12 mx-auto">
                    <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mt-5 mb-10'>অ্যাকাউন্ট খুলুন</h3>
                    <div className='w-6/12 mx-auto'>
                        {/* SignUp form */}
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            {/* Name */}
                            <div className='mb-5'>
                                <input type="text" placeholder='আপনার নাম লিখুন'
                                    className='text-lg py-1.5 px-5 rounded-sm border border-[#40A4DC] w-full'
                                    {...register('name', { required: true, maxLength: 30 })} />
                                {errors.name && errors.name.type === "required" && <span className='text-red-500'>আপনার নামটি লিখুন</span>}
                                {errors.name && errors.name.type === "maxLength" && <span className='text-red-500'>আপনার নামের সংখ্যা ৩০ টির বেশি হয়েছে</span>}
                            </div>
                            {/* Email */}
                            <div className='mb-5'>
                                <input type="email" placeholder='আপনার ইমেইলটি লিখুন'
                                    className='text-lg py-1.5 px-5 rounded-sm border border-[#40A4DC] w-full'
                                    {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                                {errors.email && errors.email.type === "required" && <span className='text-red-500'>আপনার ইমেইলটি লিখুন</span>}
                                {errors.email && errors.email.type === "pattern" && <span className='text-red-500'>আপনার ইমেইলটি সঠিক নয়</span>}
                            </div>
                            {/* Password */}
                            <div className='mb-5'>
                                <input placeholder='আপনার পাসওয়ার্ড সেট করুন'
                                    className='text-lg py-1.5 px-5 rounded-sm border border-[#40A4DC] w-full'
                                    {...register('password', { required: true, pattern: /(?=(.*[A-Z])(?=(.*[a-z]))(?=(.*[0-9])))/, maxLength: 16, minLength: 6 })} />
                                {errors.password && errors.password.type === "required" && <span className='text-red-500'>আপনার পাসওয়ার্ডটি লিখুন</span>}
                                {errors.password && errors.password.type === "pattern" && <span className='text-red-500'>আপনার পাসওয়ার্ডে (A-Z, a-z, ও 0-9) এগুলো কমপক্ষে একটি করে থাকতে হবে</span>}
                                {errors.password && errors.password.type === "maxLength" && <span className='text-red-500'>আপনার পাসওয়ার্ডটি ১৬ ডিজিটের বেশি হয়েছে</span>}
                                {errors.password && errors.password.type === "minLength" && <span className='text-red-500'>আপনার পাসওয়ার্ডটি ৬ ডিজিটের কম হয়েছে</span>}
                                {errorMsg && <p className='text-red-500'>{errorMsg}</p>}
                            </div>
                            {/* New User? */}
                            <div className=''>
                                <p className='text-sm text-[#40A4DC]'><span className='text-green-500'>অ্যাকাউন্ট আছে?</span> <Link to='/signin'>লগইন করুন</Link></p>
                            </div>
                            <input
                                type="submit"
                                value="রেজিস্টার"
                                className='bg-[#40A4DC] text-white text-lg font-semibold rounded-sm border border-[#40A4DC] py-1.5 px-8 cursor-pointer hover:text-[#40A4DC] hover:bg-white' />
                        </form>
                        <div>
                            <p className='text-center text-2xl font-semibold my-5'>অথবা ব্যাবহার করুন</p>
                        </div>
                        <div className=''>
                            <button
                                className='flex items-center justify-center w-full py-2 bg-[#40A4DC] text-white text-lg md:text-xl rounded-sm border-2 border-[#40A4DC] mb-2 hover:bg-white hover:text-[#40A4DC]'>
                                <p className='mr-2'>জিমেইল</p>
                                <BsGoogle />
                            </button>
                            <button
                                className='flex items-center justify-center w-full py-2 bg-white+ text-[#40A4DC] text-lg md:text-xl rounded-sm border-2 border-[#40A4DC] hover:bg-[#40A4DC] hover:text-white'>
                                <p className='mr-2'>ফেসবুক</p>
                                <FaFacebookF />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SignUp;