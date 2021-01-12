import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const Users = ({ users }) => {
    return (
      <Layout  title="Users">
        <h1>Users Page</h1>
        <div className="grid">
          {users.map((user) => {
            return (
              <Link
                href="/users/[id]"
                as={`/users/${user.id}`}
                key={user.id.toString()}
              >
                <a className="card">
                  <p>
                    <strong>Name: </strong>
                    {user.name}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {user.email}
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
        <style jsx>
          {`
            .grid {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              max-width: 80vw;
              margin-top: 3rem;
            }
            .card {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
            .card:hover,
            .card:focus,
            .card:active {
              color: #0070f3;
              border-color: #0070f3;
            }
            .card h3 {
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }
            .card p {
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
            }
          `}
        </style>
      </Layout>
    );
}

export default Users;

// Contenido cargado estáticamente
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users
        }
    }
}
