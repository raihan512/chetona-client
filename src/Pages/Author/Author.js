import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TfiUser } from "react-icons/tfi";

const Author = () => {
    const author = useLoaderData();
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mb-10'>পরিচিতি</h3>
                <div>
                    {
                        author.authorImg ?
                            <img src={author.authorImg}
                                className='float-left mt-40'
                                style={{ "shape-outside": `url(${author.authorImg})` }}
                                alt="" />
                            : <TfiUser className='text-9xl float-left mt-40' />
                    }
                    <p className='text-justify text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae sapiente? Velit ducimus qui praesentium nihil aperiam ab eaque iusto dolorum delectus id iste, omnis repudiandae natus numquam beatae consectetur voluptatibus. Earum ullam quas quo sint illum veritatis provident, doloremque reiciendis adipisci ipsa ratione neque rem quis quisquam impedit consequatur inventore at incidunt. Cupiditate porro ullam dignissimos eveniet recusandae aliquam autem? Amet ut tempora voluptatum aspernatur accusamus corporis enim sapiente minus excepturi. Deleniti, distinctio suscipit! Officiis qui eaque placeat totam? Reprehenderit, voluptatem? Molestias nam in non ea, facilis tempore excepturi delectus vero sint dolores aut et quis commodi eum blanditiis obcaecati repellendus laudantium eligendi temporibus expedita fuga iste. Reiciendis nulla dicta sit aperiam corrupti officiis dolorum sunt quas corporis adipisci, dolor aut laboriosam illum amet perspiciatis ipsam hic, veritatis ullam. Non nesciunt at officia facilis voluptates aliquam, quisquam ea, error earum sit cumque ut, esse harum aperiam corporis ad? Nobis autem maiores sit tempora ipsum, aliquam libero, et, neque numquam consequuntur dolore corrupti quas nostrum placeat optio. Eius provident excepturi quibusdam voluptatem officia perspiciatis quae molestiae voluptates, earum quidem omnis enim autem! Quisquam ipsum corrupti laborum molestiae eveniet odio tempora repudiandae ipsa odit rem, officiis dolor illo iure, ut voluptate? Quod neque enim modi ratione explicabo quas nobis harum nesciunt magni architecto pariatur laboriosam repellat vel voluptatum earum accusantium impedit, voluptatem ea molestiae excepturi distinctio libero. Porro perspiciatis sequi quasi harum iste tenetur a. Adipisci voluptas saepe rerum, incidunt sequi vero atque consequuntur omnis nobis excepturi facere quos quibusdam, non laboriosam accusamus quo sit porro. Unde repellendus nemo velit sed nam, vero ex recusandae enim ad nesciunt quae, ut vitae. Dolor laudantium ratione beatae soluta iste reiciendis minus. Hic rerum repellat quia omnis soluta commodi, nam eius neque veritatis iusto provident labore ex, voluptate at iste id magni et numquam!</p>
                </div>
            </div>
        </section>
    );
};

export default Author;