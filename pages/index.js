import Layout from '../components/layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



const Index = (props) => (
  <Layout>
    <p>Hello Next.js</p>
    <h1>Batman TV Shows</h1>
    <ul className="list">
      {props.shows.map( show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
      
    </ul>
    <style jsx>{`
      .list{
        padding: 0;
      }
      .list li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();
  const data = [{show:{id:1,name:"123",}},{show:{id:2,name:"234",}}]
  console.log(`Show data fetched. Count: ${data.length}`);
  // console.log(data);
  return {
    shows: data.map(entry => entry.show)
  };
}
 


export default Index;