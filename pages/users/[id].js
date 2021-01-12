import { useRouter } from 'next/router';
import Layout from '../../components/layout';

const User = ({ user }) => {
    const router = useRouter();

    if (router.isFallback) {
      return <div>CARGANDO...</div>
    }

    return (
      <Layout title={`User:${user.id}`}>
        <h2>User Details</h2>
        <p>User Id: {router.query.id}</p>
        {user && user.id ? (
          <div className="card">
            <p><strong>Name: </strong>{user.name}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Phone: </strong>{user.phone}</p>
            <p><strong>Website: </strong>{user.website}</p>
          </div>
        ) : (
          <h3>No existe usuario con este ID</h3>
        )}
        <style jsx>
          {`
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

export default User;

// Para prerenderizar
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const users = await res.json();
  
    const paths = users.map(user => {
      return {
        params: { id: `${user.id}` }
      }
    });
    
    return {
      paths,
      fallback: true // Para permitir que acceder a la url con el id de forma directa
    }
  }

// Contenido cargado por parte del servidor
export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
} 