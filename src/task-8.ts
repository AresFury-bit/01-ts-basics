import axios from "axios";

{
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    async function fetchPost(): Promise<Post[]>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
    fetchPost().then((posts) => {
        console.log(posts[0].title);
    });
}