import Head from 'next/head';
import Layout from '../components/layout';

const Home = () => {
    return (
      <Layout>
        <h1>Home Page</h1>
        <p>Primer proyecto con Next js</p>
        <style jsx>
          {`
            p {
              color: darkgray;
            }
            p:hover {
              color: darkred;
            }
          `}
        </style>
      </Layout>
    );
}

export default Home;