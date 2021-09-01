import styles from '../styles/Home.module.css'
import Link from 'next/link'
import About from './About'
import Projects from './Projects'

export default function Home() {

  return (
    <div className={styles.container}>
      <Link passHref href="/Picture"><strong style={{ fontSize: "4vw", cursor:"pointer" }}>⋆Picture with no header or footer</strong></Link>
      <Link passHref href="/About"><strong style={{ fontSize: "4vw", cursor:"pointer" }}>⋆About with no header</strong></Link>
      <Link passHref href="/Projects"><strong style={{ fontSize: "4vw", cursor:"pointer" }}>⋆Project with no footer</strong></Link>
      <Link passHref href="Product"><strong style={{ fontSize: "4vw", cursor:"pointer" }}>⋆Products with dynamic routing [].js</strong></Link>
      <Link passHref href="/users"><strong style={{ fontSize: "4vw", cursor:"pointer" }}>⋆List of users with getStaticProps()</strong></Link>
      <Link passHref href="/News"><strong style={{ fontSize: "4vw", cursor:"pointer" }}>⋆List of news with getServerSideProps()</strong></Link>
      <Link passHref href="/Posts"><a ><strong style={{ fontSize: "4vw" }}>⋆Posts with getStaticPaths() </strong></a></Link>
    </div>
  )
}

