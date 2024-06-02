import styles from './aboutus.module.scss';
import React from "react";

import { AiNavbar } from '@aiinfox/ai-navbar';
import { AiHero } from '@aiinfox/ai-hero';
import { AiOurexpertise } from '@aiinfox/ai-ourexpertise';
import { AiOurservices } from '@aiinfox/ai-ourservices';
import { AiShared } from '@aiinfox/ai-shared';
import { AiProjects } from '@aiinfox/ai-projects';
import { AiOurjournal } from '@aiinfox/ai-ourjournal';
import { AiFoo } from '@aiinfox/ai-foo';


async function getArtist(username: string) {
  const res = await fetch(`https://v2.jokeapi.dev/joke/Any`)
  return res.json()
}

/* eslint-disable-next-line */
export interface AboutusProps {
  data: any;
}

export async function AboutusComp(props: AboutusProps) {

  // Initiate both requests in parallel
  const artistData = await getArtist('username')

  // Wait for the promises to resolve
  const [artist] = await Promise.all([artistData])

  console.log('Fetch Working From About Component');
  console.log(artist);
  // console.log(props);

  return (
    <div  className={styles['container']}>
      {props.data}
        {/* Navbar */}
        <AiNavbar></AiNavbar>
        {/* ./Navbar */}
        {/* Hero Banner */}
        <AiHero></AiHero>
        {/* ./Hero Banner */}
        {/* Our Expertise */}
        <AiOurexpertise></AiOurexpertise>
        {/* ./Our Expertise */}
        {/* Our Services */}
        <AiOurservices></AiOurservices>
        {/* ./Our Services */}
        {/* Shared for Other Components Like Collab/Contact ETC */}
        <AiShared></AiShared>
        {/* ./Shared for Other Components Like Collab/Contact ETC */}
        {/* Our Projects */}
        <AiProjects></AiProjects>
        {/* ./Our Projects */}
        {/* Our Journal */}
        <AiOurjournal></AiOurjournal>
        {/* ./Our Journal */}
        {/* Foo */}
        <AiFoo></AiFoo>
        {/* ./Foo */}
    </div>
  );
}

export default AboutusComp;
