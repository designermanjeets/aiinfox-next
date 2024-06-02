import styles from './page.module.scss';
import { AboutusComp } from './aboutus';

async function getProjects() {
  const res = await fetch(`https://v2.jokeapi.dev/joke/Any`, { cache: 'no-store' })
  const projects = await res.json()
 
  return projects
}

/* eslint-disable-next-line */
export interface AboutusProps {
  artist?: any[];
}

export default async function AboutusPage(props: AboutusProps) {

  // Initiate both requests in parallel
  const projects = await getProjects()

   // Wait for the promises to resolve
   const [artist] = await Promise.all([projects]);

  //  props['artist'] = artist;

  console.log('Fetch Working From About Page');
   console.log(artist);
  //  console.log(props);

  return (
    <div className={styles['container']}>
      <AboutusComp data={''}></AboutusComp>
    </div>
  );
}
