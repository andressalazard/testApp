import { GetStaticProps } from "next";
import Layout from "../components/Layout/Layout";
import TeamDashboard from "../components/TeamDashboard/TeamDashboard";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../contexts/PostContext";

export default function Home({ users }) {
  console.log(`Got ${users.length} posts!`);
  return (
    <Layout>
      <UserContext.Provider value={users}>
        <TeamDashboard></TeamDashboard>
      </UserContext.Provider>
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
