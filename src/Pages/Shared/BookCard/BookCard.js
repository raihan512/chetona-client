import React from 'react';

const BookCard = ({ book }) => {
    const { thumb, author, authorImg, title } = book;
    return (
        <div className='w-[310px] sm:w-[350px] h-[150px] sm:h-[180px] rounded-sm border border-[#40A4DC] box-border flex justify-between items-center  mb-10'>
            <div className='w-5/12 h-[155px] sm:h-[175px] -mt-12 ml-2'>
                <div className='h-[155px] sm:h-[175px] relative'>
                    <img src={thumb} className="h-full p-1 border-2 border-[#40A4DC] bg-[#F6F6F6]" alt="" />
                    <img src={authorImg} className='absolute -bottom-3 sm:-bottom-5 left-1/4 h-[35px] sm:h-[50px] w-[35px] sm:w-[50px] rounded-full border-2 border-[#40A4DC]' alt="" />
                </div>
            </div>
            <div className='w-6/12 pr-1'>
                <h4 className='text-lg text-[#000000] truncate ...'><strong>{title}</strong></h4>
                <p className='text-sm md:text-base text-[#565656] truncate ...'><strong>{author}</strong></p>
                <div className='flex mb-2'>
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[14px]' alt="" />
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[14px]' alt="" />
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[14px]' alt="" />
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[14px]' alt="" />
                    <img src="https://i.ibb.co/frVwnyC/white-star.png" className='mr-1 h-[14px]' alt="" />
                </div>
                <p className='flex items-center mb-1 text-sm md:text-base'><strong>১০০</strong><img src="https://i.ibb.co/f4LLHBy/bdt.png" className="ml-1 h-[12px]" alt="" /></p>
                <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>আরো দেখুন</button>
            </div>
        </div>
    );
};

export default BookCard;

{/* <div className='flex items-center w-[290px] md:w-[350px] mx-5 lg:mx-0 mb-10 rounded-sm border-2 hover:shadow-xl border-[#40A4DC] pl-2 md:pl-5 pr-3 md:pr-12 transition-all hover:-translate-y-1'>
            <div className="relative -mt-5 mb-4 md:mb-8 border-2 p-1 border-[#40A4DC] bg-white rounded-sm">
                <img src={thumb} className='rounded-sm max-w-[280px] h-[171px]' alt="" />
                <img src={authorImg} className='absolute h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-full -bottom-4 md:-bottom-6 left-8 md:left-9 border-2 border-[#40A4DC]' alt="" />
            </div>
            <div className='pl-10'>
                <h4 className='text-base md:text-lg text-[#000000] leading-4 mb-1'>{title}</h4>
                <p className='text-sm md:text-base text-[#565656] mb-1 truncate w-[100px]'>{author}</p>
                <div className='flex mb-2'>
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[17px]' alt="" />
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[17px]' alt="" />
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[17px]' alt="" />
                    <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[17px]' alt="" />
                    <img src="https://i.ibb.co/frVwnyC/white-star.png" className='mr-1 h-[12px] md:h-[17px]' alt="" />
                </div>
                <p className='flex items-center mb-1 text-sm md:text-base'><strong>১০০</strong><img src="https://i.ibb.co/f4LLHBy/bdt.png" className="ml-1 h-[12px]" alt="" /></p>
                <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-xs md:text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>আরো দেখুন</button>
            </div>
        </div> */}