import { GetStaticProps } from "next";
import Layout from "../components/Layout/Layout";
import PostTable from "../components/PostsTable/PostTable";
import styles from "../styles/Home.module.css";
import { GetPostsResults } from "../types";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostContext } from "../contexts/PostContext";

export default function Home({ users }) {
  console.log(`Got ${users.length} posts!`);
  return (
    <Layout>
      <PostContext.Provider value={users}>
        <PostTable></PostTable>
      </PostContext.Provider>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const { results }: GetPostsResults = await res.json();
  const results = await res.json();
  return {
    props: {
      users: results,
    },
  };
};
