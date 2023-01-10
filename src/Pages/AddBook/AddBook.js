import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { } from './AddBook.css'

const AddBook = () => {
    const [ok, setOk] = useState(false)
    console.log(ok);
    // Load Authors
    const { data: authors = [] } = useQuery({
        queryKey: ['authors'],
        queryFn: async () => {
            const res = await fetch(`https://chetona-server-raihan512.vercel.app/authors`);
            const data = await res.json();
            return data;
        }
    })
    // Load categories
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://chetona-server-raihan512.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    })

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <div className="w-10/12 ml-auto">
                    <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mt-5 mb-10'>নতুন বই যুক্ত করুন</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input defaultValue="test" {...register("example")} />
                        <ul className="add-category relative flex flex-wrap">
                            {
                                categories.map(category => <li key={category._id}>
                                    <label className="relative">
                                        <input type="checkbox" {...register(`[${category._id}]`)} onSelect={() => setOk(true)} className="absolute opacity-0" />
                                        <div className="bg-white py-1.5 px-3 cursor-pointer">
                                            <p className="text-lg font-semibold uppercase">{category.name}</p>
                                        </div>
                                    </label>
                                </li>)
                            }

                        </ul>
                        <input type="submit" className="bg-blue-400 mt-5 py-2 px-5" />
                    </form>
                </div>
            </div >
        </section >
    );
};

export default AddBook;