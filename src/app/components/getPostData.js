import matter from "gray-matter";
import fs from 'fs';

const getPostsdata = () => {
    const directory = 'src/posts';
    const files = fs.readdirSync(directory);
    const mdPosts = files.filter(file => file.endsWith('.md'));
    const posts = mdPosts.map((post) => {
        const fileContent = fs.readFileSync(`${directory}/${post}`, 'utf8');
        const postResult = matter(fileContent);
        return {
            title: postResult.data.title,
            date: new Date(postResult.data.date).toLocaleDateString(),
            subtitle: postResult.data.subtitle,
            post: post.replace('.md', '')
        };
    });
    return posts;
};

export default getPostsdata;