import Link from 'next/link';
import getPostData from "@/app/components/getPostData";
import PostPreview from "@/app/components/PostPreview";
import React from "react";

export default function Home() {
    const PostData = getPostData();
    const PostTitles = PostData.map((post, index) => (
        <PostPreview key={index} post={post} />
    ));
    return (
        <main className="flex flex-wrap justify-center  w-full md:w-[55%] lg:w-[52%]">
            {PostTitles}
        </main>
    );
}
