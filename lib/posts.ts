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

// export async function getAllPostsData() {
//   const res = await fetch(new URL(apiUrl));
//   const posts = await res.json();
//   return posts;
// }
