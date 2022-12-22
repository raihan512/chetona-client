import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BookDetailsTab = ({ bookDetails, authorInfo }) => {
    const [activeTab, setActiveTab] = useState('tab1')
    const { summary } = bookDetails;
    const { author, authorImg, aboutAuthor, socialLinks, _id } = authorInfo;

    const showTab = (tab) => {
        setActiveTab(tab)
    }
    return (
        <div className='mt-14'>
            {/* Tabbar */}
            <div className='flex bg-[#40A4DC] rounded-t-md'>
                <button className={`text-lg text-white px-2 pt-1.5 pb-0.5 mt-0.5 -mb-1 border-r border-r-white border-b-2 border-${activeTab === 'tab1' ? '[#40A4DC]' : "transparent"}`} onClick={() => showTab('tab1')} >পূর্ব পাঠ</button>
                <button className={`text-lg text-white px-2 pt-1.5 pb-0.5 mt-0.5 -mb-1 border-r border-r-white border-b-2 border-${activeTab === 'tab2' ? '[#40A4DC]' : "transparent"}`} onClick={() => showTab('tab2')} >লেখক</button>
                <button className={`text-lg text-white px-2 pt-1.5 pb-0.5 mt-0.5 -mb-1 border-r border-r-white border-b-2 border-${activeTab === 'tab3' ? '[#40A4DC]' : "transparent"}`} onClick={() => showTab('tab3')} >বিবরণ</button>
            </div>
            {/* Tab Item Container */}
            <div className='border border-[#40A4DC] p-5 rounded-b-md'>
                {/* Tab item*/}
                {
                    activeTab === 'tab1' && <div>
                        <p className='text-base md:text-lg'>{summary}</p>
                    </div>
                }
                {/* Tab item*/}
                {
                    activeTab === 'tab2' && <div>
                        <div className='sm:flex'>
                            <div className='sm:w-4/12'>
                                {/* Author Image */}
                                {authorImg ? <img src={authorImg} className='h-[90px] sm:h-[200px] rounded-md' alt={author} />
                                    : <div className='h-[90px] sm:h-[200px] w-[90px] sm:w-[200px] bg-slate-300'></div>}
                                {/* Social Links */}
                                <div className='flex mt-4'>
                                    {socialLinks?.fb ? <a className='text-base text-white bg-[#40A4DC] p-1 mr-1 rounded-full transition-all hover:text-gray-500' href={`${socialLinks.fb}`} target="_blank"><FaFacebookF /></a> : ''}
                                    {socialLinks?.ins ? <a className='text-base text-white bg-[#40A4DC] p-1 mr-1 rounded-full transition-all hover:text-gray-500' href={`${socialLinks.ins}`} target="_blank"><FaInstagram /></a> : ''}
                                    {socialLinks?.twitter ? <a className='text-base text-white bg-[#40A4DC] p-1 mr-1 rounded-full transition-all hover:text-gray-500' href={`${socialLinks.twitter}`} target="_blank"><FaTwitter /></a> : ''}
                                    {socialLinks?.yt ? <a className='text-base text-white bg-[#40A4DC] p-1 mr-1 rounded-full transition-all hover:text-gray-500' href={`${socialLinks.yt}`} target="_blank"><FaYoutube /></a> : ''}
                                    <Link className='text-base text-white bg-[#40A4DC] p-1 ml-8 rounded-full transition-all hover:text-gray-500' to={`/author/${_id}`}><FaEye /></Link>
                                </div>
                            </div>
                            <div className='sm:w-6/12 mt-5'>
                                {/* About Author  */}
                                {/* Author Name */}
                                <h4 className='text-lg md:text-xl font-semibold sm:mb-3'><Link to={`author/${_id}`}>{author}</Link></h4>
                                <p className='text-sm md:text-base'>
                                    {aboutAuthor}
                                </p>
                            </div>
                        </div>
                    </div>
                }
                {/* Tab item*/}
                {
                    activeTab === 'tab3' && <div>
                        <p>লেখক :</p>
                        <p>অনুবাদক : </p>
                        <p>সম্পাদক : </p>
                        <p>প্রকাশক :</p>
                        <p>প্রকাশকাল :</p>
                        <p>প্রকাশের সংখ্যা :</p>
                        <p>আইএসবিএন :</p>
                        <p>বিষয় :</p>
                        <p>পৃষ্ঠা :</p>
                        <p>বাধাই :</p>
                        <p>ভাষা :</p>
                        <p>দেশ :</p>
                    </div>
                }
            </div>
        </div >
    );
};

export default BookDetailsTab;