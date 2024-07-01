import React from 'react';
import fs from 'fs';
import path from 'path';
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostData from "@/app/components/getPostData";

// Function to get post data by slug
const getPostsdata = (slug) => {
    const directory = 'src/posts/';
    const file = `${directory}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const contentResult = matter(content);
    return contentResult;
};

// Function to generate static params for dynamic routing
export const generateStaticParams = () => {
    const postsData = getPostData();
    return postsData.map((post) => ({
        slug: post.slug
    }));
};

const Page = (props) => {
    const slug = props.params.slug; // Retrieve the slug name dynamically (being passed in the URL)
    const posts = getPostsdata(slug); // Use the slug to get post data
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{posts.data.title}</h1>
            <Markdown className="prose">{posts.content}</Markdown>
        </div>
    );
};

export default Page;
