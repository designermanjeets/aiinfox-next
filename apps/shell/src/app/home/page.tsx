import styles from './page.module.scss';
import { AiNavbar } from '@aiinfox/ai-navbar';
import { AiHero } from '@aiinfox/ai-hero';
import { AiOurexpertise } from '@aiinfox/ai-ourexpertise';
import { AiOurservices } from '@aiinfox/ai-ourservices';
import { AiShared } from '@aiinfox/ai-shared';
import { AiProjects } from '@aiinfox/ai-projects';
import { AiOurjournal } from '@aiinfox/ai-ourjournal';
import { AiFoo } from '@aiinfox/ai-foo';


/* eslint-disable-next-line */
export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home</h1>
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
