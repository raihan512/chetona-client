import React from 'react';

const BookDetailsModal = ({ title, bookSample, setBookModal }) => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen z-50 bg-slate-200/50'>
            <div className='h-screen flex justify-center items-center'>
                <div className="max-h-[550px] w-[400px] bg-white rounded-sm">
                    {/* Modal header */}
                    <div className='text-center'>
                        <h3 className='text-xl font-semibold text-[#40A4DC] my-2 border-b-2 border-[#40A4DC]'>{title}</h3>
                    </div>
                    {/* Book sample images */}
                    <div className='max-h-[450px] overflow-y-scroll'>
                        {
                            bookSample.map((item, i) => <div
                                key={i}
                                className='border-2 mx-2 mt-2'>
                                <img src={item} alt="" />
                            </div>)
                        }
                    </div>
                    {/* Modal footer */}
                    <div className='bg-red-600'>
                        <button
                            onClick={() => setBookModal(false)}
                            className='w-full text-xl text-white py-1 text-center'>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsModal;