import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { people: data }
  }
}

const Ninjas = ({ people }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {people.map(ninja => (
        <Link href={'/people/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;