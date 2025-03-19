import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Voting DApp</h1>
        <div className={styles.container}>
          <p className={styles.description}>
            Rules are simple:
          </p>
          <p className={styles.description}>
            You will have 2 choices to vote for.
          </p>
          <p className={styles.description}>
            If you vote for the popular choice, you will be rewarded.
          </p>
          <p className={styles.description}>
            If you vote for the unpopular choice, you will be punished.
          </p>
        </div>
        <h2 className={styles.subtitle}>
          Connect your wallet to start voting
        </h2>
        <ConnectButton />
      </main>
    </div>
  );
};

export default Home;
