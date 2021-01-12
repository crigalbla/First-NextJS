import Head from 'next/head';
import Navbar from "./navbar"

const Layout = (props) => {
    return (
      <div>
        <Head>
          <title>First-NextJS {props.title}</title>
          <meta
            name="description"
            content="Primer proyecto creado con NextJS"
          />
        </Head>
        <Navbar />
        <main>{props.children}</main>
        <style jsx>
          {`
            div {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            main {
              flex: 1;
            }
          `}
        </style>
        <style jsx global>
          {`
            html,
            body {
              padding: 1;
              margin: 1;
            }
            h1 {
              display: flex;
              justify-content: center;
            }
          `}
        </style>
      </div>
    );
}

export default Layout;