import axios from 'axios';
export const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
[];

export async function getAllPostsData() {
  const res = await axios.get(apiUrl);
  const posts: Posts = await res.data;

  return posts;
}

export async function getAllPostIds() {
  const res = await axios.get(apiUrl);
  const posts: { id: number }[] = await res.data;

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id: string) {
  const res = await axios.get(`${apiUrl}/${id}/`);
  const post: Posts = await res.data;

  return post;
}

// export async function getAllPostsData() {
//   const res = await fetch(new URL(apiUrl));
//   const posts = await res.json();
//   return posts;
// }
