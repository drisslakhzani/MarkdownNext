import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import getPostData from '@/app/components/getPostData';

// Function to get post data by slug
const getPostsdata = (slug) => {
    const directory = path.join(process.cwd(), 'src', 'posts');
    const file = `${directory}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const { data, content: markdownContent } = matter(content);
    return { data, content: markdownContent };
};

// Function to generate static params for dynamic routing
export const generateStaticParams = async () => {
    const postsData = getPostData();
    return postsData.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = ({ params }) => {
    const { slug } = params;
    const { data, content } = getPostsdata(slug);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <Markdown className="prose">{content}</Markdown>
        </div>
    );
};

export async function generateMetadata({ params }) {
    const { slug } = params;
    const { data } = getPostsdata(slug);
    return { title: data.title };
}

export default PostPage;
