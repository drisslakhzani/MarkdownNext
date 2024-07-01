import React from 'react';
import Link from "next/link";

const PostPreview = (props) => {
    return (
        <section className="p-6 m-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-[60%] lg:w-[40%]">
            <Link  href={`/posts/${props.post.post}`}>
                <div>
                    <h1  className="text-2xl font-bold text-blue-600 ">{props.post.title}</h1>
                    <p className="text-gray-700 mt-2">{props.post.subtitle}</p>
                    <p className="text-gray-500 mt-1 text-sm">{props.post.date}</p>
                </div>
            </Link>
        </section>
    );
};

export default PostPreview;
