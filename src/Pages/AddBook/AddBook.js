import { useState } from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
    const [data, setData] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const addBook = data => {
        console.log(data);
    }
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mt-5 mb-10'>নতুন বই যুক্ত করুন</h3>
                {/* Book add form */}
                <form onSubmit={handleSubmit(addBook)}>
                    {/* Input field */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="book-name" className="text-xl mb-2 font-semibold cursor-pointer">বই এর নাম লিখুন</label>
                        <input {...register("firstName")} placeholder="যেমনঃ শিক্ষিত বালক" id="book-name" className="py-2 px-8 rounded-sm border border-[#40A4DC] focus-within:outline-none" />
                    </div>
                    {/* Input field */}
                    <div>
                        <select {...register("category", { required: true })} className="py-2 px-8 rounded-sm border border-[#40A4DC] focus-within:outline-none">
                            <option value="">লেখক...</option>
                            <option value="A">Option A</option>
                            <option value="B">Option B</option>
                        </select>

                    </div>
                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddBook;