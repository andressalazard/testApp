import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(`Got ${posts.length} posts!`);
  return <Layout>HELLO WORLD</Layout>;
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
